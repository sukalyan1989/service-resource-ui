import { UserService, AuthData } from './../user.service';
import {  FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private user:UserService) { }

  ngOnInit() {

  }
submit(f:FormGroup){
    var auth:AuthData={
      email:f.value.email,
      password:f.value.password
    }
    this.user.login(auth)
    console.log(f.value);
  }

}
