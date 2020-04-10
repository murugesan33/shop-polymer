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
  fullname = new FormControl('', [Validators.required]);
  email = new FormControl('', [
    Validators.required,
    // Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
    Validators.email
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
    if (this.registerForm.invalid) {
      console.log(this.registerForm.invalid);
      Object.keys(this.registerForm.controls).forEach(key => {
        this.registerForm.controls[key].markAsDirty();
      });
      console.log(this.registerForm);
    } else {
      const registerPOST = <UserDeatils>{
        fullname: this.fullname.value,
        username: this.username.value,
        password: this.pwd.value,
        email: this.email.value,
        address: this.address.value,
      }
      this.api
        .setUserDetails(registerPOST)
        .subscribe(resp => {
          this.router.navigate(['menswear']);
        });
    }
  }

}
