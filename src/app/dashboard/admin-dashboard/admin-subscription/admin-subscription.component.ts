import {
  SubscriptionService,
  Subscription
} from "../../../services/subscription.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-admin-subscription",
  templateUrl: "./admin-subscription.component.html",
  styleUrls: ["./admin-subscription.component.css"]
})
export class AdminSubscriptionComponent implements OnInit {
  subs$: Observable<Subscription[]>;
  constructor(private sub: SubscriptionService, private router: Router) {}

  ngOnInit() {
    this.subs$ = this.sub.getSubList();
   // this.sub.getSubList().subscribe(m=>console.log(m))
  }
  handleEdit(id: string) {
    this.router.navigate(["admin-dashboard/edit-subscription/" + id]);
  }
}
