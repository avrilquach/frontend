import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';

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

  UpdatePhotos(id: number, photos: any) {
    this.api.updatePhotos(id, photos).subscribe(data => {
      this.AllPhotos();
    })
  }

  generateStar(star: number) {
    for (var i = 1; i < star; i++) {
      console.log(star);
    }
  }


}
