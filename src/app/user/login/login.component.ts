import { Component } from '@angular/core';
import { ClerkService } from 'src/app/services/clerk.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  }

  showAlert = false
  alertMsg = 'Please wait! we are logging you in.'
  alertColor = 'blue'
  inSubmission = false

  constructor(private clerkService: ClerkService) {}

  async login() {
    this.showAlert = true
    this.alertMsg = 'Please wait! we are logging you in.'
    this.alertColor = 'blue'
    this.inSubmission = true

    try {
      await this.clerkService.signIn(this.credentials.email, this.credentials.password)
    } catch (error: any) {
      const code: string = error?.errors?.[0]?.code ?? ''
      if (code === 'form_password_incorrect') {
        this.alertMsg = 'The password is invalid.'
      } else if (code === 'form_identifier_not_found') {
        this.alertMsg = 'User not found.'
      } else {
        this.alertMsg = 'An unexpected error occurred. Please try again later.'
      }
      this.inSubmission = false
      this.alertColor = 'red'
      return
    }

    this.alertMsg = 'Success! You are now logged in.'
    this.alertColor = 'green'
  }
}

