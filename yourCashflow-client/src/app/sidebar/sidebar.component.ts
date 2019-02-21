import { Component, OnInit } from '@angular/core';
import { ExpanseCategory } from '../pages/expanse-category/expanse-category';
import { ExpanseCategoryService } from '../pages/expanse-category/expanse-category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categories: ExpanseCategory[];

  constructor(private expanseCategoryService: ExpanseCategoryService,
              private router: Router) { }

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories() {
      this.expanseCategoryService.getCategories().then(
        categories => {this.categories = categories;},
        err => {console.log(err);});
    }
}
