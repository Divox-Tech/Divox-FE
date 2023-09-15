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

  submitForm() {
    const emailData = {
      personalizations: [
        {
          to: [{ email: 'info@divox.io' }], // Replace with the recipient's email
          subject: 'Customer submit a request',
        },
      ],
      from: { email: this.userEmail }, // Replace with your SendGrid email
      content: [
        {
          type: 'text/plain',
          value: `
            Name: ${this.userFullName}
            Email: ${this.userEmail}
            Phone Number: ${this.phoneNumber}
            Message: ${this.userMessage}
          `,
        },
      ],
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: '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', // Replace with your SendGrid API key
      }),
    };

    this.http.post(
      'https://api.sendgrid.com/v3/mail/send',
      emailData,
      httpOptions
    ).subscribe(
      (response) => {
        console.log('Email sent successfully', response);
        // Handle success as needed
      },
      (error) => {
        console.error('Failed to send email', error);
        // Handle error as needed
      }
    );
  }

}

