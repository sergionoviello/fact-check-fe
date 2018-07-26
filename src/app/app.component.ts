import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ImageSearchService} from './image-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TruPic';

  constructor(private imageSearchService: ImageSearchService, private router: Router) {}

  ngOnInit() {
    console.log('test', this.router.routerState);
  }
}
