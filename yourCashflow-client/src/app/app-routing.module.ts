import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoryComponent } from './pages/expanse-category/add-category/add-category.component';
import { ExpanseCategoryComponent } from './pages/expanse-category/expanse-category.component';

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
