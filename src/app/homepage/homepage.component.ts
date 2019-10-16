import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private api: ApiService,private http: Http) {
  }
  smartphone: any = [];
  ngOnInit() {
    this.api.getSmartphone();
  }
}
