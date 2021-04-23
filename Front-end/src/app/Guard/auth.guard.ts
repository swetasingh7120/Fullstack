import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service:AppService,
    private router:Router){}
  canActivate():boolean{
    if(!this.service.isLoggedIn()){
      this.router.navigate[('/login')];
      return false;
     }else {
      return true
     }

  }
  
}
