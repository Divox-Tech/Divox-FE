import {Component, EventEmitter, HostListener, Output} from '@angular/core';

@Component({
  selector: 'divox-header',
  templateUrl: './divox-header.component.html',
  styleUrls: ['./divox-header.component.scss']
})
export class DivoxHeaderComponent {

  constructor(
  ) {}

  @Output("linkClicked") linkClicked = new EventEmitter<string>();

  selectedLanguage: string = "en";

  setLinkClicked(link: string){
    this.linkClicked.emit(link);
  }

  changeLanguage(lang: string){
    this.selectedLanguage = lang;
  }

}
