import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DesignService } from 'src/app/service/design.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})

export class ReplaySubjectComponent implements OnInit {

  userList = ['Anup','Shekhar','Mark','John','Alex','Elon','Musk','Elon Musk','Iron','Man'];
  userList1 = [];
  userList2 = [];

  // Subscriptions
  subscribeMode : boolean = false;
  subscribeMode1 : boolean = false;

  // Subscription
  subscription : Subscription;
  subscription1 : Subscription;

  methodInterval : boolean = false;
  intervalSubscription : Subscription;

  constructor(private service : DesignService) { }

  ngOnInit(): void {
    this.service.dataEmit.subscribe(res => {
      this.userList.push(res);
    })
  }

  addData(data) {
    this.service.dataEmit.next(data);
  }

  userSubscribe() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
    else {
      this.subscription = this.service.dataEmit.subscribe(res => {
        this.userList1.push(res);  
        console.log(res);
            
      })
    }
    this.subscribeMode = !this.subscribeMode;
  }

  user1Subscribe() {
    if(this.subscription1) {
      this.subscription1.unsubscribe();
    }
    else {
      this.subscription1 = this.service.dataEmit.subscribe(res => {
        this.userList2.push(res);            
      })
    }
    this.subscribeMode1 = !this.subscribeMode1;
  }

  toggleMethod() {
    this.intervalSubscription;
    const broadCastData = interval(1000);
    if(!this.methodInterval) {
      this.intervalSubscription = broadCastData.subscribe(res => {
        this.service.dataEmit.next('data' + res);
      })
    }
    else {
      this.intervalSubscription.unsubscribe();
    }
    this.methodInterval = !this.methodInterval
  }
}