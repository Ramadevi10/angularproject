import { Component,  OnInit } from '@angular/core';
import { ServeService} from '../../serve.service'
@Component({
  selector: 'app-sai',
  templateUrl: './sai.component.html',
  styleUrls: ['./sai.component.css']
})
export class SaiComponent implements OnInit {
public sai
public student
  constructor(private user:ServeService) {
   this.sai=[
     {'firstname':'rama','lastname':'devi'},
     {'firstname':'sai','lastname':'srinu'}
   ] 
  }
  
   ngOnInit(): void {
     this.student=this.user.getdata()
  }


}
