import { Injectable } from '@angular/core';
import { BehaviorSubject ,Observable} from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { map, catchError, finalize } from 'rxjs/operators';


@Injectable()
export class HttpStatus {
 private requestInFlight$:BehaviorSubject<boolean>
  constructor() {
    this.requestInFlight$=new BehaviorSubject(false)
   }
   setHttpStatus(inFlight: boolean) {
     this.requestInFlight$.next(inFlight);
  }


  getHttpStatus(): Observable<boolean> {
    
    return this.requestInFlight$.asObservable();
  }
}

@Injectable()
export class HTTPListener implements HttpInterceptor {
  constructor(private status: HttpStatus) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map(event => {
        this.status.setHttpStatus(true)
        return event;
      }),
      catchError(error => {
        return Observable.throw(error);
      }),
      finalize(() => {
        this.status.setHttpStatus(false);
      })
    )
  }
}