import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// user-defined components 
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-ls.component';
import { AddProductComponent } from './product/add-product.component';

// user-defined services
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
    HttpClientModule
  ],
  providers: [ProductService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }