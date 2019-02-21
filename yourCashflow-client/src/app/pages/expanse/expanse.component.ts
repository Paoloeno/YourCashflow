import { Component, OnInit } from '@angular/core';
import { ExpanseCategory } from '../expanse-category/expanse-category';
import { ExpanseCategoryService } from '../expanse-category/expanse-category.service';
import { Expanse } from './expanse';
import { ExpanseService } from './expanse.service';

@Component({
  selector: 'app-expanse',
  templateUrl: './expanse.component.html',
  styleUrls: ['./expanse.component.css']
})
export class ExpanseComponent implements OnInit {

  constructor(private expanseService: ExpanseService) { }

  ngOnInit() {
  }

  createExpanse() {
    const expanseNameFormElement: HTMLInputElement = <HTMLInputElement>document.getElementById('expanseName');
    const expanseCategoryIDFormElement: HTMLInputElement = <HTMLInputElement>document.getElementById('expanseCategoryID');
    const expanseDescribtionFormElement: HTMLInputElement = <HTMLInputElement>document.getElementById('expanseDescribtion');
    const expanseAmountFormElement: HTMLInputElement = <HTMLInputElement>document.getElementById('expanseAmount');
    const dateOfTransactionFormElement: HTMLInputElement = <HTMLInputElement>document.getElementById('dateOfTransaction');

    let expanseName = expanseNameFormElement.value;
    let expanseCategoryID = expanseCategoryIDFormElement.value;
    let expanseDescribtion = expanseDescribtionFormElement.value;
    let expanseAmount = expanseAmountFormElement.value;
    let dateOfTransaction = dateOfTransactionFormElement.value;

    expanseNameFormElement.value = "";
    expanseCategoryIDFormElement.value = "";
    expanseDescribtionFormElement.value = "";
    expanseAmountFormElement.value = "";
    dateOfTransactionFormElement.value = "";

    let expanse = new Expanse(expanseName, Number(expanseCategoryID), expanseDescribtion, Number(expanseAmount), new Date());

    this.expanseService.createExpanse(expanse);
  }
}
