import { Component, OnInit } from '@angular/core';
import { CoserviceService } from '../services/coservice.service';
import { Course } from '../common/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courselist: Course[];
  
  constructor(private CourseService:CoserviceService ) { }

  ngOnInit(): void {
    this.listCourses();
  }
  listCourses()
  {
    this.CourseService.getCourseList().subscribe(
      data=>{
        this.courselist=data;
      }
    )
  }

}
