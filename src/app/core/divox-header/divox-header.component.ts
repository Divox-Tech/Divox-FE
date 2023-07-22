import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'divox-header',
  templateUrl: './divox-header.component.html',
  styleUrls: ['./divox-header.component.scss']
})
export class DivoxHeaderComponent {

  isScrolled = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isScrolled = window.scrollY >= 60;
  }

}
