import {Component, EventEmitter, HostListener, Output} from '@angular/core';
import {AppFacade} from "../../services/app.facade";

@Component({
  selector: 'divox-header',
  templateUrl: './divox-header.component.html',
  styleUrls: ['./divox-header.component.scss']
})
export class DivoxHeaderComponent {
  constructor(
    // private appFacade: AppFacade
  ) {}

  @Output("linkClicked") linkClicked = new EventEmitter<string>();

  setLinkClicked(link: string){
    this.linkClicked.emit(link);
  }

}
