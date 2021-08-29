import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DesignService {

  // Subject
  exclusive = new Subject<boolean>();
  
  // Subject
  userName = new Subject<string>();
  
  // BehaviorSubject
  userName1 = new BehaviorSubject<string>('Balagi'); 
  
  // Replay Subject
  dataEmit = new ReplaySubject<string>(3,5000); 

  asyncVideoEmit = new AsyncSubject();

  constructor() { }

  print(val,containerId) {
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(containerId).appendChild(el);
  }

  print1(val,containerId) {
    let el = document.createElement('div');
    el.setAttribute('class','item');
    el.innerHTML = val;
    document.getElementById(containerId).prepend(el);
  }

  
}