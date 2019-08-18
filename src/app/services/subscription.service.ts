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

  //subscription searched items 
  getSubSearch(uid:string,PostTitle:string,status:string):Observable<Subscription[]>{
    return this.http.post<Subscription[]>(this.hostname+"subscription/Search/id",{id:uid,status:status,PostTitle:PostTitle}).pipe(map(m=>m["subscription"]))
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

//use this to cancel a Subscription
cancelSubscription(subId:string,objId:string){
 return  this.http.post(this.hostname+"stripe/cancel",{subId:subId,id:objId})
}

renewSubscription(subId:string,ext:number){
return  this.http.post(this.hostname+"stripe/update",{subId:subId,extension:ext})
}

getSubscriptionDetails(subId:string){
  return this.http.get(this.hostname+"stripe/subscription/"+subId).pipe(map(m=>m['item'].data))
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
