import { UserService } from './services/user.service';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private user:UserService){}
    intercept(req:HttpRequest<any>,next:HttpHandler){
        const authToken = this.user.getToken();
        const authRequest =req.clone(
            {headers:req.headers.set('Authorization',"Bearer "+authToken)}
        )
        return next.handle(authRequest)
    }
}