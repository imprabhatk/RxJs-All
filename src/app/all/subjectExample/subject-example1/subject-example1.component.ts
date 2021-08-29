import { Component, OnInit } from '@angular/core';
import { DesignService } from 'src/app/service/design.service';

@Component({
  selector: 'app-subject-example1',
  templateUrl: './subject-example1.component.html',
  styleUrls: ['./subject-example1.component.scss']
})

export class SubjectExample1Component implements OnInit {

  userName : string = 'Srinivasa Ramanujan' ;

  constructor(private service : DesignService) { 
    this.service.userName.subscribe(res => {
      this.userName = res;
    })
  }

  ngOnInit(): void {}

  onChange(uname) {
    this.service.userName.next(uname.value);
  }

}
