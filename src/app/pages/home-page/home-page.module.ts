import { NgModule } from '@angular/core';
import {HomePageComponent} from "./home-page-component/home-page.component";
import {CoreModule} from "../../core/core.module";

@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    CoreModule,
  ],
  providers: [],
  bootstrap: [],
})
export class HomePageModule { }
