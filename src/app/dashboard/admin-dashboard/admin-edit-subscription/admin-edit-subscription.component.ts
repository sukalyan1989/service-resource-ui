
import { ActivatedRoute, Router, Route } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SubscriptionService,Subscription } from 'src/app/services/subscription.service';
import { Observable } from 'rxjs';
import { Manager, ManagerService } from 'src/app/services/manager.service';
import { Engineer, EngineerService } from 'src/app/services/engineer.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-admin-edit-subscription',
  templateUrl: './admin-edit-subscription.component.html',
  styleUrls: ['./admin-edit-subscription.component.css']
})
export class AdminEditSubscriptionComponent implements OnInit {

  constructor(private r:Router,private route: ActivatedRoute , private sub:SubscriptionService,private manager:ManagerService, private eng:EngineerService) { }

  subId:string
  Subscription$:Observable<Subscription>
  Managers$:Observable<Manager[]>
  Engineers$:Observable<Engineer[]>
  mId:string
  ManagerCount$:Observable<number>
  showDetails:boolean
  currentUid:string

  ngOnInit() {
  
  this.Engineers$=this.eng.getAllEngineer();
  this.route.params.subscribe(id=>{
  this.subId=id["id"];
  this.Subscription$=this.sub.getSubById(id["id"])
  this.Managers$=this.manager.getManagers();

})
}
 
assignManager(){
  
  this.sub.updateSubManager(this.subId,this.mId).subscribe(m=>{
    this.r.navigate(['admin-dashboard/view-subscription'])
  })

}
refresh(){
 
   this.Subscription$=this.sub.getSubById(this.subId)
   this.Managers$=this.manager.getManagers();
   this.Engineers$=this.eng.getAllEngineer();
  }
cancelManager(){
  this.sub.updateSubManager(this.subId,null).subscribe(m=>{
    this.r.navigate(['admin-dashboard/view-subscription'])
  })
}
selectedManagerChanged(id:string){
this.ManagerCount$=this.manager.getManagerAssignedJobCount(id)
}

viewProfile(id:string){
 this.showDetails=!this.showDetails;
 this.currentUid=id;
}


//assign selected engineers
submit(f){
  console.log(f['value'])
 let engArr=f['value'].assignedEngineers;
  this.sub.updateSubEngineer(this.subId,f['value']).subscribe(data=>{
     engArr.forEach(id => {
    this.eng.updateEngineer(id,'hold')
    });
    this.refresh();
  })
  
}

cancelEngineer(x:Engineer){
  console.log(x._id)
this.sub.getSubById(this.subId).toPromise().then(data=>{
  let engArray= data["assignedEngineers"]
  let mappedEngArray=engArray.map(x=>x._id)
  let reducedArray = _.remove(mappedEngArray,item=>item!=x._id)
  this.sub.updateSubEngineer(this.subId,{assignedEngineers:reducedArray}).toPromise().then(data=>{
    this.refresh();
  })

})
}

}
