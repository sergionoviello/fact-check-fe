import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('fileBrowser') fileInput;

  constructor() { }

  ngOnInit() {
  }

  onUpload() {
    this.fileInput.nativeElement.click();
  }

  onSelectImage(ev) {
    let file = ev.target.files[0];
    const reader = new FileReader();
    reader.onloadend = function() {

      console.log('RESULT', reader.result)
    }
  }

}
