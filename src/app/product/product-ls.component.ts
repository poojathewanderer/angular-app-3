
import { Product } from './product'
import { OnInit, Component } from '@angular/core'
import { ProductService } from '../product-service';
@Component({
    selector: 'prod-list',
    templateUrl: './product-ls.component.html',

})
export class ProductListComponent implements OnInit {

    products: Product[];
    url = "http://localhost:8081/web-based-jquery-project-1/ProductControllerServlet";

    constructor(private ps: ProductService) {

    }

    ngOnInit() {

    }

    getProducts(state) {
        
        this.ps.retrieveFromServer(this.url +state).subscribe(
            data => {
                this.products =  data;
            });
    }

}  