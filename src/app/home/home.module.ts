import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPresentationComponent } from './components/product-presentation/product-presentation.component';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './homer-routing.module';
import { ProductCharacteristicsComponent } from './components/product-characteristics/product-characteristics.component';



@NgModule({
  declarations: [
    ProductPresentationComponent,
    HomeComponent,
    ProductCharacteristicsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
