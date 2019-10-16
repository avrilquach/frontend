import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {NgModule} from '@angular/core';
import {Ng2OrderModule} from 'ng2-order-pipe';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss']
})

@NgModule({
    imports: [Ng2OrderModule]
})
export class HomepageComponent implements OnInit {

    constructor(private api: ApiService) {
    }

    photos: any = [];

    ngOnInit() {
        this.api.getPhotos()
            .subscribe(data => this.photos = data );
        photos = _.orderBy(photos, 'photos.id', 'desc');
    }
}
