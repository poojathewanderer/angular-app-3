
import { Product } from './product'
import { OnInit, Component } from '@angular/core'
import { ProductService } from '../product-service';
import { ThrowStmt } from '@angular/compiler';
@Component({
    selector: 'prod-list',
    templateUrl: './product-ls.component.html',

})
export class ProductListComponent implements OnInit {

    products: Product[];
    currentPosition: number = 1;
    pageSize: number = 3;

    url = "http://localhost:8081/web-based-jquery-project-1/ProductControllerServlet";

    constructor(private ps: ProductService) {

    }

    ngOnInit() {

    }


    getProducts(state) {
        let page = ''
        if(state == 1){
            page = "?go=prev"
            this.currentPosition -= this.pageSize
        }
        if(state == 2){
            page = "?go=next"
            this.currentPosition += this.pageSize
        }

        this.ps.retrieveFromServer(this.url + page +'&currentPosition='+ this.currentPosition).subscribe(
            data => {
                this.products =  data;
            });
    }

}  