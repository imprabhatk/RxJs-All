import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignService } from 'src/app/service/design.service';

@Component({
  selector: 'app-customobservable',
  templateUrl: './customobservable.component.html',
  styleUrls: ['./customobservable.component.scss']
})

export class CustomobservableComponent implements OnInit, OnDestroy {

  techStatus;
  techStatus1;
  subs : Subscription;
  names;
  techStatus2;
  
  constructor(private service : DesignService) { }

  ngOnInit(): void {

    // Ex - 1 (Manual)
    const cusObs = Observable.create(observer => {
      setTimeout(() => {
        observer.next('Html');
      },1000);

      setTimeout(() => {
        observer.next('Css');
      },2000)

      setTimeout(() => {
        observer.next('BootStrap');
      },3000)

      setTimeout(() => {
        observer.next('JavaScript');
      },4000)

      setTimeout(() => {
        observer.next('TypeScript');
        observer.complete();
      },5000)
    })
 
    cusObs.subscribe(res => {
      this.service.print(res,'elContainer');
    }, 
    (err) => {
      this.techStatus = 'error';
    },
    () => {
      this.techStatus = 'completed';
    })

    // Ex - 2
    const Arr = ['Html','Css','BootStrap','JavaScript','TypeScript']
    const cusObs1 = Observable.create(observer => {
      let count = 1;
      setInterval(() => {
        observer.next(Arr[count]);
        if(count >= 3) {
          observer.error('Error');
        }
        if(count >= 5) {
          observer.complete();
        }
        count++;
      },1000)
    })

    this.subs = cusObs1.subscribe(res => {
      this.service.print(res,'elContainer1');
    }, 
    (err) => {
      this.techStatus1 = 'error';
    },
    () => {
      this.techStatus1 = 'completed';
    })

    // Ex -3
    const Arr1 = ['Mark','Elon','Musk','Elon Musk','Prabhas'];
    const cusObs2 = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(Arr1[count]);
        if(count >= 2) {
          observer.error('Error Emit')
        }
        if(count >= 5) {
          observer.complete();
        }
        count++;
      },1000);
    }) 

    cusObs2.subscribe(res => {
      this.names = res;      
    }, 
    (err) => {
      this.techStatus2 = 'error';
    },
    () => {
      this.techStatus2 = 'completed';
    })
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}