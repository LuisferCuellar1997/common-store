import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../products/services/products.service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product-page',
  imports: [],
  templateUrl: './product-page.html',
})
export class ProductPage {

  productService=inject(ProductsService)
  productTerm=inject(ActivatedRoute).snapshot.params['term'];


  productResource=rxResource({
    params:()=>(this.productTerm),
    stream:({params:term})=>{
      return this.productService.getProduct(term);
    }
  });
}
