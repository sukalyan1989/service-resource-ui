import { UserService, User } from '../services/user.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private user:UserService) { }

  ngOnInit() {
  }
  submit(f:FormGroup){
    var u:User={
      firstname:f.value['firstname'],
      lastname:f.value['lastname'],
      mobile:f.value['mobile'],
      email:f.value['email'],
      password:f.value['password']
    }
    console.log(u)
    this.user.createUser(u)
    //console.log(f.value);
  }

}
