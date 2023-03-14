import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { CarouselComponent } from '../shared/components/carousel/carousel.component';
import { GalleryComponent } from '../shared/components/gallery/gallery.component';
import { CardComponent } from '../shared/components/material/card/card.component';
import { CategoriesComponent } from '../shared/components/categories/categories.component';
import { BannerComponent } from './components/banner/banner.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CarouselComponent,
    GalleryComponent,
    CardComponent,
    CategoriesComponent,
    BannerComponent
  ],
  exports: [
    CarouselComponent,
    GalleryComponent,
    CardComponent,
    CategoriesComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule
  ],
})
export class SharedModule { }
