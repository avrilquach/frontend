import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const localUrl = 'assets/data/photo.json';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getPhotos() {
    return this.http.get(localUrl);
  }
}
