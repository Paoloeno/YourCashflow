import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent{

  constructor(private userService: UserService) { }

  createUser() {
    const loginFormElement: HTMLInputElement = <HTMLInputElement>document.getElementById('login');
    const emailFormElement: HTMLInputElement = <HTMLInputElement>document.getElementById('email');
    const passwordFormElement: HTMLInputElement = <HTMLInputElement>document.getElementById('password');

    let login = loginFormElement.value;
    let email = emailFormElement.value;
    let password = passwordFormElement.value;

    loginFormElement.value = "";
    emailFormElement.value = "";
    passwordFormElement.value = "";

    let user = new User(login, email, password);

    this.userService.createUser(user);
  }

  deleteUser() {
    const idFormElement: HTMLInputElement = <HTMLInputElement>document.getElementById('id');
    let id = idFormElement.value;
    idFormElement.value = "";

    this.userService.deleteUser(Number(id));
  }
}
