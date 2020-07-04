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
    localStorage.setItem('loggedInUser',this.user.email);
    console.log("respone recieved");
    this.msg="Successful registration"
    this._router.navigate(['/myhomepage'])

  },
    error => {
      console.log("exception");
      this.msg="Wrong credentials";
    }
)

}
loginfacilitator()
{
  
this._service.loginUserFromRemote(this.user).subscribe(
  data => {
    localStorage.setItem('loggedInUser',this.user.email);
    console.log("respone recieved");
    this.msg="Successful registration"
    this._router.navigate(['/facilitator'])

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
