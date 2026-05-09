import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service';
import IUser from 'src/app/models/user.model';
import { RegisterValidators } from '../validators/register-validators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private auth: AuthService) { }

  inSubmission = false
  awaitingVerification = false

  name = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ])
  email = new FormControl('', [
    Validators.required,
    Validators.email
  ])
  age = new FormControl<number | null>(null, [
    Validators.required,
    Validators.min(18),
    Validators.max(120)
  ])
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
  ])
  confirm_password = new FormControl('', [
    Validators.required
  ])
  phoneNumber = new FormControl('', [
    Validators.required,
    Validators.minLength(16),
    Validators.maxLength(16)
  ])
  verificationCode = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(6)
  ])

  showAlert = false
  alertMsg = 'Please wait! Your account is being created.'
  alertColor = 'blue'

  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirm_password: this.confirm_password,
    phoneNumber: this.phoneNumber
  }, [RegisterValidators.match('password', 'confirm_password')])

  async register() {
    this.showAlert = true
    this.alertMsg = 'Please wait! Your account is being created.'
    this.alertColor = 'blue'
    this.inSubmission = true

    try {
      const status = await this.auth.createUser(this.registerForm.value as IUser)
      if (status === 'needs_verification') {
        this.awaitingVerification = true
        this.alertMsg = 'A verification code has been sent to your email. Please enter it below.'
        this.alertColor = 'blue'
        this.inSubmission = false
        return
      }
    } catch (error: any) {
      const code: string = error?.errors?.[0]?.code ?? ''
      if (code === 'form_identifier_exists') {
        this.alertMsg = 'The email address is already in use.'
      } else {
        this.alertMsg = 'An unexpected error occurred. Please try again later.'
        console.error(error)
      }
      this.alertColor = 'red'
      this.inSubmission = false
      return
    }

    this.alertMsg = 'Success! Your account has been created.'
    this.alertColor = 'green'
  }

  async verifyCode() {
    this.showAlert = true
    this.alertMsg = 'Verifying your email...'
    this.alertColor = 'blue'
    this.inSubmission = true

    try {
      await this.auth.verifyEmail(this.verificationCode.value!)
    } catch (error: any) {
      const code: string = error?.errors?.[0]?.code ?? ''
      if (code === 'verification_failed' || code === 'form_code_incorrect') {
        this.alertMsg = 'Invalid verification code. Please try again.'
      } else {
        this.alertMsg = 'Verification failed. Please try again later.'
        console.error(error)
      }
      this.alertColor = 'red'
      this.inSubmission = false
      return
    }

    // Clerk verified — save extra fields to D1 (best-effort)
    try {
      await this.auth.saveUserProfile(this.age.value, this.phoneNumber.value!)
    } catch (e) {
      console.warn('Could not save user profile to D1:', e)
    }

    this.alertMsg = 'Success! Your account has been created.'
    this.alertColor = 'green'
  }
}
