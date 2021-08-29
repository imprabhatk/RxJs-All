import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignService } from 'src/app/service/design.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})

export class OfFromComponent implements OnInit {

  results;

  constructor(private service : DesignService) { }

  ngOnInit(): void {
    // 1. Of Operator
    const Obs1 = of('Anup','Shekhar','Sharma');

    Obs1.subscribe(res => {
      this.service.print(res,'elContainer')
    })

    const Obs2 = of({name : 'Anup', father : 'Shekhar', brother :'Sharma'});

    Obs2.subscribe(res => {
      this.results = res;
    })

    // From
    const Obs3 = from(['Mark','Elon','Musk']);
    Obs3.subscribe(res => {
      this.service.print(res,'elContainer1')    
    })

    // from Promise
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve('Promise Resolved');
      }, 3000);
    });

    const Obs4 = from(promise);
    Obs4.subscribe(res => {
      console.log(res);
      this.service.print(res,'elContainer2')    
    })

    // From string
    const Obs5 = from('Welcome to Angular with Rxjs');
    Obs5.subscribe(res => {
      this.service.print(res,'elContainer3')    
    })
  }

}
