import { Component } from '@angular/core';
import { NavbarComponent } from './navbar.component'
import { SearchComponent } from './search.component';
import { FooterComponent } from './footer.component';
import { Headers, Http , Response} from '@angular/http';
import { RequestOptions } from '@angular/http';
import { SearchContentComponent } from './search-content.component';


@Component({
  selector: 'newspack',

  template: `<my-nav></my-nav>
             <search></search>
             
             <my-footer> </my-footer>
            `,

  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
}
