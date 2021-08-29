import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promoise',
  templateUrl: './promoise.component.html',
  styleUrls: ['./promoise.component.scss']
})

export class PromoiseComponent implements OnInit {

  promiseVal; 

  constructor() { }

  DellAvailable() {
    return false;
  }

  HpAvailable() {
    return false;
  }

  ngOnInit(): void { 
    // ES6
    let buyLaptopNew = new Promise((resolve, reject) => {
      if(this.DellAvailable()) {
        return setTimeout(() => {
          resolve('Dell is Purchased');
        },3000);
      }
      else if(this.HpAvailable()) {
        return setTimeout(() => {
          resolve('Hp is Purchased');
        },3000);
      } 
      else {
        return setTimeout(() => {
          reject('Laptop is not available on store');
        },3000);
      }
    })

    buyLaptopNew.then(res => {
      this.promiseVal = res;
    }).catch(res => {
      this.promiseVal = res;
    })
  }
}