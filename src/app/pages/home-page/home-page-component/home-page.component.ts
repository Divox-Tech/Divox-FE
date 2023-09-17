import {Component, Input, OnInit} from '@angular/core';
import {EnglishTextService} from "../../../text-services/english-text.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit{
  constructor(
    public englishTextService: EnglishTextService,
    private http: HttpClient
  ) {}

  userEmail: any = "";
  userFullName: any = "";
  userMessage: any = "";
  phoneNumber: any = "";

  @Input("siteLanguage") siteLanguage: string = "en";

  ngOnInit(){
  }

  scrollToView(){
    var elementToScrollTo = document.getElementById("contact-us")
    elementToScrollTo?.scrollIntoView({ behavior: "smooth" });
  }

  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      const email = contactForm.value;
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


}

