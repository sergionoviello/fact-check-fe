import { Component, OnInit } from '@angular/core';
import { ImageSearchService } from '../image-search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  results;
  constructor(private imageSearchService: ImageSearchService) { }

  ngOnInit() {
    this.results = this.imageSearchService.getResults();
  }

}
