import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillComponent } from './bill/bill.component';
import { CarComponent } from './car/car.component';
import { LoginComponent } from './login/login.component';
import { PartsComponent } from './parts/parts.component';
import { RegisterComponent } from './register/register.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'car',
    component:CarComponent
  },
  {
    path:'parts',
    component:PartsComponent
  },
  {
    path:'staff',
    component:StaffComponent
  },
  {
    path:'bill',
    component:BillComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
