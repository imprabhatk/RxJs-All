import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription } from 'rxjs';
import { take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})

export class ToArrayComponent implements OnInit {

  sourceSub: Subscription;

  users = [
    {name : 'Mark', skill : 'Angular'},
    {name : 'Elon' , skill : 'Html'},
    {name : 'Musk' , skill : 'Css'},
    {name : 'Elon Musk', skill : 'Robotics'}
  ]

  results;
  results1;
  results2;

  constructor() { }

  ngOnInit(): void {
    // Ex - 1
    const source = interval(1000);
    this.sourceSub = source.pipe(take(5), toArray()).subscribe(res => {
      this.results = res;      
    })

    // Ex - 2
    const source1 = from(this.users);
    this.sourceSub = source1.pipe(toArray()).subscribe(res => {
      this.results1 = res;      
    })

    // Ex - 3
    const source2 = of('Musk','Elon','Elon Musk','Iron Man');
    this.sourceSub = source2.pipe(toArray()).subscribe(res => {
      this.results2 = res;      
    })
  }

}
