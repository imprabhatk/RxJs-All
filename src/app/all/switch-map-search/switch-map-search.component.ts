import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, pluck, switchMap } from 'rxjs/operators';
import { Search } from 'src/app/appInterface/search.interface';
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'app-switch-map-search',
  templateUrl: './switch-map-search.component.html',
  styleUrls: ['./switch-map-search.component.scss']
})

export class SwitchMapSearchComponent implements OnInit, AfterViewInit {

  @ViewChild('searchForm') searchForm: NgForm;
  searchResults: Search;
  searchResultCount;

  constructor(private service: SearchService) { }

  ngOnInit(): void {}

  ngAfterViewInit() {

    const formValue = this.searchForm.valueChanges;
    formValue.pipe(filter(() => this.searchForm.valid),pluck('searchTerm'),debounceTime(500),distinctUntilChanged(),switchMap(data => this.service.getSearches(data))).subscribe(res => {
      this.searchResults = res;
      this.searchResultCount = Object.keys(res).length;
    })
  }
}