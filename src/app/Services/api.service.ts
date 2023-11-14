import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { myEmployee } from 'src/model/myEmployee';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getAllEmployee():Observable<myEmployee>{
    return this.http.get('http://localhost:3000/employees')
  }
  viewEmployeeDetails(employeeId:string){
    return this.http.get(`http://localhost:3000/employees/${employeeId}`)
  }

  getGroupName(GroupId:string){
    return this.http.get(`http://localhost:3000/groups/${GroupId}`)
  }
  addEmployee(employeeBody:any){
    return this.http.post('http://localhost:3000/employees',employeeBody)
  }
  deleteemployee(emp:any){
    return this.http.delete(`http://localhost:3000/employees/${emp}`)
  }
  getDepartment(){
    return this.http.get(`http://localhost:3000/groups`)
  }
  updateEmployee(emp:any,employeeBody:any){
    return this.http.put(`http://localhost:3000/employees/${emp}`,employeeBody)
  }
}
