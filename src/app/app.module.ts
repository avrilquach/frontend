import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomepageComponent} from './homepage/homepage.component';
import {OrderByPipe} from "./order-by.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
