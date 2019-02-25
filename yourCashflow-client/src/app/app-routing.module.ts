import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpanseCategoryComponent } from './content-expanse-category/expanse-category/expanse-category.component';
import { AddCategoryComponent } from './content-expanse-category/expanse-category/add-category.component';

const routes: Routes = [
  {
    path: 'add-category',
    component: AddCategoryComponent
  },
  {
    path: 'Category-Overview/:id',
    component: ExpanseCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
