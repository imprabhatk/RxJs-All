import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignService } from 'src/app/service/design.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit, AfterViewInit {

  @ViewChild('addBtn') addBtn : ElementRef

  constructor(private design : DesignService) { }

  ngOnInit(): void {  }

  ngAfterViewInit() {
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res => {
      let countVal = 'data ' + count++;
      console.log(countVal);
      this.design.print(countVal,'elContainer');
      this.design.print(countVal,'elContainer1');
    })
  }
}