import { Product } from './product/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {
    products: Product[];
    url = "http://localhost:8081/web-based-jquery-project-1/ProductControllerServlet";

    // injecting Angular's HttpClient API
    constructor(private http: HttpClient) {}

    sendToServer(product: Product) {
        // Code to communicate with the server
    }
    
    getProducts() : Product[]
    {
        let p1=new Product(1,"lux",5,6);
        let p2=new Product(2,"cinthol",10,11);
        let p3=new Product(3,"dove",25,32);
        let p4=new Product(4,"lifeboy",6,12);
        let p5=new Product(5,"medimix",23,8);
        this.products=[p1,p2,p3,p4,p5];

        return this.products;
    }

    // get products from server
    retriveFromserver(state) : Product[] {
         this.http.get<Product[]>(this.url+state).subscribe(
            data => {
                this.products =  data;
            });
        return this.products;
    }
}