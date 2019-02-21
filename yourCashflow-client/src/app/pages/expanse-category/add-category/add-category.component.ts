import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user/user.service';
import { ExpanseCategoryService } from '../expanse-category.service';
import { User } from '../../user/user';
import { ExpanseCategory } from '../expanse-category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  constructor(private userService: UserService,
    private expanseCategoryService: ExpanseCategoryService) { }

    createCategory() {

      const categoryNameFormElement: HTMLInputElement = <HTMLInputElement>document.getElementById('categoryName');
      const userIdFormElement: HTMLInputElement = <HTMLInputElement>document.getElementById('categoryUserId');
      const categoryDescribtionFormElement: HTMLInputElement = <HTMLInputElement>document.getElementById('categoryDescribtion');

      let categoryName = categoryNameFormElement.value;
      let userId = userIdFormElement.value;
      let categoryDescribtion = categoryDescribtionFormElement.value;

      categoryNameFormElement.value = "";
      userIdFormElement.value = "";
      categoryDescribtionFormElement.value = "";

      let category = new ExpanseCategory(categoryName, Number(userId), categoryDescribtion);

      this.expanseCategoryService.createCategory(category);
    }

    deleteCategory() {
      const idFormElement: HTMLInputElement = <HTMLInputElement>document.getElementById('categoryId');
      let id = idFormElement.value;
      idFormElement.value = "";
      this.expanseCategoryService.deleteCategory(Number(id));
    }
}
