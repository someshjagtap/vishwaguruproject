import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';



@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  


  constructor() { }


  getErrorMessage() {
    if (this.loginForm.value.emailControl.hasError('required')) {
      return 'You must enter a value';
    }

    return this.loginForm.value.emailControl.hasError('email') ? 'Not a valid email' : '';
  }
  ngOnInit(): void {

  }


  hide = true;

  onSubmit() {
    console.log(this.loginForm.value);
  }

}
