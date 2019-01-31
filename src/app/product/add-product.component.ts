import { Product } from './product';
import { Component } from '@angular/core';
import { ProductService } from '../product-service';

@Component({
    selector :'add-prod',
    templateUrl : './add-product.component.html'

})
export class AddProductComponent {
    products: Product[];

    product: Product = new Product();

    constructor(private ps: ProductService) {
        
    }

    add(pform) {

        this.ps.sendToServer(this.product);
        this.products = this.ps.getProducts();
        
    }

    /*add() {

        console.log("add called");
        console.log(JSON.stringify(this.product));
    } */

}