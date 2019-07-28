import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: "root"
})
export class PostsService {
  hostName: string;
  constructor(private http: HttpClient) {
    this.hostName = environment.host_name;
  }

  getAllPosts(): Observable<Post[]> {
    return this.http
      .get<Post[]>(this.hostName + "posts")
      .pipe(map(data => data["posts"]));
  }


  //get a single post Item
    getPostById(id: string): Observable<Post> {
    return this.http
      .get<Post>(this.hostName + "posts/" + id)
      .pipe(map(data => data["post"]));
  }


//delete a post 
  deletePostById(id: string):Observable<any> {
   return   this.http.delete<{message:string}>(this.hostName+"posts/"+id)
  }
}
export interface Post {
  _id?: string;
  details?: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
}
