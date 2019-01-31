
import { Product } from './product'
import { OnInit, Component } from '@angular/core'
import { ProductService } from '../product-service';
@Component({
    selector: 'prod-list',
    templateUrl: './product-ls.component.html',

})
export class ProductListComponent implements OnInit {

    products: Product[];

    constructor(private ps: ProductService) {

    }

    ngOnInit() {

    }

    getProducts(state) {
        
        this.products = this.ps.retriveFromserver(state);
    }

}  