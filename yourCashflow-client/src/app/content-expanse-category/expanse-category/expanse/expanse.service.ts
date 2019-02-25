import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Expanse } from './expanse';

@Injectable({
  providedIn: 'root'
})
export class ExpanseService {
  private apiUrl = '/api/your-cashflow-server/expanse';

  constructor(private http: HttpClient,
    private router: Router) {}

    createExpanse(expanse: Expanse): Promise<void> {
      let expanseHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.post(this.apiUrl, JSON.stringify(expanse), { headers: expanseHeaders })
      .toPromise()
      .then(response => {console.log(response); window.location.reload(); });
    }

    findByCategoryId(id: number): Promise<Array<Expanse>>{
      return this.http.get(this.apiUrl + "/findByCategoryId/" + id)
      .toPromise()
      .then(response => response as Expanse[]);
    }

    deleteExpanse(id: number): Promise<void> {
      const url = this.apiUrl + '/' + id;
      return this.http.delete(url)
      .toPromise()
      .then(
        response => {console.log(response); window.location.reload();}
      );
    }
  }
