import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { BuyProductRoutingModule } from './buy-product-routing.module';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { MaterialModule } from "../material/material.module";
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { StepPruebaComponent } from './components/step-prueba/step-prueba.component';
import { ResultOrderComponent } from './components/result-order/result-order.component';

@NgModule({
  declarations: [
    ShoppingComponent,
    CarrouselComponent,
    DetailProductComponent,
    StepPruebaComponent,
    ResultOrderComponent
  ],
  imports: [
    CommonModule,
    BuyProductRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class BuyProductModule { }
