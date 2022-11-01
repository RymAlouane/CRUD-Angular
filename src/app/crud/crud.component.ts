import { Component, OnInit } from '@angular/core';
import {ProductService} from "../services/product.service";
import {Product} from "../model/product";

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
listP!:Product[];
product!:Product;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.product=new Product();
    this.productService.getProducts().subscribe(
      (data:Product[])=>this.listP=data, );
  }
save()
    {
      this.productService.postProduct(this.product).subscribe(
        ()=>this.listP=[this.product, ...this.listP]
      )
    }


}
