import { UserService, User } from 'src/app/services/user.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  currentUser:User
  constructor(private fb: FormBuilder,private user:UserService) {
    this.currentUser= this.user.getUserId()
   // console.log(this.currentUser)
   }
  // profileForm=this.fb.group({
  //   fullName:[this.currentUser.fullName],
  //   companyName:[this.currentUser.companyName],
  //   email:[this.currentUser.email],
  //   address:[this.currentUser.address],
  //   city:[this.currentUser.city],
  //   zip:[this.currentUser.zip],
  //   phone:[this.currentUser.phone],
  //   state:[this.currentUser.state]
  // })
  profileForm=this.fb.group({
    fullName:[],
    companyName:[],
    email:[],
    address:[],
    city:[],
    zip:[],
    phone:[],
    state:[]
  })

  ngOnInit() {
    this.profileForm.patchValue({
    fullName:this.currentUser.fullName,
    companyName:this.currentUser.companyName,
    email:this.currentUser.email,
    address:this.currentUser.address,
    city:this.currentUser.city,
    zip:this.currentUser.zip,
    phone:this.currentUser.phone,
    state:this.currentUser.state
    })
  }

  formSubmit(f){
  //  console.log(f['value'])
    this.user.UpdateProfile(f['value']).subscribe(m=>{alert('update success')})

  }

}
