import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {
  photos: any = [];
  constructor(private api: ApiService, public router: Router) {
  }
  ngOnInit() {
    this.AllPhotos();
  }

  AllPhotos() {
    this.api.getPhotos()
      .subscribe(data => this.photos = data);
  }
  UpdatePhotos(id: number,photos: any) {
    if(window.confirm('Are you sure, you want to vote?')){
      this.api.updatePhotos(id, photos).subscribe(data => {
        this.AllPhotos();
      })
    }
  }

}
