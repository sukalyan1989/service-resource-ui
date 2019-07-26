import { Component, OnInit } from '@angular/core';
import { Route ,ActivatedRoute, Router} from '@angular/router';
import { PostsService, Post } from '../posts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-method',
  templateUrl: './login-method.component.html',
  styleUrls: ['./login-method.component.css']
})
export class LoginMethodComponent implements OnInit {

  post$:Observable<Post>
  constructor(private router : ActivatedRoute,private post:PostsService,private route : Router) { }

  ngOnInit() {
    this.router.params.subscribe(data=>{
      this.post$=this.post.getPostById(data["id"])
    })

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
