import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DesignService } from 'src/app/service/design.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {
 
  subs : Subscription;
  subs1 : Subscription;
  message;
  message1;
  message2;

  constructor(private service : DesignService) { }

  ngOnInit() {
    const broadCastData = interval(1000);
    
    // Ex - 1
    this.subs = broadCastData.pipe(
      map(data => data)
      ).subscribe(res => {
      this.message = res;
    })

    setTimeout(() => {
      this.subs.unsubscribe()
    },10000);

    // Ex - 2
    this.subs1 = broadCastData.pipe(
      map(data => data*4)
      ).subscribe(res => {
      this.message1 = res;
    })

    setTimeout(() => {
      this.subs1.unsubscribe()
    },10000);

    // Ex - 3
    const members = from([
      {id : 1, name : 'Mask'},
      {id : 2, name : 'Mask1'},
      {id : 3, name : 'Mask2'},
      {id : 4, name : 'Mask3'},
      {id : 5, name : 'Mask4'},
      {id : 6, name : 'Mask5'},
      {id : 7, name : 'Mask6'},
      {id : 8, name : 'Mask7'},
    ])

    members.pipe(map(data => data.name)).subscribe(res => {
      this.service.print(res,'elContainer');
    })
  }
}