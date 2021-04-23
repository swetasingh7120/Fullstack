import { Component, OnInit } from '@angular/core';
// import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular';
  // employeeList:any[] = [];
  constructor() {

  }

  ngOnInit() {
    // this.getAllEmployees();
  }

  // getAllEmployees() {
  //   this._AppService.getEmployees().subscribe(
  //     (res)=> {
  //       console.log(res, 'Response');
  //       this.employeeList = res['data'];
  //     },
  //     (err)=> {
  //       console.log(err.Response);
  //     }
  //   )
  // }
  
}
