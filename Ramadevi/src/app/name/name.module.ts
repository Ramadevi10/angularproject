import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaiComponent } from './sai/sai.component';



@NgModule({
  declarations: [SaiComponent],
  imports: [
    CommonModule
  ],
  exports:[SaiComponent],
  bootstrap:[SaiComponent]
})
export class NameModule { }
