import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-ls.component';
import { AddProductComponent } from './product/add-product.component';

import { ProductService } from './product-service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot( [
      {path: 'add-product', component: AddProductComponent},
      {path: 'list-product', component: ProductListComponent}
    ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
