import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  employeeList:any[] = [];
  constructor(private _AppService: AppService,private router:Router) { }

  ngOnInit(): void {
   this. getAllEmployees()
  }
  getAllEmployees() {
    this._AppService.getEmployees().subscribe(
      (res)=> {
        console.log(res, 'Response');
        this.employeeList = res['data'];
      },
      (err)=> {
        console.log(err.Response);
      }
    )
  }

  updateRecords(value:any) {
    console.log(value, 'Value')
    this.router.navigate(['/update-employee'],{
      queryParams: value
    })
  }
  deleteRecords(value:any){
   this._AppService.deleteEmployee(value).subscribe(
     (data)=>{
      console.log(data)
      this.getAllEmployees();
     },(err)=>{
      console.log(err.Response)
     }
   )
  }
}
