import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { EnumrComponent } from './enumr.component';



@NgModule({
  declarations: [EnumrComponent],
  imports: [
    CommonModule 
  ],
  exports: [EnumrComponent]
})
export class EnumrModule { }
