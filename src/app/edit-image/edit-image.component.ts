import { Component, OnInit } from '@angular/core';
import { ImageSearchService } from '../image-search.service';
import { DomSanitizer } from '@angular/platform-browser';
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-image',
  templateUrl: './edit-image.component.html',
  styleUrls: ['./edit-image.component.css']
})
export class EditImageComponent implements OnInit {
  file: HTMLInputElement;
  imgData: any;
  wrapperSize: string;
  constructor(private imageSearchService: ImageSearchService, private _DomSanitizationService: DomSanitizer, private router: Router) { }

  ngOnInit() {
    this.imgData = this.imageSearchService.data.imageData;
    if (!this.imgData) {
      this.imgData = this.imageSearchService.data.imageData = localStorage.getItem('fc-image');
      this.imageSearchService.data.origWidth = localStorage.getItem('fc-width');
      this.imageSearchService.data.origHeight = localStorage.getItem('fc-height');
    }
    this.wrapperSize = this.imageSearchService.data.origWidth + 'px';
  }

  processImage() {
    // this.imageSearchService.searchImage(this.imageSearchService.data).subscribe(res => console.log('res', res));
    this.router.navigate(['/results'])

  }

}
