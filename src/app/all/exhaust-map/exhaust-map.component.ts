import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { concatMap, exhaustMap, tap } from 'rxjs/operators';
import { DesignService } from 'src/app/service/design.service';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.scss']
})

export class ExhaustMapComponent implements OnInit, AfterViewInit {

  url = 'https://global-1bb0f.firebaseio.com/exhaustMap.json';
  num  = 0;
  saveRequest = 0;
  @ViewChild('btn') btn : ElementRef;
  fetching = false;

  constructor(private http : HttpClient, private service : DesignService) { }

  ngOnInit(): void {}

  ngAfterViewInit() {
    fromEvent(this.btn.nativeElement,'click').pipe(tap(() => this.fetching = true),exhaustMap(() => this.onSave(this.num++))).subscribe(res => {
      this.onFetch();
      this.fetching = false; 
    })
  }

  onSave(changes) {
    return this.http.put(this.url,{data:changes});
  }

  onFetch() {
    this.http.get<any>(this.url).subscribe(res => {
      this.saveRequest = res.data;
    })
  }

}
