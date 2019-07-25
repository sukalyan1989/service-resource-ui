import { LoaderService } from './../loader.service';
import { PostsService, Post } from './../posts.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor(private post:PostsService,private router :Router,private loadin:LoaderService) { }
  posts$:Observable<Post[]>
  ngOnInit() {
   this.posts$ = this.post.getAllPosts() 
  }
  handleClick(post:Post){
console.log(post)
this.router.navigateByUrl('job/'+post._id)

}

}
