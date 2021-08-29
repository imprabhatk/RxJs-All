import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatMap, delay, mergeMap } from 'rxjs/operators';
import { DesignService } from 'src/app/service/design.service';

@Component({
  selector: 'app-concat-map-mobile-notification',
  templateUrl: './concat-map-mobile-notification.component.html',
  styleUrls: ['./concat-map-mobile-notification.component.scss']
})

export class ConcatMapMobileNotificationComponent implements OnInit {

  notifyData = [
    {
      name : 'FaceBook',
      icon : 'assets/images/fb-icon.png',
      time : '4 Second Ago.',
      img : 'https://placeimg.com/50/50/tech/4',
      strong :'Mark James Johnson',
      p : 'Commented on your xyz post. Awesome post!!!! Thanks....'
    },
    {
      name : 'Twitter',
      icon : 'assets/images/twitter-icon.png',
      time : '3 Second Ago.',
      img : 'https://placeimg.com/50/50/tech/3',
      strong :'James Johnson',
      p : 'Commented on your xyz post. Awesome post!!!! Thanks....'
    },
    {
      name : 'FaceBook',
      icon : '../../../assets/images/fb-icon.png',
      time : '2 Second Ago.',
      img : 'https://placeimg.com/50/50/tech/2',
      strong :'James',
      p : 'Commented on your xyz post. Awesome post!!!! Thanks....'
    },
    {
      name : 'Twitter',
      icon : '../../../assets/images/twitter-icon.png',
      time : '1 Second Ago.',
      img : 'https://placeimg.com/50/50/tech/1',
      strong :'Johnson',
      p : 'Commented on your xyz post. Awesome post!!!! Thanks....'
    }
  ]

  constructor(private service : DesignService) { }

  ngOnInit(): void {

    from(this.notifyData).pipe(
      //mergeMap(res =>this.getHtml(res))).subscribe(res => {
        concatMap(res =>this.getHtml(res))).subscribe(res => {
      this.service.print1(res,'elContainer');
    })
  }

  getHtml(data) {
    return of(`<div class="header">
        <div class="app">
          <img src="${data.icon}" width="20">
          ${data.name}
      </div>
      <div class="time">${data.time}.</div>
    </div>
    <div class="body">
      <img src="${data.img}" alt="" class="class-img">
      <strong>${data.strong}</strong>
      <p>${data.p}</p>
    </div>`).pipe(delay(5000));
  }
}