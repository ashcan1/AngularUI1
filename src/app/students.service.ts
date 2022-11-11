import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

 private baseApiUrl = 'https://localhost:7248/Student'

  constructor(private httpClinet : HttpClient) { }

  getStudent(): Observable<any> {
   return this.httpClinet.get<any>(this.baseApiUrl);
  }
}
