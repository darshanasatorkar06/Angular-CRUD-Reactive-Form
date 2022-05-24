import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  staffForm:FormGroup
  submitted=false;
  staffList:any=[];
  editoperation=false;
  selectedstaff:any;
  staffterm="";

  constructor(private formBuilder:FormBuilder) { 
    this.staffForm = this.formBuilder.group({
      staffname:['',[Validators.required,Validators.minLength(6), Validators.maxLength(12)]],
      gender:['',[Validators.required]],
      salary:['',[Validators.required]]
    })
    let staffdata = localStorage.getItem('STAFF_LIST');
    if(staffdata){
      this.staffList = JSON.parse(staffdata);
    }
  }

  ngOnInit(): void {
  }
  staffsubmit(){
    
   this.submitted=true;
    
    if(this.staffForm.valid){
      this.staffList.push(this.staffForm.value)
      console.log("Data add Sucessfully",this.staffForm.value);
      alert("Form is valid.... Submitted Sucessfully...!")
    }
    else{
      alert("Form Is Not-Valid....Please try again....!")
    }

    this.clear();

    localStorage.setItem("STAFF_LIST", JSON.stringify(this.staffList))
  }

  Updatestaff(){
    this.editoperation=false;
    
    this.staffList[this.selectedstaff].staffname=this.staffForm.value.staffname;
    this.staffList[this.selectedstaff].gender=this.staffForm.value.gender;
    this.staffList[this.selectedstaff].salary=this.staffForm.value.salary;
    this.clear()
  
    localStorage.setItem("STAFF_LIST", JSON.stringify(this.staffList))
  }

  staffedit(index:any,obj:any){
    this.editoperation=true;
    this.selectedstaff=index;

    this.staffForm.patchValue({
     staffname: obj.staffname,
     gender: obj.gender,
     salary: obj.salary
})
  }

  stafftrash(index:any){
    console.log("Delete",index);
    this.staffList.splice(index,1)
  }

  clear(){
    this.staffForm.reset();
  }

  get f(){
    return this.staffForm.controls
  }
}
