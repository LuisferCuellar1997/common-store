import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { GenderPage } from './pages/gender-page/gender-page';
import { ProductPage } from './pages/product-page/product-page';
import { NotFounPage } from './pages/not-foun-page/not-foun-page';
import { StoreFrontLayout } from './layouts/store-front-layout/store-front-layout';

export const storeFrontRoutes: Routes = [
  {
    path:'',
    component:StoreFrontLayout,
    children:[
      {
        path:'',
        component:HomePage
      },
      {
        path:'gender/:gender',
        component:GenderPage
      },
      {
        path:'product/:id',
        component:ProductPage
      },
      {
        path:'**',
        component:NotFounPage
      }
    ]
  },
  {
    path:'**',
    redirectTo:''
  }
]

export default storeFrontRoutes;
