
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { GenderService } from '../gender.service';
import { Gender } from '../Model/Gender';
import { Student } from '../Model/Student';
import { StudentsService } from '../students.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { empty } from 'rxjs';



@Component({
  selector: 'app-student-by-id',
  templateUrl: './student-by-id.component.html',
  styleUrls: ['./student-by-id.component.css']
})
export class StudentByIdComponent implements OnInit {


 StudentId: string | null | undefined;
 student: Student = {
  id: '',
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  email: '',
  mobile: 0,
  genderId: "",


  profileImageUrl: '',

  gender: {
    id:'',
    description:''
  },

  address: {
    id: '',
    physicalAddress: '',
    postalAddress: ''
  }
}

  isNewStudent = true;
  header = '';
  disPlayImage = '';



  GenderList: Gender[] = [];








  constructor(private readonly StudentService : StudentsService,
    private readonly route: ActivatedRoute,
    private readonly GenderService : GenderService,
    private snakeBar : MatSnackBar,
    private router: Router)

     { }


  ngOnInit(): void {




    this.route.paramMap.subscribe(
      (params) => {

        this.StudentId = params.get('id');



        if(this.StudentId) {

          // if the route contains the keyword add
          // this would be new student functionality

          if(this.StudentId.toLocaleLowerCase() === 'Add'.toLocaleLowerCase()) {

            this.isNewStudent = true;
            this.header = "Add New Student";


          }
                 //otherwise if would be exisiting student functionallity
          else {

            this.isNewStudent = false;
            this.header = "Edit Student";
          this.StudentService. getStudentById(this.StudentId)


          .subscribe (
            (successResponse) => {
              this.student = successResponse;

            },



        );

          }





            this.GenderService.getGenderList()

            .subscribe(
              (succesResponse) => {
                this.GenderList =  succesResponse;
              }
            );





        }
      }
    );

  }


  onUpdate(): void  {

    this.StudentService.updateStudent(this.student.id, this.student)
      .subscribe(
        (succesResponse) => {
          // notification
          this.snakeBar.open('Data Updated!' , undefined, {
            duration: 2000

          });
          setTimeout(() => {
            this.router.navigateByUrl('students');
          }, 2000);
        },

      );



    }

  onDelete(): void {
    this.StudentService.deleteStudent(this.student.id)
    .subscribe(
      (successResponse) => {

        this.snakeBar.open("Data is deleted" , undefined, {
        duration: 2000
        });

        setTimeout(() => {
          this.router.navigateByUrl('students');
        }, 2000);

        },

    );
    }


    onAdd(): void {

      this.StudentService.addStudent(this.student)
      .subscribe(
        (successResponse) => {
          this.snakeBar.open('New Student Added', undefined,{
            duration: 2000
          });

          setTimeout(() => {
            this.router.navigateByUrl(`students`);
          }, 2000);
        },

      );
   }

  }



