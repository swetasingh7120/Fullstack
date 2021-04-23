import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getEmployees() {

    return this.http
      .get<any[]>('http://localhost:3000/Api/Employee')
  }
  postEmployees(data: any) {
    return this.http.post<any>('http://localhost:3000/Api/Employee/PostEmployee', data)
  }
  //   getemployeebyid(id)
  // {
  //   return this.http.get<any>('localhost:3000/Api/Employee/UpdateEmployee/getemployeebyid?id='+id);
  // }
  updateemployee(data: any) {
    return this.http.post<any>('http://localhost:3000/Api/Employee/UpdateEmployee', data);
  }
  deleteEmployee(_id: any) {
    return this.http.post<any>('http://localhost:3000/Api/Employee/DeleteEmployee', _id)
  }
  login(data)
  {
   return this.http.post<any>('http://localhost:3000/Api/Users/login', data);
  }
// get Token
  getToken():string{
    return localStorage.getItem('token');
  }
  logOut(){
    localStorage.removeItem('token');
  }
   // is LoggedIn
   public isLoggedIn():boolean{
    let token = localStorage.getItem('token');
    if(token){
      return true;
    } else {
      return false;
    }
    // return !!token;
  }
}

// registerPartner(data: any)
// {
//   return this.http.post<any>(environment.baseUrl+ "/partner/registerPartner",data);
// }
