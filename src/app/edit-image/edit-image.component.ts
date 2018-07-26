import { Component, OnInit } from '@angular/core';
import { ImageSearchService } from '../image-search.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-edit-image',
  templateUrl: './edit-image.component.html',
  styleUrls: ['./edit-image.component.css']
})
export class EditImageComponent implements OnInit {
  file: HTMLInputElement;
  imgData: any;
  constructor(private imageSearchService: ImageSearchService, private _DomSanitizationService: DomSanitizer) { }

  ngOnInit() {
    this.imgData = this.imageSearchService.data.imageData;
    if (!this.imgData) {
      this.imgData = this.imageSearchService.data.imageData = localStorage.getItem('fc-image');

    }
  }

  processImage() {
    this.imageSearchService.searchImage(this.imageSearchService.data).subscribe(res => console.log('res', res));
  }

}
