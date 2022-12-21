import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from '../Model/Student';
import { StudentsService } from '../students.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { createCustomElement } from '@angular/elements'

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})

export class StudentsComponent implements OnInit {

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

  ELEMENT_DATA: Student[] = [];



  displayedColumns: string[] = ['firstName', 'lastName','dateOfBirth','email','mobile','profileImageUrl'
   ,'genderId','edit'];

  dataSource : MatTableDataSource<Student> =  new MatTableDataSource<Student>();
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  filterString = '';

  constructor(private studentService: StudentsService,
  private snakBar : MatSnackBar )

  {}

  ngOnInit(): void {

    this.studentService.getStudent()


    .subscribe(
      (successResponse) => {
         this.ELEMENT_DATA = successResponse;
         this.dataSource = new MatTableDataSource<Student>(this.ELEMENT_DATA)

         if(this.paginator){
          this.dataSource.paginator = this.paginator;
         }
         if(this.matSort){
          this.dataSource.sort = this.matSort;
         }

      },
      (errorResponse) =>
      console.log(errorResponse)

    );
  }

  filterStudents(){
    this.dataSource.filter = this.filterString.trim().toLowerCase();
  }

}


