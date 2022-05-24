import { Component, OnInit } from '@angular/core'
import {  Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
  
  billForm:FormGroup

  submitted=false;
   
  billList:any=[];
  editoperation=false;
  selectedbill:any;
  billterm="";

  constructor(private formBuilder:FormBuilder) {
    this.billForm = this.formBuilder.group ({
      Name:['',[Validators.required,Validators.minLength(5), Validators.maxLength(12)]],
      CarName:['',[Validators.required]],
      bill:['',[Validators.required,Validators.minLength(4), Validators.maxLength(7)]],
    })
    let billdata = localStorage.getItem('BILL_LIST');
    if(billdata){
      this.billList = JSON.parse(billdata);
    }
   }

  ngOnInit(): void {
  }

  Billsubmit(){
    this.submitted=true;
  
  if(this.billForm.valid){
    this.billList.push(this.billForm.controls)
   
    console.log("login sucessfully",this.billForm.controls);
    alert("Form is valid.... Submitted Sucessfully...!")
  }
  else{
    alert("Form Is Not-Valid....Please try again....!")
  }
  this.clear();

   localStorage.setItem("BILL_LIST", JSON.stringify(this.billList))
  }

  Updatebill(){
    this.editoperation=false;
    
    this.billList[this.selectedbill].Name=this.billForm.value.Name;
    this.billList[this.selectedbill].CarName=this.billForm.value.CarName;
    this.billList[this.selectedbill].bill=this.billForm.value.bill;
    this.clear()
  
    localStorage.setItem("BILL_LIST", JSON.stringify(this.billList))
  }

  Billedit(index:any,obj:any){
    this.editoperation=true;
    this.selectedbill=index;

    this.billForm.patchValue({
     Name: obj.Name,
     CarName: obj.CarName,
     bill: obj.bill
})

  }

  Billtrash(index:any){
    console.log("Delete",index);
    this.billList.splice(index,1)
  }

  clear(){
    this.billForm.reset();

  }

  get f(){
    return this.billForm.controls
  }
}
