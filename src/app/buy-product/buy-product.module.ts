import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyProductRoutingModule } from './buy-product-routing.module';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { MaterialModule } from "../material/material.module";

@NgModule({
  declarations: [
    ShoppingComponent
  ],
  imports: [
    CommonModule,
    BuyProductRoutingModule,
    MaterialModule
  ]
})
export class BuyProductModule { }
