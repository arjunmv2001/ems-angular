import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {
  employeeId:string=''
  employee:any=[]
  groupId:string=''
  groupName:string=''
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data); //ID:"1"
      console.log(data.ID);
      this.employeeId=data.ID
      this.api.viewEmployeeDetails(this.employeeId).subscribe((result:any)=>{
        console.log(result);
        this.employee=result
        this.groupId=result.GroupId
        console.log(this.groupId);
        this.api.getGroupName(this.groupId).subscribe((data:any)=>{
          console.log(data);
          this.groupName=data.name
          
        })
        
      })
      
      
    })
  }
}
