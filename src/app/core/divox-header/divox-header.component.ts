import {Component, HostListener} from '@angular/core';
import {AppFacade} from "../../services/app.facade";

@Component({
  selector: 'divox-header',
  templateUrl: './divox-header.component.html',
  styleUrls: ['./divox-header.component.scss']
})
export class DivoxHeaderComponent {
  constructor(
    private appFacade: AppFacade
  ) {}

  setLinkClicked(link: string){
    // this.appFacade.setLinkClicked(link);
  }

}
