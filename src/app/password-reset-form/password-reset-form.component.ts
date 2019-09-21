import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-reset-form',
  templateUrl: './password-reset-form.component.html',
  styleUrls: ['./password-reset-form.component.css']
})
export class PasswordResetFormComponent implements OnInit {

  constructor(private user:UserService) { }

  ngOnInit() {
  }

  submit (f){
    this.user.GetUserPasswordResetLink(f['value'])
  }

}
