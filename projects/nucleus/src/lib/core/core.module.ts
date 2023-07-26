import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleBarComponent } from './layout/components/title-bar/title-bar.component';



@NgModule({
  declarations: [
    TitleBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitleBarComponent
  ]
})
export class CoreModule { }
