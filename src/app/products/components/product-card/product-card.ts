import { Component, input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Product } from '../../interfaces/product.interface';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { ProductCarousel } from "../product-carousel/product-carousel";

@Component({
  selector: 'app-product-card',
  imports: [RouterLink, CurrencyPipe, TitleCasePipe, ProductCarousel],
  templateUrl: './product-card.html',
})
export class ProductCard {

  product=input.required<Product>()
}
