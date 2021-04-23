import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private service: AppService, private router : Router) { }

  ngOnInit(): void {
  }
  public isLogin(){
    return this.service.isLoggedIn();
  }
  public clickLogout(){
    this.service.logOut();
    this.router.navigate(['/home']);
  }
  checkToken() {
    let token = localStorage.getItem('token');
    if(token){
      this.router.navigate(['/employee-list'])
    } else {
      this.router.navigate(['/login']);
    }
  }
}
