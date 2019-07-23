import { Post } from './../../../posts.service';
import { AdminDashboardService } from './../admin-dashboard.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-post',
  templateUrl: './admin-post.component.html',
  styleUrls: ['./admin-post.component.css']
})
export class AdminPostComponent implements OnInit {

  constructor(private post:AdminDashboardService) { }

  fileToUpload:File=null
  ngOnInit() {
  }

  handleFileInput(files:FileList){
    this.fileToUpload=files.item(0)
  }


  submit(f:FormGroup){
   console.log(f.value)
   let post:Post={
     title:f.value.title,
     description:f.value.description,
     price:f.value.price,
     imageUrl:"",
     _id:""
   }
    this.post.createNewPost(post,this.fileToUpload).subscribe(
      data=>{
        console.log(data)
      },err=>console.log(err))
  }

}
