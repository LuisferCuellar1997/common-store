import { Component, inject, signal } from '@angular/core';
import { ProductPage } from '../product-page/product-page';
import { ProductCard } from '../../../products/components/product-card/product-card';
import { ProductsService } from '../../../products/services/products.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { ProductsResponse } from '../../../products/interfaces/product.interface';
@Component({
  selector: 'app-home-page',
  imports: [ProductCard],
  templateUrl: './home-page.html',
})
export class HomePage {

  productsService=inject(ProductsService)
  query=signal({})

  productResource=rxResource({
    params:()=>({}),
    stream:({})=>{
      return this.productsService.getProducts({});
    }
  })

 }
