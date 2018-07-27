import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  apiUrl;
  languages;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://35.240.238.172/api/language_list';
    this.languages = [];
  }

  getLanguageList() {
    return Observable.create(observer => {
      let results = [{
        label: 'english',
        code: 'en'
      }, {
        label: 'french',
        code: 'fr'
      }, {
        label: 'indonesian',
        code: 'id'
      }, {
        label: 'hindi',
        code: 'hi'
      }];

      observer.next(results);
      observer.complete();
    });

    // return this.http.get(this.apiUrl)

    // .pipe(
    //   catchError(this.handleError)
    // );
  }

  translate(text, from, to) {
    let hdrs = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    let url = 'http://35.240.238.172/api/translate';
    let data = {
      text: text,
      from: from,
      to: to
    };

    return this.http.post(url, data, { headers: hdrs, responseType: 'text' })

    .pipe(
      catchError(this.handleError)
    );
  }

  handleError(err: Response) {
    return Observable.throw('err')
  }
}
