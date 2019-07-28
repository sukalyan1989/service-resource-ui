import { UserService } from './services/user.service';
import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable()
export class AdminGuard implements CanActivate{
    constructor(private user:UserService, private router:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        
        const isAdmin = this.user.getUser().isAdmin
        if(!isAdmin){
            this.router.navigate(['/login'])
        }
        return isAdmin;
    }
    
   
}