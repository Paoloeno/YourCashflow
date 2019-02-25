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

  id: number;
  private sub: any;

  constructor(private expanseCategoryService: ExpanseCategoryService,
              private expanseService: ExpanseService,
              private route: ActivatedRoute){}

  ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.findCategory(this.id);
      this.findExpansesByCategoryId(this.id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  findCategory(id: number){
    this.expanseCategoryService.getCategory(id).then(
      category => this.expanseCategory = category);
  }

  findExpansesByCategoryId(id: number){
    this.expanseService.findByCategoryId(id).then(
      expanses => {this.expanses = expanses;
                  this.totalAmount = 0;
                  this.countTotal(this.expanses);});
  }

  createExpanse() {
    this.expanse.categoryId = this.expanseCategory.id;
    this.expanseService.createExpanse(this.expanse);
  }

  deleteExpanse(id: number) {
    this.expanseService.deleteExpanse(id);
  }

  countTotal(expanses: Expanse[]){
    for(var i = 0; i < expanses.length; i++) {
      this.totalAmount += expanses[i].amount;
    }
  }
}
