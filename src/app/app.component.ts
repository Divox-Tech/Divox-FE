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

}
