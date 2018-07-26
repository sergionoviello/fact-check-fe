import { Component, OnInit } from '@angular/core';

import Cropper from 'cropperjs';

import { ImageSearchService } from '../image-search.service';

@Component({
  selector: 'app-cropper-tool',
  templateUrl: './cropper-tool.component.html',
  styleUrls: ['./cropper-tool.component.css']
})
export class CropperToolComponent implements OnInit {
  //params;
  cropper;
  image;

  constructor(private imageSearchService: ImageSearchService) {
    // this.params = {
    //   x: 0,
    //   y: 0,
    //   width: 0,
    //   height: 0,
    //   rotate: 0,
    //   scaleX: 0,
    //   scaleY: 0
    // };
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.image = <HTMLCanvasElement> document.getElementById('image');
    let self = this;
    this.cropper = new Cropper(this.image, {
      viewMode: 2,
      responsive: true,
      crop(event) {

        self.imageSearchService.data.x = event.detail.x;
        self.imageSearchService.data.y = event.detail.y;
        self.imageSearchService.data.width = event.detail.width;
        self.imageSearchService.data.height = event.detail.height;
        self.imageSearchService.data.rotate = event.detail.rotate;
        self.imageSearchService.data.scaleX = event.detail.scaleX;
        self.imageSearchService.data.scaleY = event.detail.scaleY;
      }
    });
  }

  flipX(ev) {
    let data = this.cropper.getData();
    this.cropper.scale(data.scaleX * -1, 1);
    //this.imageSearchService.data.scaleX = data.scaleX * -1;
  }

  flipY(ev) {
    let data = this.cropper.getData();
    this.cropper.scale(1, data.scaleY * -1);
    //this.imageSearchService.data.scaleY = data.scaleY * -1;
  }

  rotate() {
    this.cropper.rotate(90)
  }
}
