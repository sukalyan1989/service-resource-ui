import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable, observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  hostname:string
  constructor(private http : HttpClient) {
    this.hostname=environment.host_name
   }

  createSubscription(sub:Subscription):Observable<any>{
    
   return this.http.post<any>(this.hostname+"subscription",sub)

  }


  //get all subscriptions
  getSubList():Observable<Subscription[]>{
    return this.http.get<Subscription[]>(this.hostname+"subscription").pipe(map(m=>m["subscription"]))

  }

  //get subscriptions only by particular user
  getSubListByUser(id:string):Observable<Subscription[]>{
    return this.http.get<Subscription[]>(this.hostname+"subscription/byUser/"+id).pipe(map(m=>m["subscription"]))
  }

  //Update Subscription Status
updateSubStatus(id:string,status:string){
  this.http.patch<{message:string}>(this.hostname+"subscription/"+id,{status:status}).subscribe(data=>alert(data.message))

}

updateSubManager(id:string,mId:string){
 return this.http.patch<{message:string}>(this.hostname+"subscription/"+id,{assignedManager:mId})

}


//get subscription information by ID
getSubById(id:string):Observable<Subscription>{
 return this.http.get<Subscription>(this.hostname+"subscription/"+id).pipe(map(m=>m["subscription"]))
}



}
export interface Subscription{
    itemId?:string,
    jobTitle?:string,
    location:string,
    level:string,
    startDate:Date,
    totalJobs:number,
    durationText:string,
    durationNumber?:Number,
    postId:string
    userId?:string
    user?:{
      firstname:string
      lastname?:string,
      mobile?:string,
      email:string
    },
    post?:{
      title:string,
      price:number
    },
    status?:string
}
