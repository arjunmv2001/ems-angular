import { Component, OnInit } from '@angular/core';
import { myEmployee } from 'src/model/myEmployee';
import { ApiService } from '../Services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
      // contactName:string='';
      employe:myEmployee={}
      allGroups:any=[]
      constructor (private api:ApiService, private router:Router){
        this.employe.GroupId="Select Department"
      }
  ngOnInit(): void {
    this.api.getDepartment().subscribe((data:any)=>{
      console.log(data);
      this.allGroups=data
      
    })
  }
      addEmployee(){
        this.api.addEmployee(this.employe).subscribe((result:any)=>{
          this.router.navigateByUrl('/EMPLOYEEMANAGEMENTSYSTEM/CurrentEmployees')
        })
      }
}
