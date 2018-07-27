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
  imgData: string;
  textInImage: string;
  constructor(private imageSearchService: ImageSearchService, public _DomSanitizationService: DomSanitizer, private translateService: TranslateService) { }

  ngOnInit() {
    this.imgData = localStorage.getItem('fc-image');
    this.results = this.imageSearchService.searchResults();

    console.log('RES', this.results);

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
    this.textInImage = '';
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

    this.imageSearchService.ocr(this.imgData, this.fromLanguage).subscribe(res => {
      this.textInImage = res['text'].replace('INTERP\nINTERPO\n', '');
    }, error => {
      this.textInImage = '';
    } );
  }

  translateTo(lang) {
    this.selectedToLanguage = lang.label;
    this.toLanguage = lang.code;

    this.translateService.translate(this.textInImage, this.fromLanguage, this.toLanguage).subscribe(res => {
      this.translatedText = res;
    }, error => {
      this.translatedText = 'error';
    } );
  }

  openPage(url) {
    window.open(url, '_blank');
  }
}
