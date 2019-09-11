import { UserService } from 'src/app/services/user.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'src/app/services/subscription.service';
import { EmailService } from 'src/app/services/email.service';
import {environment} from 'src/environments/environment.prod';
@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  @Input() cartItems:Subscription[]
  @Input() totalAmount:number;
  @Output() cartClean = new EventEmitter();
  constructor(private user:UserService, private mail:EmailService) { }

  ngOnInit() {
  }
  openCheckout() {
    console.log(this.cartItems)
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_bZNVXGRaEAB6GXDBolbtUr0H00xmURjsd3',
      locale: 'auto',
      token:  (token: any) =>{
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        fetch("https://service-resource-api.appspot.com/api/stripe/charge",{
          method:'POST',
          headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
          },
          body:JSON.stringify({
            stripeToken: token.id,
            stripeEmail:token.email,
            amount:this.totalAmount*100,
            items:this.cartItems,
            user:this.user.getUserId()
          })
        }).then(data=>{
          alert('success');
          this.cartClean.emit();

      }).catch(err=>console.log(err))
      }
    });

    handler.open({
      name: 'Yobitel.com',
      description: 'Complete Your Payment Here',
      amount: this.totalAmount*100
    });

  }


  // SendEmailToAdmin(){
  //   this.mail.sendEmail({
  //     to:environment.admin_email,
  //     subject:'New User Registered',
  //     text:'The Following user has Registered ',
  //     html:`
  //     <p>Hi Admin,

      
  //       A subscriber ${this.user.getUser().fullName} has subscribed the following service.
  //     </p>
  //     <table>
  //     <tr>
  //     <th>First Name</th>
  //     <th>Last Name</th>
  //     <th>Email</th>
  //     </tr>

  //     </table>
  //   <p>N.B: This is system generated message.Please do not reply at this emailid.</p>`
  //   }).toPromise()
  // }


}
