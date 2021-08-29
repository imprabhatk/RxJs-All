import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.scss']
})

export class ShareReplayComponent implements OnInit {

  url = 'https://reqres.in/api/users';
  allUsers : any = [];

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(this.url).subscribe(res => {
      this.allUsers = res.data;
    })
  }
}
