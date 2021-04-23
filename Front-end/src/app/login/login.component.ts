import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: any;
  token: any
  submitted = false;
  user!: { email: any; password: any; };
  constructor(private service : AppService,private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({


      Email: ['', Validators.required],
      password: ['', Validators.required],



    });
  }
  get f() { return this.userForm.controls; }
  submitLogin() {
    this.submitted = true;
    if (this.userForm.invalid) {
      this.userForm.invalid
      return;
    }
    this.user = {
      email: this.userForm.value.Email,
      password: this.userForm.value.password
    }
    console.log(this.user)
    this.service.login(this.user).subscribe(
      (res) => {
        console.log(res)
        if (res) {
          //  store the token in local storage
          this.token = res['token'];
          localStorage.setItem('token', this.token);
          this.router.navigate(['/employee-list']);
        }
      },
      (err) => {
        alert(err.message)
      })


    
  }
}
