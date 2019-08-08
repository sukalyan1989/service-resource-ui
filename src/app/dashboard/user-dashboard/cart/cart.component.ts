import { UserService, User } from "src/app/services/user.service";

import { Component, OnInit, OnChanges, OnDestroy } from "@angular/core";
import { CartService, CartState } from "src/app/services/cart.service";
import { Subscription } from "src/app/services/subscription.service";
import { Observable } from "rxjs";
import { subscribeOn } from "rxjs/operators";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit, OnDestroy {
  cartItems$: Observable<any[]>;
  items: any[] = [];
  itemCount;
  totalPrice;
  sub;
  constructor(private cart: CartService) {
    this.cartItems$ = this.cart.getCartItems();
    this.cartItems$.subscribe(m => {
      this.itemCount = m.length;
      this.items = [...m];
     this.totalPrice= this.calculateTotal();
    });
  }

  refresh() {
    this.cartItems$ = this.cart.getCartItems();
    this.cartItems$.subscribe(m => {
      this.itemCount = m.length;
      this.items = [...m];
      this.totalPrice=this.calculateTotal();
    });
  }

  removeItem(item: any) {
    this.items.splice(item,1)
    console.log(this.items)

    this.cart.removeItem(this.items).subscribe(k => {
      this.refresh();
    });
  }
  ngOnInit() {}
  ngOnChanges() {}
  ngOnDestroy() {}

  calculateTotal(){
    let grandTotal=0;
   let arr= this.items.map(m=>{
      let price =parseInt(m['post'].price) 
      let jobCount = parseInt(m['totalJobs'])
      let duration = parseInt(m['durationText'])
      duration = (duration===1)?0:duration
    return price*jobCount
    })
    arr.forEach(m=>grandTotal+=m)
   return grandTotal
  }
}
