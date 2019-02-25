import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserComponent } from './user/user.component';
import { ExpanseCategoryComponent } from './content-expanse-category/expanse-category/expanse-category.component';
//import { ExpanseComponent } from './content-expanse-category/expanse-category/expanse/expanse.component';
import { FirstCapitalPipe } from './pipes/first-capital.pipe';
import { AddCategoryComponent } from './content-expanse-category/expanse-category/add-category.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UserComponent,
    ExpanseCategoryComponent,
    /*ExpanseComponent,*/
    FirstCapitalPipe,
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
