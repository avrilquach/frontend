import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private api: ApiService, private  http: HttpClient) {}
  photos: any = [];
  ngOnInit() {
      this.api.getPhotos()
        .subscribe(data => {
          for(const d of (data as any)) {
            this.photos.push({
              id: d.id,
              name: d.name,
              src: d.src,
              rating: d.rating
            });
          }
          console.log(this.photos);
        });
    }
}
