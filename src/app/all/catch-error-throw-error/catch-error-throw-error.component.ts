import { Component, OnInit } from '@angular/core';
import { DesignService } from 'src/app/service/design.service';
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'app-catch-error-throw-error',
  templateUrl: './catch-error-throw-error.component.html',
  styleUrls: ['./catch-error-throw-error.component.scss']
})

export class CatchErrorThrowErrorComponent implements OnInit {
  
  fetching : boolean = false;
  allProducts;
  error;
  
  constructor(private service : SearchService) { }

  ngOnInit(): void {
    this.onGetProducts()
  }

  onGetProducts() {
    this.fetching = true;
    this.service.getProducts().subscribe(res => {
      this.allProducts = res;
      this.fetching = false;
    },
    (err) => {
      if(!err.error || !err.error.error) {
        this.error = 'UnKnown Error';
      }
      else {
        this.error = err.error.error;
      }
      this.fetching = false;
    })
  }

}
