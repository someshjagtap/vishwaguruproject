import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
import { SignInData } from 'src/app/model/signInData';




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
 
  
  // isFormInvalid = false;
  // areCredentialsInvalid = false;

  constructor(private authenticationService: AuthenticationService) { }


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

  //   if(!this.loginForm.valid){
  //     this.isFormInvalid=true;
  //     this.areCredentialsInvalid=true;
  //   }
  //  this.checkCredentials();

    console.log(this.loginForm.value);
    const signInData = new SignInData(this.loginForm.value.email, this.loginForm.value.password);
    this.authenticationService.authenticate(signInData);
  }

  // private checkCredentials() {
  //   const signInData = new SignInData(this.loginForm.value.email, this.loginForm.value.password);
  //   if(this.authenticationService.authenticate(signInData)) {
  //     this.isFormInvalid = false;
  //     this.areCredentialsInvalid = true; 
  //   } 
  // }

}
