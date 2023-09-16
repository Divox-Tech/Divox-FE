import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  lottieOptions: {
      path: string; // Replace with the path to your Lottie animation JSON file
      autoplay: boolean; loop: boolean;
  };

  isLoading: boolean = true;
  siteLanguage: string = "en";


  constructor(private titleService: Title, private metaService: Meta,) {
    this.lottieOptions = {
      path: './assets/fox.json',
      autoplay: true,
      loop: true
    };
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);

    this.titleService.setTitle('Divox Agency - Web Development, Marketing, Design, and More');
    this.metaService.updateTag({ name: 'description', content: 'Divox Agency is your one-stop solution for web development, digital marketing, creative design, and packaging services. We bring your ideas to life with cutting-edge technology and creative expertise.' });
  }

  scrollToView(viewName: string){
    var elementToScrollTo;

    if(viewName === "home"){
      window.scrollTo({
        top: 0,
        behavior: "smooth" // You can omit this for instant scrolling
      });
    }else if(viewName === "services"){
      elementToScrollTo = document.getElementById("services")
    }else if(viewName === "whyDivox"){
      elementToScrollTo = document.getElementById("whyDivox")
    }else if(viewName === "ourTeam"){
      elementToScrollTo = document.getElementById("ourTeam")
    }else if(viewName === "aboutUs"){
      elementToScrollTo = document.getElementById("aboutUs")
    }else if(viewName === "contactUs"){
      elementToScrollTo = document.getElementById("contact-us")
    }

    elementToScrollTo?.scrollIntoView({ behavior: "smooth" });
  }

}
