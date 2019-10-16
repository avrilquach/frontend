import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const localUrl = 'assets/data/photo.json';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getPhotos(): Observable<any> {
    return this.http.get(localUrl);
  }
}
