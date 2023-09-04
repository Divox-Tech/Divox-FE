import {Component, OnInit} from '@angular/core';

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

constructor() {
  this.lottieOptions = {
    path: './assets/fox.json',
    autoplay: true,
    loop: true
  };
}

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000)
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
    }

    elementToScrollTo?.scrollIntoView({ behavior: "smooth" });
  }

}
