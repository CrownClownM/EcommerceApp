import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CarouselComponent } from '../shared/components/carousel/carousel.component';
import { GalleryComponent } from '../shared/components/gallery/gallery.component';
import { CardComponent } from '../shared/components/material/card/card.component';
import { CategoriesComponent } from '../shared/components/categories/categories.component';
import { BannerComponent } from './components/banner/banner.component';
import { PaginatorComponent } from './components/material/paginator/paginator.component';
import { Material_Modules } from './components/material/material.index';
import { SortPipe } from './pipes/sort.pipe';


@NgModule({
  declarations: [
    CarouselComponent,
    GalleryComponent,
    CardComponent,
    CategoriesComponent,
    BannerComponent,
    PaginatorComponent,
    SortPipe
  ],
  exports: [
    CarouselComponent,
    GalleryComponent,
    CardComponent,
    CategoriesComponent,
    BannerComponent,
    PaginatorComponent,
    SortPipe,
    Material_Modules,
  ],
  imports: [
    CommonModule,
    RouterModule,
    Material_Modules,
  ],
})
export class SharedModule { }
