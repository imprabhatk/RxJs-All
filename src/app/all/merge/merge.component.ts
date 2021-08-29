import { Component, OnInit } from '@angular/core';
import { interval, merge } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { DesignService } from 'src/app/service/design.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {

  constructor(private service : DesignService) { }

  ngOnInit(): void {
    const sourceTech = interval(3000).pipe(map(v => 'Tech Video #'+ (v+1)),take(5));
    const sourceComedy = interval(6000).pipe(map(v => 'Comedy Video #'+ (v+1)),take(3));
    const sourceNews = interval(3500).pipe(map(v => 'News Video #'+ (v+1)),take(4));
    
    const FinalObs = merge(sourceTech, sourceComedy, sourceNews);
    FinalObs.subscribe(res => {
      this.service.print(res,'elContainer');
    })
  }
}