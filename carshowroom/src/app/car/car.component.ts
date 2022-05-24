import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

    CarForm:FormGroup
    submitted=false;
    carList:any=[];
    editoperation=false;
    selectedcar:any;
    carterm="";

  constructor(private formBuilder:FormBuilder) {
    this.CarForm = this.formBuilder.group({
    carname:['',[Validators.required]],
    module:['',[Validators.required,Validators.minLength(5), Validators.maxLength(12)]],
    mileage:['',[Validators.required,Validators.minLength(1), Validators.maxLength(2)]]
    })
    let cardata = localStorage.getItem('CAR_LIST');
    if(cardata){
      this.carList = JSON.parse(cardata);
    }
   }

  ngOnInit(): void {
  }

  submitinfo(){
    this.submitted=true;
    
    if(this.CarForm.valid){
      this.carList.push(this.CarForm.value);
   
    console.log("sucessfully Add Data",this.CarForm.value);
      alert("Form is valid.... submitted Sucessfully...!")
   }
   else{
    alert("Form is not-valid.... please try again...!")
   }
    this.clear();
    localStorage.setItem("CustomerList", JSON.stringify(this.CarForm.value))
  }

  Updatecar(){
    this.editoperation=false;
    
    this.carList[this.selectedcar].CarName=this.CarForm.value.CarName;
    this.carList[this.selectedcar].module=this.CarForm.value.module;
    this.carList[this.selectedcar].mileage=this.CarForm.value.mileage;
    this.clear()
  
    localStorage.setItem("CAR_LIST", JSON.stringify(this.carList))
  }

  edit(index:any,obj:any){
    this.editoperation=true;
    this.selectedcar=index;

    this.CarForm.patchValue({
     carname: obj.carname,
     module: obj.module,
     mileage: obj.mileage
})
  }

  trash(index:any){
    console.log("Delete",index);
    this.carList.splice(index,1)
  }

  clear(){
    this.CarForm.reset();
  }

  get f(){
    return this.CarForm.controls
  }
}
