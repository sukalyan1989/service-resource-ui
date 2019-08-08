import { Component, OnInit,Input } from '@angular/core';
import { Subscription } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  @Input() cartItems:Subscription[]
  @Input() totalAmount:number;
  constructor() { }

  ngOnInit() {
  }
  openCheckout() {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_GjzGGYCGp03Dfs4QhIi7c4d4001AfAMBOg',
      locale: 'auto',
      token:  (token: any) =>{
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        fetch("https://service-resource.herokuapp.com/api/stripe/charge",{
          method:'POST',
          headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
          },
          body:JSON.stringify({
            stripeToken: token.id,
            stripeEmail:token.email,
            amount:this.totalAmount*100
          })
        }).then(data=>{console.log(data);alert('success')}).catch(err=>console.log(err))
      }
    });

    handler.open({
      name: 'Yobitel.com',
      description: 'Complete Your Payment Here',
      amount: this.totalAmount*100
    });

  }


}
