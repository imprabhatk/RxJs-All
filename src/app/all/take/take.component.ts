import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, timer } from 'rxjs';
import { map, take, takeLast, takeUntil } from 'rxjs/operators';
import { DesignService } from 'src/app/service/design.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})

export class TakeComponent implements OnInit {
  
  randomNames = ['Anup','Shekhar','Mark','John','Alex','Elon','Musk','Elon Musk','Iron','Man'];

  constructor(private service : DesignService) { }

  ngOnInit(): void {
    const nameSource = from(this.randomNames);

    // Ex -1
    nameSource.pipe(take(5)).subscribe(res => {
      this.service.print(res,'elContainer');
    })

    // Ex -2
    nameSource.pipe(takeLast(5)).subscribe(res => {
      this.service.print(res,'elContainer1');
    })

    // Ex - 3
    let condition = timer(5000);
    nameSource.pipe(map(res => res),takeUntil(condition)).subscribe(res => {
      this.service.print(res,'elContainer2');
    })
  }

}
