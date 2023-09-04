import {Component, EventEmitter, HostListener, Output} from '@angular/core';

@Component({
  selector: 'divox-header',
  templateUrl: './divox-header.component.html',
  styleUrls: ['./divox-header.component.scss']
})
export class DivoxHeaderComponent {
  isMenuChanged = false;

  constructor(
    // private appFacade: AppFacade
  ) {}

  @Output("linkClicked") linkClicked = new EventEmitter<string>();

  setLinkClicked(link: string){
    this.linkClicked.emit(link);
  }

  menuOnClick(){
    this.isMenuChanged = !this.isMenuChanged;

  }

}
