import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
getdata(){
  return this.http.get('http://localhost:3000/student')
}
postdata(y){
  return this.http.post('http://localhost:3000/student',y)
}
delete(id){
  return this.http.delete('http://localhost:3000/student/'+id.id)
}
update(emp){
  return this.http.put('http://localhost:3000/student/'+emp.id,emp )
}
}
