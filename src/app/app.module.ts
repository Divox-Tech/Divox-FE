import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import { LottieModule } from 'ngx-lottie';
import {HomePageModule} from "./pages/home-page/home-page.module";

export function playerFactory() {
  return import('lottie-web');
}

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        LottieModule.forRoot({player: playerFactory}),
        HomePageModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
