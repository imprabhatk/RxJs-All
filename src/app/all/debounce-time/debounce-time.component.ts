import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})

export class DebounceTimeComponent implements OnInit, AfterViewInit {

  @ViewChild('myInput') myInput: ElementRef;
  @ViewChild('myInput1') myInput1: ElementRef;
  requestedData = null;
  requestedData1 = null;

  constructor(private loadingService: LoadingBarService) { }

  ngOnInit(): void { }

  ngAfterViewInit() {

    // Ex - 1 
    const searchTerm = fromEvent<any>(this.myInput.nativeElement, 'keyup').pipe(map(event => event.target.value), debounceTime(500))

    searchTerm.subscribe(res => {
      this.requestedData = res;
      this.loadingService.start();
      setTimeout(() => {
        this.requestedData = null;
        this.loadingService.stop();
      }, 1000)
    })

    // Ex - 2
    const searchTerm1 = fromEvent<any>(this.myInput1.nativeElement, 'keyup').pipe(map(event => event.target.value), debounceTime(500), distinctUntilChanged())

    searchTerm1.subscribe(res => {
      this.requestedData1 = res;
      this.loadingService.start();
      setTimeout(() => {
        this.requestedData1 = null;
        this.loadingService.stop();
      }, 1000)
    })
  }
}