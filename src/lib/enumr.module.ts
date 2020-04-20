import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { EnumrComponent } from './enumr.component';
import { EnumrSvgComponent } from './enumr-svg.component';

@NgModule({
  declarations: [EnumrComponent, EnumrSvgComponent],
  imports: [
    CommonModule 
  ],
  exports: [EnumrComponent]
})
export class EnumrModule { }
