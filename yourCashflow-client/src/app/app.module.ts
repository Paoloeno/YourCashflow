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
import { AddExpanseComponent } from './pages/expanse-category/add-expanse/add-expanse.component';
import { FirstCapitalPipe } from './pipes/first-capital.pipe';
import { DeleteExpanseComponent } from './pages/expanse-category/delete-expanse/delete-expanse.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ExpanseCategoryComponent,
    ExpanseComponent,
    SidebarComponent,
    AddCategoryComponent,
    AddExpanseComponent,
    FirstCapitalPipe,
    DeleteExpanseComponent
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
