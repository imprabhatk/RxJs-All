import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignService } from 'src/app/service/design.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, OnDestroy {

  userName : string = 'Srinivasa Ramanujan' ;

  constructor(private service : DesignService) { 
    this.service.userName.subscribe(res => {
      this.userName = res;
    })
  }

  ngOnInit(): void {
    this.service.exclusive.next(true);
  }

  ngOnDestroy() {
    this.service.exclusive.next(false);
  }
}
