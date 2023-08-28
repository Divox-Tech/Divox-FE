import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {HomePageComponent} from "./pages/home-page/home-page-component/home-page.component";
import {AppState} from "./services/app.state";
import {AppFacade} from "./services/app.facade";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // providers: [AppFacade, AppState]
})
export class AppRoutingModule { }
