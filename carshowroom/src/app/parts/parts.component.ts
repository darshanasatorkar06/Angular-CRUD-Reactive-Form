import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss']
})
export class PartsComponent implements OnInit {

  partsForm:FormGroup

  submitted=false;

  partList:any=[];
  editoperation=false;
  selectedpart:any;
  partterm="";

  constructor(private formBuilder:FormBuilder) {
    this.partsForm = this.formBuilder.group({
      partname:['',[Validators.required,Validators.minLength(5), Validators.maxLength(10)]],
      manufacturedate:['',Validators.required],
      MRP:['',[Validators.required,Validators.minLength(3), Validators.maxLength(7)]]
    })
    let partdata = localStorage.getItem('PART_LIST');
    if(partdata){
      this.partList = JSON.parse(partdata);
    }
   }

  ngOnInit(): void {
  }

  submitpart(){
    this.submitted=true;
    
    if(this.partsForm.valid){
      this.partList.push(this.partsForm.value)
    console.log("submitted",this.partsForm.value);
      alert("Form is valid.... Submitted Sucessfully...!")
      this.clear();
    }
    else{
      alert("Form Is Not-Valid....Please try again....!")
    }
  
     localStorage.setItem("PARTS_List", JSON.stringify(this.partList))
  }

  Updatepart(){
   this.editoperation=false;
    
    this.partList[this.selectedpart].Name=this.partsForm.value.Name;
    this.partList[this.selectedpart].CarName=this.partsForm.value.CarName;
    this.partList[this.selectedpart].bill=this.partsForm.value.bill;
    this.clear()
  
    localStorage.setItem("PARTS_LIST", JSON.stringify(this.partList))
  }

  partedit(index:any,obj:any){
    this.editoperation=true;
    this.selectedpart=index;

    this.partsForm.patchValue({
     partname: obj.partname,
     manufacturedate: obj.manufacturedate,
     MRP: obj.MRP
})
  }

  parttrash(index:any){
    console.log("Delete",index);
    this.partList.splice(index,1)
  }

  clear(){
    this.partsForm.reset();
  }

  get f(){
    return this.partsForm.controls
  }
}
