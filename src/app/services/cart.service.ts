import { UserService, User } from 'src/app/services/user.service';
import { environment } from "../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from './subscription.service';
import { Subject, Observable, from } from 'rxjs';
import { getFirstTemplatePass } from '@angular/core/src/render3/state';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  hostName:string
  constructor(private http:HttpClient,private user:UserService){
  this.hostName=environment.host_name
 }

 //get all cart Items
 getCartItems(){
 let userId=this.user.getUser()._id;
 return this.http.get(this.hostName + "user/"+userId).pipe(map(m=>m['user'].cart))
 }

 //Remove Item from cart
 removeItem(item:any[]){
 return this.http.patch(this.hostName + "user/cart/"+this.user.getUserId()._id,item)
 }
}

export interface CartState{
  itemCount:number,
  price:number


}