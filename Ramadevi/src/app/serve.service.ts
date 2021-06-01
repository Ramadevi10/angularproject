import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServeService {

  constructor() { }
  getdata(){
    return[
      {'id':1,'name':'padmavathi','age':40},
      {'id':2,'name':'Panchalidevi','age':70},
      
    ]
  }
}
