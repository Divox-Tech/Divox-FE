import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class AppState {
  private linkClicked = new BehaviorSubject<string>("home");

  setLinkClicked(link: string){
    this.linkClicked.next(link);
  }

  getLinkClicked(){
    return this.linkClicked.asObservable();
  }

}
