import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  openCheckout() {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_GjzGGYCGp03Dfs4QhIi7c4d4001AfAMBOg',
      locale: 'auto',
      token: function (token: any) {
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
            amount:1000
          })
        }).then(data=>{console.log(data)}).catch(err=>console.log(err))
      }
    });

    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: 2000
    });

  }


}
