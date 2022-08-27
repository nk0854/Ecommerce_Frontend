import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { FotterComponent } from './shared/fotter/fotter.component';
import { HeaderComponent } from './shared/header/header.component';
import {UiModule} from '@bluebits/ui';
import {AccordionModule} from 'primeng/accordion';
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'products', component: ProductListComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    HomePageComponent,
    ProductListComponent,
    FotterComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes),UiModule,AccordionModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
