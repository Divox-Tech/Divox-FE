import {Component, Input, OnInit} from '@angular/core';
import {EnglishTextService} from "../../../text-services/english-text.service";
import {AppFacade} from "../../../services/app.facade";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormControl, FormGroup, NonNullableFormBuilder, Validators} from "@angular/forms";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit{
  constructor(
    public englishTextService: EnglishTextService,
    private fb: NonNullableFormBuilder,
    private http: HttpClient,
    private message: NzMessageService
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

  validateForm: FormGroup<{
    fullName: FormControl<string>;
    email: FormControl<string>;
    phoneNumber: FormControl<string>;
    message: FormControl<string>;
  }> = this.fb.group({
    fullName: ['', [Validators.required]],
    email: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required]],
    message: ['', [Validators.required]],
  });

  submitForm(): void {
    if (this.validateForm.valid) {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/mleylljn',
        {
          name: this.validateForm?.controls?.fullName?.value,
          replyto: this.validateForm?.controls?.email?.value,
          message: this.validateForm?.controls?.message?.value,
          phoneNumber: this.validateForm?.controls?.phoneNumber?.value
        },
        { 'headers': headers }).subscribe(
        response => {
          this.resetForm();
          this.message.create("success", `Your message was sent successfully!`);
        }
      );
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  resetForm(): void {
    this.validateForm.reset();
  }


}

