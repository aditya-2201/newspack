import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NavbarComponent} from './navbar.component';
import {ModalComponent}  from './modal.component';
import { SearchComponent } from './search.component';
import { FooterComponent } from './footer.component';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';
import { SearchContentComponent } from './search-content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ModalComponent,
    SearchComponent,
    SearchContentComponent ,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
