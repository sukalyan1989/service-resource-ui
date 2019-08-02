import { ActivatedRoute, Router, Route } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SubscriptionService,Subscription } from 'src/app/services/subscription.service';
import { Observable } from 'rxjs';
import { Manager, ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-admin-edit-subscription',
  templateUrl: './admin-edit-subscription.component.html',
  styleUrls: ['./admin-edit-subscription.component.css']
})
export class AdminEditSubscriptionComponent implements OnInit {

  constructor(private route: ActivatedRoute , private sub:SubscriptionService,private manager:ManagerService) { }

  subId:string
  Subscription$:Observable<Subscription>
  Managers$:Observable<Manager[]>
  mId:string

  ngOnInit() {
this.route.params.subscribe(id=>{
  this.subId=id["id"];
 this.Subscription$=this.sub.getSubById(id["id"])
 this.Managers$=this.manager.getManagers();
this.Subscription$.subscribe(m=>console.log(m))
})}
 
assignManager(){
  console.log(this.subId)
  this.sub.updateSubManager(this.subId,this.mId)

}

}
