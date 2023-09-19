import { NgModule } from '@angular/core';
import {HomePageComponent} from "./home-page-component/home-page.component";
import {CoreModule} from "../../core/core.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {RouterOutlet} from "@angular/router";
import {ContactUsButtonComponent} from "../../core/conatct-us-button/contact-us-button.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import {NzButtonModule} from "ng-zorro-antd/button";
import { NzMessageModule } from 'ng-zorro-antd/message';

@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet,
    CoreModule,
    HttpClientModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzMessageModule
  ],
  providers: [HttpClient],
  bootstrap: [],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
