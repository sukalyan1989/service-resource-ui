import { Post } from './../../posts.service';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {
  hostname:string=environment.host_name
  constructor(private http:HttpClient) { }

  createNewPost(post:Post,file:File):Observable<any>{
    const formData:FormData = new FormData();
    formData.append('myFile',file)
    formData.append('title',post.title)
    formData.append('description',post.description)
    formData.append('price',post.price.toString())
    console.log(formData.getAll('myFile'))
  return this.http.post(this.hostname+"posts",formData,{headers:new HttpHeaders({
    "Content-Type": "application/x-www-form-urlencoded"
  })

})
  }
}
