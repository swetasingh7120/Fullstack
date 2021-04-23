import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  registerForm: any = FormGroup;
  employeeReg: any;




  constructor(private FormBuilder: FormBuilder, 
              private service: AppService,
              private _toaster: ToastrService) {

  }

  ngOnInit(): void {
    this.registerForm = this.FormBuilder.group({
      jobTitleName: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    })
  }
  postData(){
    let employeedata: any = {
      "jobTitleName": this.registerForm.value.jobTitleName,
      "firstName": this.registerForm.value.firstName,
      "lastName": this.registerForm.value.lastName,
      "email": this.registerForm.value.email,
     
    }
    console.log(employeedata);
    this.service.postEmployees(employeedata).subscribe(
      (res)=> {
        console.log(res, 'Response');
        this.employeeReg = res['data'];
        this._toaster.error(res.message, 'success', {
          timeOut: 3000,
          closeButton: true,
          progressBar: true,
        });
      },
      (err)=> {
        console.log(err.Response);
      }
    )
  }

  showSuccess(Res,message) {
    this._toaster.success(Res, message);
  }

}
