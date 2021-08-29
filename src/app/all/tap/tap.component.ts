import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DesignService } from 'src/app/service/design.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {

  myColor : string = '';

  constructor(private service : DesignService) { }

  ngOnInit(): void {

    const source = interval(1500);

    // Ex - 1
    const Arr = ['Anup','Shekhar','Mark','John','Alex','Elon','Musk','Elon Musk','Iron','Man'];
    let obsSubscription : Subscription;

    obsSubscription = source.pipe(tap(res => {
      if(res == 4) {
        obsSubscription.unsubscribe();
      }
    }),      
      map(res => Arr[res])).subscribe(res => {
      this.service.print(res,'elContainer')
    })

    // Ex - 2
    const Colors = ['Red','Green','Blue','Orange','Yellow','Purple','White','Black'];
    let obsSubscription1 : Subscription;

    obsSubscription1 = source.pipe(tap(res => {
      this.myColor = Colors[res];
      if(res == 4) {
        obsSubscription1.unsubscribe();
      }
    }),      
      map(res => Colors[res])).subscribe(res => {
      this.service.print(res,'elContainer1')
    })
  }
}