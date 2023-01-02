import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { text } from 'body-parser';
import { Observable } from 'rxjs';
import { AddStudent } from './Model/AddStudent';
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
  updateStudent(id: string, student: Student) : Observable<Student>{

    const updateStudentRequest: UpdateStudentRequest = {
      firstName: student.firstName,
      lastName: student.lastName,
      dateOfBirth: student.dateOfBirth,
      email: student.email,
      mobile: student.mobile,
      genderId: student.genderId,
      physicalAddress: student.address.physicalAddress,
      postalAddress: student.address.postalAddress

    }

    return this.httpClinet.put<Student>(this.baseApiUrl + '/' + id, updateStudentRequest);

  }




    deleteStudent(StudentId: string): Observable<Student> {

     return this.httpClinet.delete<Student>(this.baseApiUrl + '/' + StudentId )

  }

    addStudent(student : Student): Observable<Student>{

      const AddStudent: AddStudent = {
        firstName: student.firstName,
        lastName: student.lastName,
        dateOfBirth: student.dateOfBirth,
        email: student.email,
        mobile: student.mobile,
        genderId: student.genderId,
        physicalAddress: student.address.physicalAddress,
        postalAddress: student.address.postalAddress

     };

      return this.httpClinet.post<Student>(this.baseApiUrl + '/add' , AddStudent);

    }



  uploadImage(StudentId: string, file:File): Observable<any>{

  const formdata = new FormData();
  formdata.append("profileImage", file);
  return this.httpClinet.post(this.baseApiUrl + StudentId + '/upload-image',
  formdata, {
    responseType: 'text'
  }
  );

}

getImagePath(relativePath: string) {
  return `${this.baseApiUrl}/${relativePath}`;
}
}


