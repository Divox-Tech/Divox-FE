import { NgModule } from '@angular/core';
import {HomePageComponent} from "./home-page-component/home-page.component";
import {CoreModule} from "../../core/core.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {RouterOutlet} from "@angular/router";
import {ContactUsButtonComponent} from "../../core/conatct-us-button/contact-us-button.component";

@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet,
    CoreModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
