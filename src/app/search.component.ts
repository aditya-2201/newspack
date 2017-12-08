import { Component } from '@angular/core';
import { Http , Response} from '@angular/http';
import { RequestOptions } from '@angular/http';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  
  http: Http;
  article = [];
 
  constructor(http: Http) {
    this.http = http;
  }
  performSearch(searchTerm: HTMLInputElement): void {
   var apiLink = 'https://newsapi.org/v1/articles?source='+ (searchTerm.value)+'&sortBy=top&apiKey=ffe2f7bc506647df8d554a198631ddfa';
    
    this.http.get(apiLink)
    .subscribe((res: Response) => {
      this.article = res.json().articles;
      console.log(this.article);
    });
  } 
 };