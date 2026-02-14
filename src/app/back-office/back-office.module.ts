import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageCoursesComponent } from './manage-courses/manage-courses.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    ManageUsersComponent,
    ManageCoursesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BackOfficeModule { }
