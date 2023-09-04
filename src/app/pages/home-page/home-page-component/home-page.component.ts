import {Component, OnInit} from '@angular/core';
import {EnglishTextService} from "../../../text-services/english-text.service";

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit{
  constructor(
    public englishTextService: EnglishTextService,
    // private appFacade: AppFacade
  ) {}

  userEmail: any = "";
  userFullName: any = "";
  userMessage: any = "";
  phoneNumber: any = "";

  ngOnInit(){
  }

  test(){
    console.log(this.userEmail);
    console.log(this.userFullName);
    console.log(this.userMessage);
    console.log(this.phoneNumber);
  }

  scrollToView(){
    var elementToScrollTo = document.getElementById("contact-us")
    elementToScrollTo?.scrollIntoView({ behavior: "smooth" });
  }

}

