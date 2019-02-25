import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = '/api/your-cashflow-server/user';

  constructor(private http: HttpClient) {}

  createUser(user: User): Promise<void> {
    let userHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, JSON.stringify(user), { headers: userHeaders })
      .toPromise()
      .then(response => {console.log(response)});
   }

   deleteUser(id: number): Promise<void> {
     const url = this.apiUrl + '/' + id;
     return this.http.delete(url)
       .toPromise()
       .then(response => {console.log(response)});
    }

    findAllUsers(): Promise<Array<User>> {
      return this.http.get(this.apiUrl)
        .toPromise()
        .then(response => response as User[]);
    }

}
