import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  registerform:FormGroup
  submitted=false;

  constructor(private formBuilder:FormBuilder) {
    this.registerform = this.formBuilder.group({
      Name:['',[Validators.required,Validators.minLength(6), Validators.maxLength(15)]],
      phone:['',[Validators.required,Validators.minLength(10), Validators.maxLength(13)]],
      address:['',[Validators.required,Validators.minLength(10), Validators.maxLength(20)]],
      email:['',[Validators.required,Validators.minLength(10), Validators.maxLength(15)]],
      password:['',[Validators.required,Validators.minLength(5), Validators.maxLength(10)]]

    })
   }

  ngOnInit(): void {
  }

  register(){
    this.submitted=true;
   
    if(this.registerform.valid){
      console.log("submitted",this.registerform.value);
      alert("Form is valid.... Submitted Sucessfully...!")
    }
    else{
      alert("Form Is Not-Valid....Please try again....!")
    }
     this.registerform.reset();

  }

  get f(){
    return this.registerform.controls
  }
}
