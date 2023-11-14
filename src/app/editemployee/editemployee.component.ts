import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../Services/api.service';
import { myGroup } from 'src/model/myGroup';
import { myEmployee } from 'src/model/myEmployee';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {
  employeeid:any=""
  employeehold:any=[]
  group:myGroup[]=[]

  empId:string=''
  emp:myEmployee={}
  constructor(private activeRoute:ActivatedRoute, private api:ApiService, private route:Router){
    this.employeehold.GroupId="Select Department"
  }
  ngOnInit(): void {
    
      this.activeRoute.params.subscribe((data:any)=>{
      console.log(data);
      console.log(data.ID);
      this.employeeid=data.ID
      this.api.viewEmployeeDetails(this.employeeid).subscribe((result:any)=>{
        console.log(result);
        this.employeehold=result
        
      })
      this.api.getDepartment().subscribe((data:any)=>{
        console.log(data);
        this.group=data
        
      })
      
      })
   
  }
  updateEmployee(){
    this.api.updateEmployee(this.employeeid,this.employeehold).subscribe((edit:any)=>{
      console.log(edit);
      this.route.navigateByUrl('/EMPLOYEEMANAGEMENTSYSTEM/CurrentEmployees')
      
    })
  }

}
