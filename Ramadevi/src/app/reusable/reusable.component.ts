import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-reusable',
  templateUrl: './reusable.component.html',
  styleUrls: ['./reusable.component.css']
})
export class ReusableComponent implements OnInit {
 @Input() public data;
 
  constructor() { }

  ngOnInit(): void {
  }

}
