import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap,Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '../app.service';
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  editForm: FormGroup;
  employeeId: any = [];
  
  // employeedetails:any = [];
  errorMessage: any;
  // employeedetail: any = [];
  updatedData: any;
  constructor(private FormBuilder: FormBuilder,private activatedRoute:ActivatedRoute, private route :Router, private service : AppService,private toaster: ToastrService) { }

  ngOnInit(): void {
    this.editForm = this.FormBuilder.group({
      jobTitleName: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    })

    this.getUpdateData();
  }

  getUpdateData() {
    this.activatedRoute.queryParams.subscribe((params)=> {
      this.updatedData = params
      console.log(this.updatedData, 'Updated Data');
     this.editForm.setValue({
      jobTitleName: this.updatedData['jobTitleName'],
      firstName: this.updatedData['firstName'],
      lastName: this.updatedData['lastName'],
      email: this.updatedData['email']
     })
    })
  }

  // updateBinding(){
  //   this.editForm patchValue({
  //     jobTitleName: this.data.id,
  //       firstName: new FormControl('', Validators.required),
  //       lastName: new FormControl('', Validators.required),
  //       email: new FormControl('', Validators.required),
  //   })
  // }
  onSubmit(){
    let employeedata: any = {
      "_id": this.updatedData._id,
      "jobTitleName": this.editForm.value.jobTitleName,
      "firstName": this.editForm.value.firstName,
      "lastName": this.editForm.value.lastName,
      "email": this.editForm.value.email,
     
    }
    console.log(employeedata)
    console.log(this.editForm.value, 'Edit Form Value')


    this.service.updateemployee(employeedata).subscribe((data)=>{
      this.route.navigate(['/employee-list']);
    },(error)=>{
      this.errorMessage = error;
    })
     
  }
  // employeedetailbyid() {
  //   // this.Service.getpartnerbyid(this.partenrid).subscribe((res => {
  //   //   this.partnerdetail = res.response
  //   //   this.partnerdetails = res.response
  //   // }))
  //   this.service.getemployeebyid(this.employeeId).subscribe((data)=>{
  //     this.employeedetails = data;
  //     this.employeedetail = data
  //   }, (error)=>{
  //     console.error(error);
  //     this.errorMessage= error;
  //   })
  // }
  showSucces(){
    this.toaster.success('Your data is updated');
  }
  showError(){
    this.toaster.error('please submit data')
  }
}
