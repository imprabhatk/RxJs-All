import { Component, OnInit } from '@angular/core';
import { from, interval, merge, of } from 'rxjs';
import { map, mergeAll, mergeMap, take } from 'rxjs/operators';
import { DesignService } from 'src/app/service/design.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit {

  constructor(private service: DesignService) { }

  ngOnInit(): void {

    const source = from(['Tech', 'Comedy', 'News']);

    // Ex - 1 Map
    source.pipe(map(res => this.getData(res))).subscribe(res => res.subscribe(res1 => {
      this.service.print(res1, 'elContainer');
    })
    )

    // Ex - 2 Map + MapAll
    source.pipe(map(res => this.getData(res)),mergeAll()).subscribe(res => {
      this.service.print(res, 'elContainer1');
    })

     // Ex - 3 MeergeMap
     source.pipe(mergeMap(res => this.getData(res))).subscribe(res => {
      this.service.print(res, 'elContainer2');
     })
  }

  getData(data) {
    return of(data + 'Video Upload');
  }
}