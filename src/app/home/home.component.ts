import {Component, OnInit, ViewChild} from '@angular/core';
import { ImageSearchService } from '../image-search.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('fileBrowser') fileInput;

  constructor(private imageSearchService: ImageSearchService, private router: Router) {}

  ngOnInit() {
  }

  onUpload() {
    this.fileInput.nativeElement.click();
  }

  onSelectImage(ev) {
    let file = ev.target.files[0];
    let self = this;
    const reader = new FileReader();
    reader.onloadend = function() {
      self.imageSearchService.setImageData(reader.result);
      localStorage.setItem('fc-image', reader.result);

      self.router.navigate(['/edit'])
    }

    var url = URL.createObjectURL(file);
    var img = new Image;

    img.onload = function() {
      localStorage.setItem('fc-width', img.width.toString());
      localStorage.setItem('fc-height', img.height.toString());
      self.imageSearchService.setOrigSize(img.width, img.height);
    };

    img.src = url;


    reader.readAsDataURL(file);
  }

}
