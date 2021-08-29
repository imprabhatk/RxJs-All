import { Component, OnInit } from '@angular/core';
import { DesignService } from 'src/app/service/design.service';

@Component({
  selector: 'app-subject-example3',
  templateUrl: './subject-example3.component.html',
  styleUrls: ['./subject-example3.component.scss']
})

export class SubjectExample3Component implements OnInit {

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
