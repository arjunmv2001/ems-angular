import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allemployees:any[],searchTerm:string,propsName:string): any[] {
    const result:any[]=[]
    if(!allemployees||searchTerm==''||propsName==''){
      return allemployees;
    }
    allemployees.forEach((employee:any)=>{
      if(employee[propsName].trim().toLowerCase().includes(searchTerm.trim().toLowerCase()))
      result.push(employee)
    })
    return result;
  }

}
