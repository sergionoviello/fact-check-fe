import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ImageSearchService {
  apiUrl;
  data;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://example.com';
    this.data = {};
   }

  searchImage(data): Observable<any> {

    return this.http.post(this.apiUrl, data, httpOptions)
    .pipe(
      catchError(this.handleError)
    );

  }

  handleError(err: Response) {
    return Observable.throw('err')
  }

  setImageData(data) {
    this.data.imageData = data;
  }

  setOrigSize(w, h) {
    this.data.origWidth = w;
    this.data.origHeight = h;
  }

  getResults() {
    let res = {
      "full_matches": [
        {
            "country": "United States",
            "unix_time": 1532573962,
            "image_url": "https://us-east-1.tchyn.io/snopes-production/uploads/2018/02/cadburyhiv.jpg"
        }
      ],
      "best_guess": [
          "cadbury hiv"
      ],

      stories: []
    }

    let dummyResult = {
      title: 'Where is Mohammad bin Salman? Not dead according to Saudi Arabia',
      url: 'https://www.newsweek.com/wheres-mohammed-bin-salman-not-dead-according-saudi-arabia-950996',
      date: 'May 31, 2018',
      description: 'audi authorities have released new video footage of Mohammed bin Salman amid conspiracy theories alleging the crown prince has been dead for more than a month.'
    };


    for (let i = 0; i < 10; i++) {
      res.stories.push(dummyResult);
    }

    return res;
  }

  searchResults() {
    let res = this.getResults();
    let formattedResult = {
      imageData: res.full_matches[0].image_url,
      relatedText: res.best_guess[0],
      stories: res.stories
    }
    return formattedResult;
  }
}
