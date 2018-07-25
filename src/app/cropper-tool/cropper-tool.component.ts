import { Component, OnInit } from '@angular/core';

import Cropper from 'cropperjs';

@Component({
  selector: 'app-cropper-tool',
  templateUrl: './cropper-tool.component.html',
  styleUrls: ['./cropper-tool.component.css']
})
export class CropperToolComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const image = <HTMLCanvasElement> document.getElementById('image');

    const cropper = new Cropper(image, {
      aspectRatio: 16 / 9
    });
  }
}
