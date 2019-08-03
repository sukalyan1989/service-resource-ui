import { environment } from "../../environments/environment.prod";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private token: string;
  private tokenTimer:any; 
  private authStatusListener = new Subject<boolean>();
  private isAuthenticated = false;
  private user:User|null
  hostname: string;
  
  constructor(private http: HttpClient, private route: Router) {
    this.hostname = environment.host_name;
  }

  autoAuthUser(){
    const authInformation = this.getAuthData();
    const now = new Date()
    const expiresIn =authInformation.expirationDate.getTime()- now.getTime();

    if (expiresIn>0){
      this.token = authInformation.token;
      this.isAuthenticated=true;
      this.authStatusListener.next(true)
    }
  }
  logOut(){
    this.user=null;
    this.isAuthenticated=false;
    this.token=""
    clearTimeout(this.tokenTimer)
    this.clearAuthData(); 
    this.route.navigate(['/login'])
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
  getUser():User{
    return this.user;
  }

  createUser(user: User) {
    this.http.post(this.hostname + "user/signup", user).subscribe(
      data => {
        alert("user Created");
        this.route.navigate(['/login'])
      },
      err => {
        console.log(err);
      }
    );
  }

  private setAuthTimer(){
    this.tokenTimer= setTimeout(()=>{
      this.logOut();
     },3600*1000)
  }
  login(auth: AuthData) {
    this.http
      .post<{ token: string; user: User }>(this.hostname + "user/login", auth)
      .subscribe(data => {
        console.log(data)
        this.token = data.token;
        if (data.token) {
          this.authStatusListener.next(true);
          this.isAuthenticated = true;
          this.setAuthTimer();
         const now = new Date()
         const expDate =new Date(now.getTime()+3600*1000)
         this.saveAuthData(this.token,expDate)
          this.user=data.user;
          if(this.user.isAdmin){
            this.route.navigate(["/admin-dashboard"])
          }
          else{
            this.route.navigate(["/user-dashboard/edit-profile"])
          }
       
          
        }
      },(err)=>{
        console.log(err)
      });
  }




  private saveAuthData(token:string,expirationDate:Date){
    localStorage.setItem('token',token)
    localStorage.setItem('expiration',expirationDate.toISOString())
    //localStorage.setItem('userId',this.user._id)
  }

  private clearAuthData(){
    localStorage.removeItem('token')
    localStorage.removeItem('expiration')
  }
  private getAuthData(){
    const token = localStorage.getItem("token")
    const expirationDate = localStorage.getItem("expiration");
    const userId = localStorage.getItem('userId')

    if(!token||!expirationDate){
      return;
    }
    return{
      token :token,
      expirationDate: new Date (expirationDate),
      userId:userId
    }
  }

//update user cart

UpdateCart(item:object[]){
return  this.http.patch(this.hostname + "user/cart/"+this.getUserId()._id,item)
}




}
export interface AuthData {
  email: string;
  password: string;
}
export interface User {
  cart?:[]
  _id?:string
  firstname: string;
  lastname: string;
  email: string;
  mobile?: number;
  password?: string;
  isAdmin?:boolean
}
