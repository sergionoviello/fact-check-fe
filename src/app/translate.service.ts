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
    return this.http.get(this.apiUrl)

    .pipe(
      catchError(this.handleError)
    );
  }

  handleError(err: Response) {
    return Observable.throw('err')
  }
}
