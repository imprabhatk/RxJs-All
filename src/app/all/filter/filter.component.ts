import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  userList = [
    { id: 1, name: 'Anup', gender: 'Male' },
    { id: 2, name: 'Priyanka', gender: 'Female' },
    { id: 3, name: 'Ashish', gender: 'Male' },
    { id: 4, name: 'Vivek', gender: 'Male' },
    { id: 5, name: 'Janet', gender: 'Female' },
    { id: 6, name: 'Mounika', gender: 'Female' },
    { id: 7, name: 'Rajesh', gender: 'Male' },
    { id: 8, name: 'Sanjana', gender: 'Female' },
    { id: 9, name: 'Neha', gender: 'Female' },
    { id: 10, name: 'Sakshi', gender: 'Female' },
    { id: 11, name: 'Neeraj', gender: 'Male' },
    { id: 12, name: 'Pradeep', gender: 'Male' },
  ]

  data;
  data1;
  data2;

  constructor() { }

  ngOnInit(): void {
    const source = from(this.userList);

    // Ex - 1 - Filter by Length
    source.pipe(filter(member => member.name.length > 6), toArray()).subscribe(res => {
      this.data = res;
    })

    // Ex - 2 - Filter by Gender
    source.pipe(filter(member => member.gender =='Male'), toArray()).subscribe(res => {
      this.data1= res;
    })

    // Ex - 3 - Filter by nth item
    source.pipe(filter(member => member.id<=8), toArray()).subscribe(res => {
      this.data2= res;
    })
  }

}
