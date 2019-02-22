import { Component, OnInit, Input } from '@angular/core';

import { Expanse } from '../../expanse/expanse';
import { ExpanseService } from '../../expanse/expanse.service';

@Component({
  selector: 'app-delete-expanse',
  template: '<button class="btn btn-danger container-fluid" (click)="deleteExpanse()">Usuń</button>',
  styleUrls: ['./delete-expanse.component.css']
})
export class DeleteExpanseComponent implements OnInit {

  @Input()
  expanse: Expanse;

  constructor(private expanseService: ExpanseService) { }

  ngOnInit() {
  }

  deleteExpanse() {
    let id = this.expanse.id;
    this.expanseService.deleteExpanse(id);
  }
}
