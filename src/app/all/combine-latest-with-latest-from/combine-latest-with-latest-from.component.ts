import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { combineLatest, fromEvent } from 'rxjs';
import { map, pluck, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-combine-latest-with-latest-from',
  templateUrl: './combine-latest-with-latest-from.component.html',
  styleUrls: ['./combine-latest-with-latest-from.component.scss']
})

export class CombineLatestWithLatestFromComponent implements OnInit, AfterViewInit {

  nameSource = ['Anup','Shekhar','Sharma','John','Alex','Mathu','Mike','Hello'];
  colorSource = ['red','green','blue','yellow','voilet','purple','black','orange']

  @ViewChild('name') name:ElementRef;
  @ViewChild('color') color:ElementRef

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit() {
    const nameObs = fromEvent<any>(this.name.nativeElement,'change').pipe(map(event => event.target.value));
    const colorObs = fromEvent<any>(this.color.nativeElement,'change').pipe(pluck('target','value'));

    // Ex -1 CombineLatest
    combineLatest(nameObs,colorObs).subscribe(([name,color]) => {
      this.createBox(name,color,'elContainer')
    })

    // Ex - 2 WithLatestFrom
    // Master namesObs
    // Slave colorsObs
    nameObs.pipe(withLatestFrom(colorObs)).subscribe(([name,color]) => {
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