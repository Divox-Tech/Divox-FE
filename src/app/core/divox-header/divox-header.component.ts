import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'divox-header',
  templateUrl: './divox-header.component.html',
  styleUrls: ['./divox-header.component.scss']
})
export class DivoxHeaderComponent {
  isMenuChanged = false;

  constructor(
  ) {}

  setLinkClicked(link: string){
    // this.appFacade.setLinkClicked(link);
  }

  menuOnClick(){
    this.isMenuChanged = !this.isMenuChanged;

  }

}
