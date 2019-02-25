import { Component, OnInit } from '@angular/core';

import { ExpanseCategory } from './expanse-category';
import { ExpanseCategoryService } from './expanse-category.service';
import { User } from '../../user/user';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html'
})
export class AddCategoryComponent implements OnInit {

  category: ExpanseCategory = new ExpanseCategory();
  userList: User[];
  user: User = new User();

  constructor(private expanseCategoryService: ExpanseCategoryService,
              private userService: UserService) { }

  ngOnInit() {
    this.getAllUsers()
  }

  getAllUsers() {
    this.userService.findAllUsers().then(
      users => {this.userList = users; console.log(this.userList)},
      err => {console.log(err);});
    }

  onSubmit() {

    this.expanseCategoryService.createCategory(this.category);
  }

}
