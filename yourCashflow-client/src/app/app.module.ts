import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './pages/user/user.component';
import { ExpanseCategoryComponent } from './pages/expanse-category/expanse-category.component';
import { ExpanseComponent } from './pages/expanse/expanse.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddCategoryComponent } from './pages/expanse-category/add-category/add-category.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ExpanseCategoryComponent,
    ExpanseComponent,
    SidebarComponent,
    AddCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
