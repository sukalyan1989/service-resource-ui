import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable, observable } from 'rxjs';
import {map} from 'rxjs/operators'

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
}
export interface Subscription{
    jobTitle:string,
    location:string,
    level:string,
    startDate:Date,
    totalJobs:number,
    durationText:string,
    durationNumber?:Number,
    postId:string
    userId:string
}
