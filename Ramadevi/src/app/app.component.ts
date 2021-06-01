import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public csedata 
 public eeedata
 public Firstname
 name="rama";
 email="pallapoluramadevi";
 street="pothurajupalem";
 city="ongole";
 zipcode="523001";
 onsubmit (value:any){
   console.log(value);
 }
  constructor (){
    this.csedata=[
      {'firstname':'rama','lastname':'devi','phoneno':63892}
     
    ]
     this.eeedata=[
      {'firstname':'sai','lastname':'srinu','phoneno':3432}
     
     ]
   
  }
  
    
  
   
}
