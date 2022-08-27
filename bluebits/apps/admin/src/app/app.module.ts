import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule,Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ShellComponent } from './shared/shell/shell.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CategoriesListComponent } from './pages/categories/categories-list/categories-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CategoriesService } from '@bluebits/products';
// import { CategoriesFormComponent } from './pages/categories/categories-list/categories-list.component'';

import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ColorPickerModule } from 'primeng/colorpicker';
import { CategoriesFormComponent } from './pages/categories/categories-form/categories-form.component';
const UX_MODULE = [
  CardModule,
  ToastModule,
  InputTextModule,
  TableModule,
  ToolbarModule,
  ButtonModule,
  ConfirmDialogModule,
  ColorPickerModule
];
const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'categories',
        component:CategoriesListComponent
      },
      {
        path:'categories/form',
        component:CategoriesFormComponent
      },
      {
        path:'categories/form/:id',
        component:CategoriesFormComponent
      }
    ]

    
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    DashboardComponent,
    ShellComponent,
    SidebarComponent,
    CategoriesListComponent,
    CategoriesFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
    ...UX_MODULE
  ],
  providers: [CategoriesService,
    MessageService,ConfirmationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
