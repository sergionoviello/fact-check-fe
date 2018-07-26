import { Component, OnInit } from '@angular/core';
import { ImageSearchService } from '../image-search.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  results;
  constructor(private imageSearchService: ImageSearchService, private _DomSanitizationService: DomSanitizer) { }

  ngOnInit() {
    this.results = this.imageSearchService.searchResults();

    console.log(this.results);
  }

}
