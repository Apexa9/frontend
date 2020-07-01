import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { RegisterService } from '../register.service';
import { User } from '../user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user =new User();
msg='';
  constructor(private _service : RegisterService,private _router : Router) { }

  ngOnInit(){
  }
  
  loginUser()
  {
this._service.loginUserFromRemote(this.user).subscribe(
  data => {
    console.log("respone recieved");
    this._router.navigate(['/loginsuccess'])
  },
    error => {
      console.log("exception");
      this.msg="Wrong credentials";
    }
)
}
gotoregistration()
{ 
  console.log("hey");
this.msg="Successful";
  this._router.navigate(['/registration'])
  
}
}
