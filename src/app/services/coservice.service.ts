import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Course } from '../common/course';

@Injectable({
  providedIn: 'root'
})
export class CoserviceService {
  private baseUrl='http://localhost:8082/course';
  courses: Course[];
  constructor(private httpClient : HttpClient) { }
  
  sendCreatedCourse(course:Course):Observable<any>{
    return this.httpClient.post<any>("http://localhost:8082/addcourse",course)
  
  }
  getCourseList():Observable<Course[]>{  
  return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.courses)
    );
  }
}
  interface GetResponse{
  _embedded:{
    courses: Course[];
  }
}

