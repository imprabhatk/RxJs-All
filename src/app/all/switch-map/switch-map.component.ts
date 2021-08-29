import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatAll, concatMap, delay, map, switchAll, switchMap } from 'rxjs/operators';
import { DesignService } from 'src/app/service/design.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})

export class SwitchMapComponent implements OnInit {

  constructor(private service: DesignService) { }

  ngOnInit(): void {

    const source = from(['Tech ', 'Comedy ', 'News ']);

    // Ex - 1 Map
    source.pipe(map(res => this.getData(res))).subscribe(res => res.subscribe(res1 => {
      this.service.print(res1, 'elContainer');
    })
    )

    // Ex - 2 Map + SwitchAll
    source.pipe(map(res => this.getData(res)),switchAll()).subscribe(res => {
      this.service.print(res, 'elContainer1');
    })

     // Ex - 3 SwitchAll
     source.pipe(switchMap(res => this.getData(res))).subscribe(res => {
      this.service.print(res, 'elContainer2');
     })
  }

  getData(data) {
    return of(data + 'Video Upload').pipe(delay(1500));
  }
}