import { Post } from "../../../services/posts.service";
import { AdminDashboardService } from "./../admin-dashboard.service";
import { FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-admin-post",
  templateUrl: "./admin-post.component.html",
  styleUrls: ["./admin-post.component.css"]
})
export class AdminPostComponent implements OnInit {
  constructor(private post: AdminDashboardService) {}
  ckeditorContent;
  // fileToUpload:File=null
  ngOnInit() {}

  // handleFileInput(files:FileList){
  //   this.fileToUpload=files.item(0)
  //   console.log(this.fileToUpload)
  // }

  submit(f: FormGroup) {
    console.log(f.value);
    let post: Post = {
      title: f.value.title,
      description: f.value.description,
      price: f.value.price,
      imageUrl: f.value.imageUrl,
      details:this.ckeditorContent
    };
    this.post.createNewPost(post).subscribe(
      data => {
        alert(data["message"]);
      },
      err => console.log(err)
    );
  }
  getData(e: Event) {
   // console.log(this.ckeditorContent);
  }
}
