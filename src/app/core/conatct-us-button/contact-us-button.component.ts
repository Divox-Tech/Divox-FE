import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-contact-us-btn',
  templateUrl: './contact-us-button.component.html',
  styleUrls: ['./contact-us-button.component.scss'],
})


export class ContactUsButtonComponent {

  @Output("onClick") onClick = new EventEmitter<any>();

  buttonTrigger(){
    this.onClick.emit();
  }

}
