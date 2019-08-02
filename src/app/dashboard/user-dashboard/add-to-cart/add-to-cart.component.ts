import { PostsService, Post } from 'src/app/services/posts.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms'
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  constructor(private fb:FormBuilder,private post:PostsService,private user:UserService) { }

  Post$:Observable<Post[]>


  //reactive form Items
  items=this.fb.array([this.fb.group({
    post:this.fb.control(''),
    location:this.fb.control(''),
    startDate:this.fb.control(''),
    durationText:this.fb.control(''),
    level:this.fb.control(''),
    totalJobs:this.fb.control('')
  })])
  master = this.fb.group({
    items:this.items
  })





  ngOnInit() {
    this.Post$=this.post.getAllPosts()
  }
  //submit the form
  onSubmit(f){
    console.log(f.value['items'])
    alert('submit')
    //this.user.UpdateCart(f.value['items']).subscribe(d=>alert(d['message']),err=>console.log(err))
  
      }
    

      //add another Item to Form
      addItems(){
        this.items.push(this.fb.group({
          post:this.fb.control(''),
          postId:this.fb.control(''),
          jobTitle:this.fb.control(''),
          location:this.fb.control(''),
          startDate:this.fb.control(''),
          durationText:this.fb.control(''),
          level:this.fb.control(''),
          totalJobs:this.fb.control('')
        }))
      }
    
      //remove current Item from form
      removeItems(){
    this.items.removeAt(this.items.length-1)
      }





}
