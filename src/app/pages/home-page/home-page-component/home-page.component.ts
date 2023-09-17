import {Component, Input, OnInit} from '@angular/core';
import {EnglishTextService} from "../../../text-services/english-text.service";
import {AppFacade} from "../../../services/app.facade";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit{
  constructor(
    public englishTextService: EnglishTextService,
    // private appFacade: AppFacade
    private http: HttpClient
  ) {}

  userEmail: any = "";
  userFullName: any = "";
  userMessage: any = "";
  phoneNumber: any = "";

  @Input("siteLanguage") siteLanguage: string = "en";

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

  onSubmit() {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/mleylljn',
        { name: this.userFullName, replyto: this.userEmail, message: this.userMessage },
        { 'headers': headers }).subscribe(
        response => {
          console.log(response);
        }
      );
  }


}

