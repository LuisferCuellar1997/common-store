import { AfterViewInit, Component, ElementRef, input, viewChild } from '@angular/core';
// import Swiper JS
// import Swiper styles

import {Navigation,Pagination} from 'swiper/modules';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

@Component({
  selector: 'app-product-carousel',
  imports: [],
  templateUrl: './product-carousel.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styles: `
    .swiper{
      width:100%;
      height:100%;
    }
  `,
})
export class ProductCarousel {
  images = input.required<string[]>();
  swiperDiv = viewChild.required<ElementRef>('swiperDiv');


}
