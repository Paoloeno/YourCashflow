export class User{
  id: number;
  login: string;
  email: string;
  password: string;

  constructor(login: string, email: string, password: string){
    this.login = login;
    this.email = email;
    this.password = password;
  }
}
