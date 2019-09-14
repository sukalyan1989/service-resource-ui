import { Router } from '@angular/router';

import { UserService } from 'src/app/services/user.service';
import { SubscriptionService, Subscription } from '../../../services/subscription.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmailService } from 'src/app/services/email.service';


@Component({
  selector: 'app-user-subscription',
  templateUrl: './user-subscription.component.html',
  styleUrls: ['./user-subscription.component.css']
})
export class UserSubscriptionComponent implements OnInit {
  sub$:Observable<Subscription[]>
  searchStr:string='';
  constructor(private email:EmailService ,private sub:SubscriptionService,private user:UserService , private router:Router) {

   }

  ngOnInit() {
  
  this.sub$=  this.sub.getSubListByUser(this.user.getUser()._id)
 // console.log(this.user.getUser()._id)
  }

  LogOut(){
    this.user.logOut()
  }

  //cancel subscription
  cancelSub(sub:Subscription){
  this.sub.cancelSubscription(sub['stripeSubId'],sub['_id']).subscribe(m=>{
    this.email.sendEmail({
      to:environment.admin_email,
      subject:"A Subscriber Named : "+this.user.getUserId().firstname+' '+this.user.getUserId().lastname+" Has Cancelled Subscription",
      text:'',
      html:`
      <pre>          
      Hi Admin,
      
      A subscriber ${this.user.getUserId().firstname+' '+this.user.getUserId().lastname} has Cancelled the following service.
      Below is the Subscription Details:
      <br>
      <br>
      Subscription Id : ${sub._id}
      <br>
      Stripe Subscription Id : ${sub.stripeSubId}
      <br>
            
      <br><b>N.B: This is system generated message.Please do not reply at this emailid.</b>
      
      </pre>
      
      `
    }).toPromise().then(m=>{
      alert('Subscription Cancelled');
    })
 
    this.refresh();
  })
  }
  renewSub(sub:Subscription){
  this.sub.renewSubscription(sub['stripeSubId'],parseInt(sub.durationText)).subscribe(m=>{

    this.email.sendEmail({
      to:environment.admin_email,
      subject:"A Subscriber Named : "+this.user.getUserId().firstname+' '+this.user.getUserId().lastname+" Has Renewed Subscription",
      text:'',
      html:`
      <pre>          
      Hi Admin,
      
      A subscriber ${this.user.getUserId().firstname+' '+this.user.getUserId().lastname} has renewed the following service.
      Below is the Subscription Details:
      <br>
      <br>
      Subscription Id : ${sub._id}
      <br>
      Stripe Subscription Id : ${sub.stripeSubId}
      <br>
      Duration : ${sub.durationText}
      
      <br><b>N.B: This is system generated message.Please do not reply at this emailid.</b>
      
      </pre>
      
      `
    }).toPromise().then(m=>{
      alert('Subscription Renewed');
    })
    this.refresh();
  },err=>{alert(err)})
  }

  refresh(){
    this.sub$=this.sub.getSubListByUser(this.user.getUser()._id)
  }
  SearchByStatus(){
    this.sub$=this.sub.getSubSearch(this.user.getUser()._id,'',this.searchStr)
  }
  SearchByTitle(){
    this.sub$=this.sub.getSubSearch(this.user.getUser()._id,this.searchStr,null)
    }
  onKey(e){
    this.searchStr=e.target.value
    if(this.searchStr==null){
      this.sub$=this.sub.getSubListByUser(this.user.getUser()._id)
    }
    }
  navToDetails(sub:Subscription){
    this.router.navigate(['user-dashboard/view-resource/'+sub['stripeSubId']])
  }
}
