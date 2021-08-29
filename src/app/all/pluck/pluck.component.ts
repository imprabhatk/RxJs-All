import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})

export class PluckComponent implements OnInit {

  data;
  data1;

  users = [
    { name: 'Mark', skills: 'Angular', job: { title: 'Front Developer', exp: '10 Years' } },
    { name: 'Mark1', skills: 'Angular1', job: { title: 'Front Developer1', exp: '5 Years' } },
    { name: 'Mark2', skills: 'Angular2', job: { title: 'Front Developer2', exp: '7 Years' } },
    { name: 'Mark3', skills: 'Angular3', job: { title: 'Front Developer3', exp: '4 Years' } },
    { name: 'Mark4', skills: 'Angular4', job: { title: 'Front Developer4', exp: '1 Years' } }
  ]

  constructor() { }

  ngOnInit(): void {

    // Ex -1
    from(this.users).pipe(
      pluck('name'),
      toArray()).subscribe(res => {
        this.data = res;
    })

    // Ex -2
    from(this.users).pipe(
      pluck('job','title'),
      toArray()).subscribe(res => {
        this.data1 = res;
    })
  }

}
