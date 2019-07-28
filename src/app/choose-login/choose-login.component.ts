import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-login',
  templateUrl: './choose-login.component.html',
  styleUrls: ['./choose-login.component.css']
})
export class ChooseLoginComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  //activate when login selected
  goWith(){
    this.route.navigate(['login'])
  
  }
  //for without login case
  goWithOut(){
    window.location.href="https://www.yobitel.com/contactus"
  
  }
}
