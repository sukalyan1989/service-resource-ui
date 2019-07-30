import { Injectable } from '@angular/core';
import { Subscription } from './subscription.service';
import { Subject, Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems:Subscription[]=[]
  totalItems:number=this.cartItems.length
  totalAmount:number=0

  

  constructor() { }

  getTotalItems(){
   
  }
  getTotalAmount(){


  }

  getCartItems(){
    return this.cartItems
  }

  addCartItems(item:Subscription){
    this.cartItems.push(item);
    
  }

  removeCartItems(){

  }

}

export interface CartState{
  itemCount:number,
  price:number


}