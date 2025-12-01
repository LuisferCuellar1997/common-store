import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { Product } from '../../interfaces/product.interface';
import { CurrencyPipe, SlicePipe, TitleCasePipe, UpperCasePipe, NgClass } from '@angular/common';
import { ProductImagePipe } from '../../pipes/product-image.pipe';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink, CurrencyPipe, TitleCasePipe, ProductImagePipe, NgClass],
  templateUrl: './product-card.html',
})
export class ProductCard {

  product=input.required<Product>()
}
