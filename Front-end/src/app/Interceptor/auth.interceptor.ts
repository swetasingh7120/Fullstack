import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private service : AppService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let tokenizedRequest = request.clone({
      setHeaders : {
        'Authorization' : `Bearer ${this.service.getToken()}`
      }
    });
    return next.handle(request);
  }
}
