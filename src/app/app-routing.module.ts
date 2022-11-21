import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentByIdComponent } from './student-by-id/student-by-id.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {
   path: '',
   component: StudentsComponent,
   },
   {
   path: 'students',
   component: StudentsComponent

   },
   {
    path: 'students/:id',
    component: StudentByIdComponent
   },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
