import {Component, OnInit} from '@angular/core';
import {EnglishTextService} from "../../../text-services/english-text.service";

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit{
  constructor(
    public englishTextService: EnglishTextService
  ) {}

  ngOnInit(){
  }

}

