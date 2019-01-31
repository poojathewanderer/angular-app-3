import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <ul class="nav navbar-nav">
      <li><a routerLink="/add-product">Add</a></li>
      <li><a routerLink="/list-product">List</a></li>
      
      <router-outlet></router-outlet>
      </ul>
    </div>

    
  `,
  styles: []
})
export class AppComponent {
  title = 'angular-app3';
}
