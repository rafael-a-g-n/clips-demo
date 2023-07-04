import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials = {
    email: '',
    password: ''
  }

  showAlert = false
  alertMsg = 'Please wait! we are logging you in.'
  alertColor = 'blue'
  inSubmission = false

  constructor(private auth: AngularFireAuth) {

  }

  ngOnInit(): void {

  }

  async login() {
    this.showAlert = true
    this.alertMsg = 'Please wait! we are logging you in.'
    this.alertColor = 'blue'
    this.inSubmission = true

    try {
      await this.auth.signInWithEmailAndPassword(
        this.credentials.email, this.credentials.password
      )
    } catch (error: any) {

      if (error.code as string === 'auth/wrong-password') {
        this.alertMsg = 'The password is invalid or the user does not have a password.'
      } else if (error.code as string == 'auth/user-not-found') {
        this.alertMsg = 'User not found!!!'
      } else {
        this.alertMsg = 'An unexpected error ocurred. Please try again later'
      }
      this.inSubmission = false
      this.alertColor = 'red'
      return
    }

    this.alertMsg = 'Success! You are now logged in.'
    this.alertColor = 'green'
  }
}
