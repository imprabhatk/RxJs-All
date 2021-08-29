import { Component, OnInit } from '@angular/core';
import { DesignService } from 'src/app/service/design.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})

export class AsyncSubjectComponent implements OnInit {

  videoAsyncEmit;

  constructor(private service : DesignService) { }

  ngOnInit(): void {
    this.service.asyncVideoEmit.subscribe(res => {
      this.videoAsyncEmit = res;
    })
  }

  addData(data) {
    this.service.asyncVideoEmit.next(data);
  }

  onComplete() {
    this.service.asyncVideoEmit.complete();
  }
}