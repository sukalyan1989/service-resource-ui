import { Component, OnInit } from '@angular/core';
import { PostsService, Post } from 'src/app/posts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'admin-remove-job',
  templateUrl: './admin-remove-job.component.html',
  styleUrls: ['./admin-remove-job.component.css']
})
export class AdminRemoveJobComponent implements OnInit {
  allPosts$:Observable<Post[]>
  constructor(private post:PostsService) { }

  ngOnInit() {
    this.allPosts$ = this.post.getAllPosts()
  }
  deletePost(id:string){
    this.post.deletePostById(id)
  }
}
