import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url='http://localhost:3000/products';

  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get<Product[]>(this.url)
}
postProduct(p:Product){
    return this.http.post(this.url,p);
}
}

