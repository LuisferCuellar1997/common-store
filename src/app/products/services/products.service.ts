import { HttpClient } from '@angular/common/http';
import { effect, inject, Injectable, signal } from '@angular/core';
import { Product, ProductsResponse } from '../interfaces/product.interface';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment.development';

const baseUrl=environment.baseUrl;
interface Options{
  limit?:number,
  offset?:number,
  gender?:string
}

@Injectable({providedIn: 'root'})
export class ProductsService {
  constructor() { }


  private http=inject(HttpClient)

  allProducts=signal({})


  getProducts(options:Options):Observable<ProductsResponse>{
    const {limit=52,offset=0,gender=''}=options;
    return this.http.get<ProductsResponse>(`${baseUrl}/products`,{
      params:{
        limit,
        offset,
        gender
      }
    })
    .pipe(
      tap(resp=>console.log({resp}))
    );
  }

  getProduct(term:string){
    return this.http.get<Product>(`${baseUrl}/products/${term}`,{
    })
    .pipe(
      tap(resp=>console.log({resp}))
    );
  }

}
