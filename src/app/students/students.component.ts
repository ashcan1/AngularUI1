import { Component, OnInit } from '@angular/core';
import { concatWith } from 'rxjs';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private studentService: StudentsService ) { }

  ngOnInit(): void {
    this.studentService.getStudent()
    .subscribe(
      (successResponse) => {
        console.log(successResponse);
      },
      (errorResponse) =>
      console.log(errorResponse)

    );
  }

}
