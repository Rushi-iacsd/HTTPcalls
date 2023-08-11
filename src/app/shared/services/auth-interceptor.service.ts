import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, delay, finalize, takeUntil } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private _loaderservice : LoaderService) { }
  
  private unsubscribeAll$ : Subject<void> = new Subject<void>()
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    this._loaderservice.loadingStatus
    .next(true)
    
    const authToken = `Bearer here take a Auth from Local Storage`;

    const authRequest = req.clone({

      setHeaders : {
        "Authorization" : authToken,
        'Content-Type' : 'application/json'
      }
    })

    return next.handle(authRequest)
            .pipe(
              takeUntil(this.unsubscribeAll$),
              delay(1000),
              finalize(() => {
                this._loaderservice.loadingStatus.next(false)
              })
            )

  }


unsubscribeAll() : void{
  this.unsubscribeAll$.next();
  this.unsubscribeAll$.complete();

}

}
