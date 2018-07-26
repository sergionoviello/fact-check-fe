import { Component, OnInit } from '@angular/core';
import { ImageSearchService } from '../image-search.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  results;
  imgData;
  constructor(private imageSearchService: ImageSearchService, private _DomSanitizationService: DomSanitizer) { }

  ngOnInit() {
    this.results = this.imageSearchService.getResults();

    this.imgData = this.imageSearchService.data.imageData;
    if (!this.imgData) {
      this.imgData = this.imageSearchService.data.imageData = localStorage.getItem('fc-image');
    }
  }

}
