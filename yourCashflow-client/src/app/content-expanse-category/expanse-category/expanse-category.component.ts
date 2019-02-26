import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../../user/user';
import { UserService } from '../../user/user.service';
import { ExpanseCategory } from './expanse-category';
import { ExpanseCategoryService } from './expanse-category.service';
import { Expanse } from './expanse/expanse';
import { ExpanseService } from './expanse/expanse.service';

@Component({
  selector: 'app-expanse-category',
  templateUrl: './expanse-category.component.html',
  styleUrls: ['./expanse-category.component.css']
})
export class ExpanseCategoryComponent implements OnInit, OnDestroy{

  private expanseCategory: ExpanseCategory = new ExpanseCategory("", 0,"");
  private expanses: Expanse[] = new Array();
  private totalAmount: number = 0;
  private expanse: Expanse = new Expanse();
  private info: string;

  id: number;
  private sub: any;

  constructor(private expanseCategoryService: ExpanseCategoryService,
              private expanseService: ExpanseService,
              private route: ActivatedRoute){}

// Lifecycle methods
  ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.findCategory(this.id);
      this.findExpansesByCategoryId(this.id);
      this.info = "";
    });
    console.log('ngOnInit');
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

// Category methods
  findCategory(id: number){
    this.expanseCategoryService.getCategory(id).then(
      category => this.expanseCategory = category);
  }

  deleteCategory(id: number){
    this.expanseCategoryService.deleteCategory(id);
  }

  findExpansesByCategoryId(id: number){
    this.expanseService.findByCategoryId(id).then(
      expanses => {this.expanses = expanses;
                  this.totalAmount = 0;
                  this.countTotal(this.expanses);});
  }

  editCategory(){}

//Expanse methods
  createExpanse() {
    this.expanse.categoryId = this.expanseCategory.id;
    this.expanseService.createExpanse(this.expanse);
  }

  showLastMonthExpanses(id: number){
    this.expanseService.findLastMonthExpansesByCategory(id).then(
      expanses => {this.expanses = expanses;
                  this.info = "w ciągu ostatnich 30 dni";
                  this.totalAmount = 0;
                  this.countTotal(this.expanses);});
  }

  showThisMonthExpanses(id: number){
    this.expanseService.findThisMonthExpansesByCategory(id).then(
      expanses => {this.expanses = expanses;
                  this.info = "w tym miesiącu";
                  this.totalAmount = 0;
                  this.countTotal(this.expanses);});
  }

  editExpanse(){}

  deleteExpanse(id: number) {
    this.expanseService.deleteExpanse(id);
  }

// Other methods
  countTotal(expanses: Expanse[]){
    for(var i = 0; i < expanses.length; i++) {
      this.totalAmount += expanses[i].amount;
    }
  }
}
