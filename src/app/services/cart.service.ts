import { Injectable } from '@angular/core';
import { Subscription } from './subscription.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems:Subscription[]
  private totalItems:number=this.cartItems.length
  private totalAmount:number
  constructor() { 

    

  }

  getTotalItems():number{
    return this.totalItems
  }
  getTotalAmount(){


  }

  getCartItems(){
    return this.cartItems
  }

  addCartItems(){

  }

  removeCartItems(){

  }

}
