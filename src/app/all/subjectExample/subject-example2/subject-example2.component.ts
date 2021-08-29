import { Component, OnInit } from '@angular/core';
import { DesignService } from 'src/app/service/design.service';

@Component({
  selector: 'app-subject-example2',
  templateUrl: './subject-example2.component.html',
  styleUrls: ['./subject-example2.component.scss']
})

export class SubjectExample2Component implements OnInit {

  userName : string = 'Srinivasa Ramanujan' ;

  constructor(private service : DesignService) {
    this.service.userName.subscribe(res => {
      this.userName = res;
    })
  }

  ngOnInit(): void {  }

  onChange(uname) {
    this.service.userName.next(uname.value);
  }
}
