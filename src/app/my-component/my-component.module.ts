import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponentComponent } from './my-component.component';

@NgModule({
  declarations: [MyComponentComponent],
  imports: [
    CommonModule
  ],
  exports: [MyComponentComponent]
})
export class MyComponentModule { }
