import { NgModule } from '@angular/core';
import {HomePageComponent} from "./home-page-component/home-page.component";
import {CoreModule} from "../../core/core.module";
import {DivoxWelcomeComponent} from "./welcome-divox/welcome-divox.component";

@NgModule({
  declarations: [
    HomePageComponent,
    DivoxWelcomeComponent,
  ],
  imports: [
    CoreModule
  ],
  providers: [],
  bootstrap: [],
})
export class HomePageModule { }
