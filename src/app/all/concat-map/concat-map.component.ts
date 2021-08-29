import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatAll, concatMap, map } from 'rxjs/operators';
import { DesignService } from 'src/app/service/design.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})

export class ConcatMapComponent implements OnInit {

  constructor(private service: DesignService) { }

  ngOnInit(): void {

    const source = from(['Tech', 'Comedy', 'News']);

    // Ex - 1 Map
    source.pipe(map(res => this.getData(res))).subscribe(res => res.subscribe(res1 => {
      this.service.print(res1, 'elContainer');
    })
    )

    // Ex - 2 Map + ConcatAll
    source.pipe(map(res => this.getData(res)),concatAll()).subscribe(res => {
      this.service.print(res, 'elContainer1');
    })

     // Ex - 3 ConcatAll
     source.pipe(concatMap(res => this.getData(res))).subscribe(res => {
      this.service.print(res, 'elContainer2');
     })
  }

  getData(data) {
    return of(data + 'Video Upload');
  }
}