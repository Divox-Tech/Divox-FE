import {Component, OnInit} from '@angular/core';
import {EnglishTextService} from "../../../text-services/english-text.service";
import {AppFacade} from "../../../services/app.facade";

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit{
  constructor(
    public englishTextService: EnglishTextService,
    private appFacade: AppFacade
  ) {}

  userEmail: any = "";

  ngOnInit(){
    // this.appFacade.getLinkClicked().subscribe((linkClicked) => {
    //   console.log(linkClicked, " => linkClicked")
    // })
  }


}

