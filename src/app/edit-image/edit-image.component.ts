import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-image',
  templateUrl: './edit-image.component.html',
  styleUrls: ['./edit-image.component.css']
})
export class EditImageComponent implements OnInit {
  file: HTMLInputElement
  constructor() { }

  ngOnInit() {
  }

  changeImage(ev) {
    this.file = <HTMLInputElement> ev.target.files[0];
    console.log(this.file)
  }

}
