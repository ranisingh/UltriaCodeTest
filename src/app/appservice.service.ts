import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {
  private title = new BehaviorSubject<string>('Component');
  private pagetitle = this.title.asObservable();

  constructor() { }

  Settitle(title:string){
    this.title.next(title);}
    Gettitle(): Observable<string>{
      return this.pagetitle;

    }
}
