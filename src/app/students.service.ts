import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './Model/Student';
import { UpdateStudentRequest } from './Model/updatestudentsrequest';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

 private baseApiUrl = 'https://localhost:7248/Student';

  constructor(private httpClinet : HttpClient) { }

  getStudent(): Observable<Student[]> {
   return this.httpClinet.get<Student[]>(this.baseApiUrl);
  }

  getStudentById(id :string): Observable <Student> {

    return this.httpClinet.get<Student>(this.baseApiUrl + '/' + id )

  }
  updateStudent(id: string, studentRequest: Student) : Observable<Student>{

    const updateStudentRequest: UpdateStudentRequest = {
      FirstName: studentRequest.firstName,
      LastName: studentRequest.lastName,
      DateOfBirth: studentRequest.dateOfBirth,
      Email: studentRequest.email,
      Mobile: studentRequest.mobile,
      genderId: studentRequest.genderId,
      physicalAddress: studentRequest.address.physicalAddress,
      postalAddress: studentRequest.address.PostalAddress

    }

    return this.httpClinet.put<Student>(this.baseApiUrl + '/' + id, updateStudentRequest)

  }
}

