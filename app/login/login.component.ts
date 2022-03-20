import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import {FormControl,FormControlName,FormGroup} from '@angular/forms'

 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  image:any ="assets/images/pattern.png";

  loginForm = new FormGroup(
    {
      user:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z]{5,10}")]),
      password:new FormControl('',[Validators.required,Validators.minLength(5)])
    }
  )

    loginUser()
    {

    }

  get user()
  {
      return this.loginForm.get('user');
  }

  get password()
  {
    return this.loginForm.get('password');
  }


}
