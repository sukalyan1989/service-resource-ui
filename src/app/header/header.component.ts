import { Subscription } from 'rxjs';
import { UserService } from './../user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit ,OnDestroy{
  private authListenerSubs:Subscription
  userIsAuthenticated=false;
  constructor(private user:UserService) { }

  ngOnInit() {
    this.authListenerSubs=this.user.getAuthStatusListener().subscribe(
      isAuthenticated =>{
        this.userIsAuthenticated=isAuthenticated
      }
    )
  }

  ngOnDestroy(){
this.authListenerSubs.unsubscribe();
  }

}
