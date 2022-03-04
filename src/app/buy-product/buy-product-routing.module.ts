import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingComponent } from "./components/shopping/shopping.component";
import { StepPruebaComponent } from "./components/step-prueba/step-prueba.component";

const routes: Routes = [
  {
    path:'',
    component: ShoppingComponent
  },
  {
    path: 'stepPrueba',
    component: StepPruebaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyProductRoutingModule { }
