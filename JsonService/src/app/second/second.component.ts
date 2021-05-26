import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
table;
student:any={"id":"","num":"","name":""}
save=true;
update=false;
  constructor(private second:ServiceService) { }

  ngOnInit(): void {
    this.getdetails()
  }
getdetails(){
  this.second.getdata().subscribe(res=>{
    this.table=res
  })
}
postdetails(x){
  this.second.postdata(x).subscribe(res=>{
    this.getdetails()
  })
}
delete(c){
  this.second.delete(c).subscribe(res=>{
this.getdetails()
  })
}
edit(x){
  this.save=false;
  this.update=true;
  this.student=x;
}
updatedetails(){
  this.save=true;
  this.update=false;
  this.second.update(this.student).subscribe(res=>{
    this.getdetails()
  })
}
}
