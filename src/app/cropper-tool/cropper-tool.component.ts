import { Component, OnInit } from '@angular/core';

import Cropper from 'cropperjs';

@Component({
  selector: 'app-cropper-tool',
  templateUrl: './cropper-tool.component.html',
  styleUrls: ['./cropper-tool.component.css']
})
export class CropperToolComponent implements OnInit {
  params

  constructor() {
    this.params = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      rotate: 0,
      scaleX: 0,
      scaleY: 0
    };
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const image = <HTMLCanvasElement> document.getElementById('image');
    let self = this;
    const cropper = new Cropper(image, {
      crop(event) {

        self.params.x = event.detail.x;
        self.params.y = event.detail.y;
        self.params.width = event.detail.width;
        self.params.height = event.detail.height;
        self.params.rotate = event.detail.rotate;
        self.params.scaleX = event.detail.scaleX;
        self.params.scaleY = event.detail.scaleY;
      }
    });
  }
}
