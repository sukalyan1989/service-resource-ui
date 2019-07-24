import { environment } from "./../environments/environment.prod";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private token: string;
  private authStatusListener = new Subject<boolean>();
  private isAuthenticated = false;
  private user:User
  hostname: string;
  
  constructor(private http: HttpClient, private route: Router) {
    this.hostname = environment.host_name;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }
  getToken() {
    return this.token;
  }
  getUserId():User{
    return this.user
  }

  createUser(user: User) {
    this.http.post(this.hostname + "user/signup", user).subscribe(
      data => {
        alert("user Created");
      },
      err => {
        console.log(err);
      }
    );
  }

  login(auth: AuthData) {
    this.http
      .post<{ token: string; user: User }>(this.hostname + "user/login", auth)
      .subscribe(data => {
    
        this.token = data.token;
        if (data.token) {
          this.authStatusListener.next(true);
          this.isAuthenticated = true;
          this.route.navigate(["/"]);
         // this.userId=data.user["_id"]
          this.user=data.user;
       
          
        }
      });
  }
}
export interface AuthData {
  email: string;
  password: string;
}
export interface User {
  _id?:string
  firstname: string;
  lastname: string;
  email: string;
  mobile?: number;
  password?: string;
}
