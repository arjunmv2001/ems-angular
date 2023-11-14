import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { FrontPageComponent } from './front-page/front-page.component';

const routes: Routes = [
  {
    path:'', redirectTo:'EMPLOYEEMANAGEMENTSYSTEM', pathMatch:'full'
  },
  {
    path:'EMPLOYEEMANAGEMENTSYSTEM', component:FrontPageComponent
  },
  {
    path:'EMPLOYEE MANAGEMENTSYSTEM/ADDEMPLOYEE', component:AddemployeeComponent
  },
  {
    path:'EMPLOYEEMNAGEMENTSYSTEM/EDITEMPLOYEE/:ID', component:EditemployeeComponent
  },
  {
    path:'EMPLOYEEMANAGEMENTSYSTEM/VIEW/:ID', component:ViewemployeeComponent
  },
  {
    path:'EMPLOYEEMANAGEMENTSYSTEM/CurrentEmployees', component:MainpageComponent
  },
  {
    path:'**', component:PageNotFoundComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
