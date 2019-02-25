import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../user/user';
import { ExpanseCategoryComponent } from './expanse-category.component';
import { ExpanseCategory } from './expanse-category';

@Injectable({
  providedIn: 'root'
})
export class ExpanseCategoryService {
  private apiUrl = '/api/your-cashflow-server/exp-category';

  constructor(private http: HttpClient) {}

  createCategory(category: ExpanseCategory): Promise<void> {
    let categoryHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, JSON.stringify(category), { headers: categoryHeaders })
      .toPromise()
      .then(response => {console.log(response);window.location.reload();});
   }

   deleteCategory(id: number): Promise<void> {
     const url = this.apiUrl + '/' + id;
     return this.http.delete(url)
       .toPromise()
       .then(
         response => {console.log(response)}
     );
    }

    getCategories(): Promise<Array<ExpanseCategory>>{
      return this.http.get(this.apiUrl)
      .toPromise()
      .then(response => response as ExpanseCategory[]);
    }

    getCategory(id: number): Promise<ExpanseCategory>{
      return this.http.get(this.apiUrl + '/' + id)
      .toPromise()
      .then(response => response as ExpanseCategory);
    }
}
