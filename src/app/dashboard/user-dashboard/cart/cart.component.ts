import { Component, OnInit, OnChanges } from '@angular/core';
import { CartService, CartState } from 'src/app/services/cart.service';
import { Subscription } from 'src/app/services/subscription.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit,OnChanges {

  constructor(private cart : CartService) { 
    

  }
  cartItems:Subscription[]=[] 
  cartState$:Observable<Subscription>
  itemCount=0
  ngOnInit() {
    this.cartItems=this.cart.getCartItems()
    
  }
  ngOnChanges(){
    
    this.itemCount=this.cart.totalItems
  }

}
