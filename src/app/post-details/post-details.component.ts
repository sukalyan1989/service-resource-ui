import { Subscription, SubscriptionService } from './../subscription.service';
import { Router,ActivatedRoute } from '@angular/router';
import { PostsService, Post } from './../posts.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  constructor(private router:Router,private post:PostsService,private route:ActivatedRoute,private subscription:SubscriptionService) { }
  post$:Observable<Post>
  postId:string;
  ngOnInit() {
    this.route.params.subscribe(m=>{
      this.post$=this.post.getPostById(m['id'])

      this.postId=m['id']
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
      postId:this.postId

    }
    this.subscription.createSubscription(subInfo).subscribe(data=>{
      alert(data.message);
      this.router.navigateByUrl('confirmation')
    })
    console.log(subInfo)
  }

}
