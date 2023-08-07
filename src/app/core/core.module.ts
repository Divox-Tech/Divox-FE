import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DivoxHeaderComponent} from "./divox-header/divox-header.component";
import {ContactUsButtonComponent} from "./conatct-us-button/contact-us-button.component";

@NgModule({
  declarations: [
    DivoxHeaderComponent,
    ContactUsButtonComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  exports: [
    DivoxHeaderComponent,
  ],
})
export class CoreModule { }
