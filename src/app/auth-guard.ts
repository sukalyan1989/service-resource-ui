import { UserService } from './user.service';
import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private user:UserService, private router:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        
        const isAuth = this.user.getIsAuth()
        if(!isAuth){
            this.router.navigate(['/login'])
        }
        return isAuth
    }
    
   
}