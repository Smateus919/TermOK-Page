import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPresentationComponent } from './components/product-presentation/product-presentation.component';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './homer-routing.module';
import { ProductCharacteristicsComponent } from './components/product-characteristics/product-characteristics.component';
import { MaterialModule } from '../material/material.module';
import { FeaturedVideosComponent } from './components/featured-videos/featured-videos.component';
import { SocialNetworksComponent } from './components/social-networks/social-networks.component';
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [
    ProductPresentationComponent,
    HomeComponent,
    ProductCharacteristicsComponent,
    FeaturedVideosComponent,
    SocialNetworksComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class HomeModule { }
