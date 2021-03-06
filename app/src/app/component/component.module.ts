import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsMostWantedComponent } from './products-most-wanted/products-most-wanted.component';
import { SearchComponent } from './search/search.component';
import { SlideComponent } from './slide/slide.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavBarComponent,
    HeaderComponent,
    SlideComponent,
    ProductsMostWantedComponent,
    ProductCardComponent,
    SearchComponent,
  ],

  imports: [CommonModule, FormsModule],
  exports: [
    FooterComponent,
    NavBarComponent,
    HeaderComponent,
    SlideComponent,
    ProductsMostWantedComponent,
    ProductCardComponent,
  ],
})
export class ComponentModule {}
