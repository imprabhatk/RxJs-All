import { Component, OnInit } from '@angular/core';
import { DesignService } from 'src/app/service/design.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navOpen : boolean = false;

  exclusive : boolean = false;

  constructor(private service : DesignService) { }

  ngOnInit(): void {
    this.service.exclusive.subscribe(res => {
      this.exclusive = res;
    })
  }

  onNavToggle() {
    this.navOpen = !this.navOpen;
  }

}
