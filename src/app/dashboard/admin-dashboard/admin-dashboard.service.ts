import { SubscriptionService } from '../../services/subscription.service';
import { Post } from "../../services/posts.service";
import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.prod";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AdminDashboardService {
  hostname: string = environment.host_name;
  constructor(private http: HttpClient) {}

  createNewPost(post: Post): Observable<any> {
    var formData: FormData = new FormData();
   // formData.append("myFile", file);
    // formData.append("title",post.title);
    // formData.append("description",post.description);
    // formData.append("imageUrl",post.imageUrl)
    // formData.append("price",post.price.toString());
    // formData.append("details", content);

    return this.http.post(this.hostname + "posts", post, {
      headers: new HttpHeaders({})
    });
  }
 
}
