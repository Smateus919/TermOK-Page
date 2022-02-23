import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from "./layout/layout.component";
import { HomeModule } from "./home/home.module";

const routes: Routes = [
  {
    path: '',        
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: ()=> import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      {
        path: 'buy',
        loadChildren: ()=> import('./buy-product/buy-product.module').then(m => m.BuyProductModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
