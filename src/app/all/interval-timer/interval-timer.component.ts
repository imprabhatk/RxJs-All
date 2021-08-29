import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignService } from 'src/app/service/design.service';

@Component({
  selector: 'app-interval-timer',
  templateUrl: './interval-timer.component.html',
  styleUrls: ['./interval-timer.component.scss']
})

export class IntervalTimerComponent implements OnInit {

  display;
  // Interval
  videoSubscription : Subscription;

  // Timer
  videoSubscriptions : Subscription;

  constructor(private service : DesignService) { }

  ngOnInit(): void {
    // Timer(delay, interval)
    const broadCastVideo = timer(5000,1000);
    this.videoSubscriptions = broadCastVideo.subscribe(res => {
      this.display = 'Video ' + res;
      this.service.print(this.display,'elContainer3');
      this.service.print(this.display,'elContainer4');
      this.service.print(this.display,'elContainer5');
      if(res >= 5) {
        this.videoSubscriptions.unsubscribe();
      }
    })

     // Interval
     const broadCastVideos = interval(1000);
     this.videoSubscription = broadCastVideos.subscribe(res => {
       this.display = 'Video ' + res;
       this.service.print(this.display,'elContainer');
       this.service.print(this.display,'elContainer1');
       this.service.print(this.display,'elContainer2');
       if(res >= 5) {
         this.videoSubscription.unsubscribe();
       }
     })
  }
}
