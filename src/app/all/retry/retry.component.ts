import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay, retry, retryWhen, scan } from 'rxjs/operators';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})

export class RetryComponent implements OnInit {

  result : any;
  results : any = [];
  fetching : boolean = false;
  status : string = 'No data';

  constructor(private http : HttpClient) { }

  ngOnInit(): void {}

  fetchDetails() {
    this.fetching = true;
    this.status = 'Fetching Data....';   
    this.http.get('https://gorest.co.in/public/v1/users').pipe(
      //retry(4)
      retryWhen(err => err.pipe(
        delay(3000),
        scan((retryCount) => {
          if(retryCount >=5) {
            throw err;
          }
          else {
            retryCount = retryCount + 1;
            this.status = 'Retrying Attemt ' + retryCount
            return retryCount
          }
        },0)
      ))
      ).subscribe(res => {
      this.result = res;
      this.results = this.result.data;
      this.fetching = false; 
      this.status = 'Data Fetched';     
    },
    (err) => {
      this.fetching = false; 
      this.status = 'Problem Fetching Data';    
    })
  }
}
