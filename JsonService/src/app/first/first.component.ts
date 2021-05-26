import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
table
hidesave=true;
hideupdate=false;
stud:any={"id":"","num":"","name":""}
  constructor(private data:ServiceService) { }

  ngOnInit(): void {
    this.getdetails()
  }
getdetails(){
  this.data.getdata().subscribe(res=>{
    this.table=res;
  })
}
savedetails(y){
  this.data.postdata(y).subscribe(res=>{
    this.getdetails()
  })
}
delete(c){
  this.data.delete(c).subscribe(res=>{
    this.getdetails()
  })
}
edit(x){
  this.hidesave=false;
  this.hideupdate=true;
  this.stud=x;
}
updatedetails(){
  this.hidesave=true;
  this.hideupdate=false;
  this.data.update(this.stud).subscribe(res=>{
    this.getdetails()
  })
}
}
