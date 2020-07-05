import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { CoserviceService } from '../services/coservice.service';
import { Course } from '../common/course';

@Component({
  selector: 'app-myhomepage',
  templateUrl: './myhomepage.component.html',
  styleUrls: ['./myhomepage.component.css']
})
export class MyhomepageComponent implements OnInit {
co: Course[];
  constructor(public _authservice:RegisterService,private courser:CoserviceService) { }

  ngOnInit(): void {
  this.listCourses();
  }
listCourses()
{
  this.courser.getCourse().subscribe(
    data =>{
      this.co=data;
    }
  )
}
}
