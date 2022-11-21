import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './Model/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

 private baseApiUrl = 'https://localhost:7248/Student'

  constructor(private httpClinet : HttpClient) { }

  getStudent(): Observable<Student[]> {
   return this.httpClinet.get<Student[]>(this.baseApiUrl);
  }
  getStudentById(id :string): Observable <Student> {

    return this.httpClinet.get<Student>(this.baseApiUrl + '/' + id )

  }
}
