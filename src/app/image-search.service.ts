import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class ImageSearchService {
  apiUrl;
  data;
  response;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://35.240.238.172/api/image';
    this.data = {};

    this.response = {};
   }

  searchImage(data) {
    let hdrs = new HttpHeaders({
      'Content-Type': 'application/json'
    });


    data.imageData = data.imageData.replace('data:image/jpeg;base64,', '');
    return this.http.post(this.apiUrl, data, { headers: hdrs })

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

  searchResults() {

    if (Object.keys(this.response).length === 0) {
      this.response = JSON.parse(localStorage.getItem('fc-results'));
    }
    console.log('RESPONSE', this.response);

    let formattedResult = {
      imageData: 'http://via.placeholder.com/80x80',
      relatedText: '',
      similar_images: [],
      image_text: ''
    }

    if (this.response.full_matches && this.response.full_matches.length > 0) {
      formattedResult.similar_images.push(this.response.full_matches);
    }

    if (this.response.partial_matches && this.response.partial_matches.length > 0) {
      formattedResult.similar_images.push(this.response.partial_matches);
    }

    if (this.response.similar_images && this.response.similar_images.length > 0) {
      formattedResult.similar_images.push(this.response.similar_images);
    }

    if (this.response.best_guess && this.response.best_guess.length > 0) {
      formattedResult.relatedText = this.response.best_guess[0]
    }

    if (this.response.image_text && this.response.image_text.length > 0) {
      formattedResult.image_text = this.response.image_text[0];
    }

    formattedResult.similar_images = [].concat.apply([], formattedResult.similar_images);

    return formattedResult;
  }

  ocr(img, from) {
    let hdrs = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    img = img.replace('data:image/jpeg;base64,', '');
    const data = {
      imageData: img,
      lang: from
    }
    return this.http.post('http://35.240.238.172/api/text_extraction', data, { headers: hdrs })

    .pipe(
      catchError(this.handleError)
    );
    // return Observable.create(observer => {
    //   observer.next('HELLO');
    //   observer.complete();
    // });
  }
}
