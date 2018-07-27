import { Component, OnInit } from '@angular/core';
import { ImageSearchService } from '../image-search.service';
import { TranslateService } from '../translate.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  results;
  order;
  ascending;
  orderBy: string;
  filterField: string;
  range: string;
  selectedLanguage: string;
  selectedToLanguage: string;
  languages;
  fromLanguage: string;
  toLanguage: string;
  translatedText: string;
  constructor(private imageSearchService: ImageSearchService, public _DomSanitizationService: DomSanitizer, private translateService: TranslateService) { }

  ngOnInit() {
    this.results = this.imageSearchService.searchResults();
    this.translatedText = '';
    this.orderBy = 'Oldest';
    this.order = 'unix_time';
    this.ascending = true;
    this.filterField = 'unix_time';
    this.range = 'Any time';
    this.selectedLanguage = 'No language selected';
    this.selectedToLanguage = 'No language selected';
    this.languages = [];
    this.fromLanguage = '';
    this.toLanguage = '';
    this.translateService.getLanguageList().subscribe(res => {
      this.translateService.languages = res;
      this.languages = res;
    }, error => {

    });
  }

  changeOrder(order) {
    if (order === 'Oldest') {
      this.ascending = true;
    } else {
      this.ascending = false;
    }

    this.orderBy = order;
  }

  changeFilter(ev) {
    this.range = ev.target.innerText;
  }

  changeLanguage(lang) {
    this.selectedLanguage = lang.label;
    this.fromLanguage = lang.code;
  }

  translateTo(lang) {
    this.selectedToLanguage = lang.label;
    this.toLanguage = lang.code;

    this.translateService.translate(this.results.image_text, this.fromLanguage, this.toLanguage).subscribe(res => {
      this.translatedText = res;
    }, error => {
      this.translatedText = 'error';
    } );
  }

  openPage(url) {
    window.open(url, '_blank');
  }
}
