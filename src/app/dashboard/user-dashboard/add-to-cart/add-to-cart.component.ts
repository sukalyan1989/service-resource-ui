import { CartService } from "src/app/services/cart.service";

import { PostsService, Post } from "src/app/services/posts.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Observable } from "rxjs";
import { UserService } from "src/app/services/user.service";
@Component({
  selector: "add-to-cart",
  templateUrl: "./add-to-cart.component.html",
  styleUrls: ["./add-to-cart.component.css"]
})
export class AddToCartComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private post: PostsService,
    private user: UserService,
    private cart: CartService
  ) {}

  Post$: Observable<Post[]>;

  //reactive form Items
  items = this.fb.array([
    this.fb.group({
      id: this.fb.control(Date.now()),
      post: this.fb.control(""),
      location: this.fb.control(""),
      startDate: this.fb.control(""),
      durationText: this.fb.control(""),
      level: this.fb.control(""),
      totalJobs: this.fb.control("")
    })
  ]);
  master = this.fb.group({
    items: this.items
  });

  ngOnInit() {
    this.Post$ = this.post.getAllPosts();
  }
  //submit the form
  onSubmit(f) {
    this.cart.getCartItems().subscribe(arr => {
      let items = [...arr, ...f.value["items"]];
      this.user.UpdateCart(items).subscribe(
        d => {
          alert(d["message"]);
        },
        err => console.log(err)
      );
    });
  }

  //add another Item to Form
  addItems() {
    this.items.push(
      this.fb.group({
        id: this.fb.control(Date.now()),
        post: this.fb.control(""),
        postId: this.fb.control(""),
        jobTitle: this.fb.control(""),
        location: this.fb.control(""),
        startDate: this.fb.control(""),
        durationText: this.fb.control(""),
        level: this.fb.control(""),
        totalJobs: this.fb.control("")
      })
    );
  }

  //remove current Item from form
  removeItems() {
    this.items.removeAt(this.items.length - 1);
  }
}
