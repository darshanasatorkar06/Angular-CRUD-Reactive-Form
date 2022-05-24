import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginform:FormGroup
    submitted=false;
  constructor(private formBuilder:FormBuilder) { 
    this.loginform = this.formBuilder.group({
      Email:['',[Validators.required,Validators.minLength(6), Validators.maxLength(16)]],
      password:['',[Validators.required,Validators.minLength(6), Validators.maxLength(12)]]
    })
  }

  ngOnInit(): void {
  }

  submit(){
    this.submitted=true;
   
    if(this.loginform.valid){
      console.log("Submitted sucessfully",this.loginform.value);
      alert("Form is valid.... Submitted Sucessfully...!")
    }
    else{
      alert("Form Is Not-Valid....Please try again....!")
    }

    this.loginform.reset();
  }

  get f(){
    return this.loginform.controls
  }
}
