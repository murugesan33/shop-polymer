import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ProductsService, UserDeatils } from '../products.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
 // spresp: any;
  fullname = new FormControl('', Validators.required);
  email = new FormControl('', [
    Validators.required,
    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
  ]);
  username = new FormControl('', Validators.required);
  pwd = new FormControl('', Validators.required);
 // private confPwd = new FormControl('', Validators.required);
  address = new FormControl('', Validators.required);
  constructor(private formBuilder: FormBuilder, private api: ProductsService, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullname: this.fullname,
      email: this.email,
      username: this.username,
      pwd: this.pwd,
     // confPwd: this.confPwd,
      address: this.address
    });
  }

  onSubmit() {
   // console.log(this.registerForm.invalid);
    this.submitted = true;
    if (this.registerForm.invalid)
      return;
 
    const registerPOST = <UserDeatils> {
      fullname: this.fullname.value,
      username: this.username.value,
      password: this.pwd.value,
      email: this.email.value,
      address: this.address.value,
    }
   // console.log(registerPOST);
    this.api
      .setUserDetails(registerPOST)
      .subscribe(resp => {
       // return this.spresp.push(resp);
       //console.log(resp);
       this.router.navigate(['menswear']);
      });
    // this.router.navigate(['feature']);
  }

}
