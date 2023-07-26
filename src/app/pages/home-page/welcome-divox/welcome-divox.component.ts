import {Component, OnInit} from '@angular/core';
import {EnglishTextService} from "../../../text-services/arabic-text.service";

@Component({
  selector: 'app-welcome-divox',
  templateUrl: './welcome-divox.component.html',
  styleUrls: ['./welcome-divox.component.scss']
})

export class DivoxWelcomeComponent implements OnInit{
  constructor(
    public englishTextService: EnglishTextService
  ) {}

  ngOnInit(){
  }

}
