import { Component, OnInit, Input } from '@angular/core';
import { ExpanseCategory } from '../expanse-category';
import { ExpanseCategoryService } from '../expanse-category.service';
import { Expanse } from '../../expanse/expanse';
import { ExpanseService } from '../../expanse/expanse.service';

@Component({
  selector: 'app-add-expanse',
  templateUrl: './add-expanse.component.html',
  styleUrls: ['./add-expanse.component.css']
})
export class AddExpanseComponent implements OnInit {

  @Input()
  expanseCategory: ExpanseCategory;

  constructor(private expanseService: ExpanseService) { }

  ngOnInit() {
  }

  createExpanse() {
    const expanseNameFormElement: HTMLInputElement = <HTMLInputElement>document.getElementById('expanseName');
    const expanseDescribtionFormElement: HTMLInputElement = <HTMLInputElement>document.getElementById('expanseDescribtion');
    const expanseAmountFormElement: HTMLInputElement = <HTMLInputElement>document.getElementById('expanseAmount');
    const dateOfTransactionFormElement: HTMLInputElement = <HTMLInputElement>document.getElementById('dateOfTransaction');

    let expanseName = expanseNameFormElement.value;
    let expanseCategoryID: number = this.expanseCategory.id;
    let expanseDescribtion = expanseDescribtionFormElement.value;
    let expanseAmount = expanseAmountFormElement.value;
    let dateOfTransaction = dateOfTransactionFormElement.value;

    expanseNameFormElement.value = "";
    expanseDescribtionFormElement.value = "";
    expanseAmountFormElement.value = "";
    dateOfTransactionFormElement.value = "";

    let expanse = new Expanse(expanseName, expanseCategoryID, expanseDescribtion, Number(expanseAmount),
                              new Date().setFullYear(Number(dateOfTransaction.slice(0,4)),
                                                    Number(dateOfTransaction.slice(5,7) - 1),
                                                    Number(dateOfTransaction.slice(8,10))));

    this.expanseService.createExpanse(expanse);
  }
}
