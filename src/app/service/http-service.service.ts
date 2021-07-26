import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  apiUrl:any = 'https://jsonplaceholder.typicode.com/photos'
  constructor(
    private http: HttpClient,
  ) { }

  getData(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(map((response: any) => {
      return response;
    }));
  }
}
