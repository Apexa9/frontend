import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../user';
import {RegisterService} from '../register.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
user=new User();
msg='';

//msg2='';
flag:boolean;
constructor(private _service : RegisterService,private _router : Router) { }

  ngOnInit() {

  }
registerUser()
{
  
  this._service.registerUserFromRemote(this.user).subscribe(
    data=>{
      console.log("response received");
    this.msg="success";
 this.flag=true;
    // this._router.navigate(['/login'])

   this.msg="Registration Successful";
    },
    error=>{
      console.log("exception occured");
      this.flag=false;
      this.msg="Email already exists";
      
    }
  )
}
}
