import { UserService } from 'src/app/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private auth:UserService){}
  title = 'service-resource-ui';
  ngOnInit(){
//this.auth.autoAuthUser();
  }
}
