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
}
