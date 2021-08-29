import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { combineLatest, forkJoin, fromEvent, zip } from 'rxjs';
import { map, pluck, take, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-zip-fork-join',
  templateUrl: './zip-fork-join.component.html',
  styleUrls: ['./zip-fork-join.component.scss']
})
export class ZipForkJoinComponent implements OnInit {

  nameSource = ['Anup','Shekhar','Sharma','John','Alex','Mathu','Mike','Hello'];
  colorSource = ['red','green','blue','yellow','voilet','purple','black','orange']

  @ViewChild('name') name:ElementRef;
  @ViewChild('color') color:ElementRef

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit() {
    const nameObs = fromEvent<any>(this.name.nativeElement,'change').pipe(map(event => event.target.value),take(4));
    const colorObs = fromEvent<any>(this.color.nativeElement,'change').pipe(map(event => event.target.value),take(3));

    // Ex -1 CombineLatest
    zip(nameObs,colorObs).subscribe(([name,color]) => {
      this.createBox(name,color,'elContainer')
    })

    // Ex - 2 WithLatestFrom
    // Master namesObs
    // Slave colorsObs
    forkJoin(nameObs,colorObs).subscribe(([name,color]) => {
      this.createBox(name,color,'elContainer1')
    })
  }

  createBox(name,color, containerId) {
    let el = document.createElement('div');
    el.innerText = name;
    el.setAttribute("class",color);
    document.getElementById(containerId).appendChild(el);
  }
}