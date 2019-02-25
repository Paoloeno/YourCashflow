import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ExpanseCategory } from '../content-expanse-category/expanse-category/expanse-category';
import { ExpanseCategoryService } from '../content-expanse-category/expanse-category/expanse-category.service';

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
