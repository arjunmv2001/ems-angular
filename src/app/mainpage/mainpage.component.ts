import { Component, OnInit } from '@angular/core';
import { myEmployee } from 'src/model/myEmployee';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  searchKey:string='';
  allEmployee:any=[];
  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.getAllEmp()
  }
  getAllEmp(){
    this.api.getAllEmployee().subscribe((data:myEmployee)=>{
      console.log(data);
      this.allEmployee=data
      
    })
  }
  search(event:any){
    console.log(event.target.value);
    this.searchKey=event.target.value
  }
  deleteemployee(emp:any){
    this.api.deleteemployee(emp).subscribe((result:any)=>{
      alert('Delete Successfully')
      this.getAllEmp()
    })
  }

}
