import { Component, OnInit } from '@angular/core';
import { CoserviceService } from '../services/coservice.service';
import { Router } from '@angular/router';
import { Course } from '../common/course';

@Component({
  selector: 'app-createcourse',
  templateUrl: './createcourse.component.html',
  styleUrls: ['./createcourse.component.css']
})
export class CreatecourseComponent implements OnInit {

  constructor(private _service : CoserviceService,private _router : Router) { }
corse=new Course;
msg='';
  ngOnInit(): void {
  }
  registerCourse()
  {
    this._service.sendCreatedCourse(this.corse).subscribe(
      data=>{
        console.log("response received");
      this.msg="success";
     this.msg="Course added Successfully";
      },
      error=>{
        console.log("exception occured");
        this.msg="Error in creating course try again ";
        
      }
    )
  }
}
