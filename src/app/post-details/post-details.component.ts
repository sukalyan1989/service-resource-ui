import { UserService } from '../services/user.service';
import { Subscription, SubscriptionService } from '../services/subscription.service';
import { Router,ActivatedRoute } from '@angular/router';
import { PostsService, Post } from '../services/posts.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  @Output()stateChange = new EventEmitter()
  constructor(
    private router:Router,
    private post:PostsService,
    private route:ActivatedRoute,
    private subscription:SubscriptionService,
    private user:UserService) { }
  post$:Observable<Post>
  posts$:Observable<Post[]>
  postId:string;
  postName:string;
  postPrice:number;

  ngOnInit() {
  this.posts$=this.post.getAllPosts()

  }

  onSelectChange(e:Event){
    let postid=e.target["value"]
    this.post$=this.post.getPostById(postid)
    this.post$.subscribe(data=>{
this.postName=data.title;
this.postPrice=data.price;
    })
  }
  submit(f:FormGroup){
    
    confirm("Are you sure to submit this data ?")
    let subInfo:Subscription={
      jobTitle:"",
      location:f.value['location'],
      level:f.value['level'],
      startDate:f.value['startDate'],
      totalJobs:f.value['totalJobs'],
      durationText:f.value['durationText'],
      durationNumber:0,
      postId:this.postId,
      userId:this.user.getUserId()._id,
      user:{
        firstname:this.user.getUserId().firstname,
        lastname:this.user.getUserId().lastname,
        email:this.user.getUserId().email
      },
      post:{
        title:this.postName,
        price:this.postPrice
      },
      status:'Pending'

    }
    this.subscription.createSubscription(subInfo).subscribe(data=>{
      alert(data.message);
      this.stateChange.emit('Confirmation');
     })
    //console.log(subInfo)
  }

}
