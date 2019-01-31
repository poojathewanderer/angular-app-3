
import { Product } from './product'
import { OnInit, Component } from '@angular/core'
import { ProductService } from '../product-service';
@Component({
    selector: 'product',
    templateUrl: './product-ls.component.html',

})
export class ProductListComponent implements OnInit {

    products: Product[];

    constructor(private ps: ProductService) {

    }

    ngOnInit() {

    }

    add() {
        this.products = this.ps.getProducts();
    }

}  