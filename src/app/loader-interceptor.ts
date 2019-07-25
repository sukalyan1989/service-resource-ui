import { LoaderService } from './loader.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor{
    constructor(public loaderService : LoaderService){

    }
    intercept(req: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>> {
        this.loaderService.show();
        return next.handle(req).pipe (
            finalize(()=>{this.loaderService.hide()})
        )          
       
    }
    
}