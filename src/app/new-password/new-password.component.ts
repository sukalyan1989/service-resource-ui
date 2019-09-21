import { ActivatedRoute } from '@angular/router';
import { UserService } from './../services/user.service';
import { FormBuilder } from '@angular/forms';
import { PasswordResetFormComponent } from './../password-reset-form/password-reset-form.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {

  constructor(private user:UserService,private route : ActivatedRoute) { }
 model:any={}
 uId:string
  ngOnInit() {
    this.route.params.subscribe(data=>{
      this.uId=data["id"]
    })
  }

  onSubmit(f){
    this.user.UpdatePassword({passswordResetUrl:this.uId,password:f['value'].password})
  }
  Clicked(f){
   // console.log(f)
  }
}
