
import { PostsService, Post } from '../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  from:number;
  to:number;
  arrLength:number
  constructor(private post:PostsService,private router :Router) { 
    this.from=0;
    this.to=3;
   
  }
  posts$:Observable<Post[]>
  searchStr:string=''
  //click on next button
  Next(){
    console.log(this.arrLength)
    if(!(this.to>=this.arrLength)){
      this.from=this.from+3
      this.to=this.to+3;
    }
  }
  // Click on previous button
  Previous(){
    if(!(this.from<=0)){
      this.to=this.to-3;
      this.from=this.from-3
    }
  }
  ngOnInit() {
   this.posts$ = this.post.getAllPosts() 
   this.posts$.toPromise().then(m=>{
     this.arrLength=m.length
     console.log(this.arrLength)
    
    })
  }
  handleClick(post:Post){
console.log(post)
this.router.navigateByUrl('job/details/'+post._id)

}

}
