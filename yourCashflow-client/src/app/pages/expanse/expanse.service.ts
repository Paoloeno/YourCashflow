import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Expanse } from './expanse';

@Injectable({
  providedIn: 'root'
})
export class ExpanseService {
  private apiUrl = '/api/your-cashflow-server/expanse';

  constructor(private http: HttpClient) {}

  createExpanse(expanse: Expanse): Promise<void> {
    let expanseHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, JSON.stringify(expanse), { headers: expanseHeaders })
      .toPromise()
      .then(response => {console.log(response)});
   }

   findByCategoryId(id: number): Promise<Array<Expanse>>{
     return this.http.get(this.apiUrl + "/findByCategoryId/" + id)
     .toPromise()
     .then(response => response as Expanse[]);
   }
}
