import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DivoxHeaderComponent} from "./divox-header/divox-header.component";

@NgModule({
  declarations: [
    DivoxHeaderComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  exports: [
    DivoxHeaderComponent
  ],
  bootstrap: []
})
export class CoreModule { }
