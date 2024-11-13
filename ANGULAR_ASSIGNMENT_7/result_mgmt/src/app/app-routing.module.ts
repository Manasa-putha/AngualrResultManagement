import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentResultComponent } from './student-result/student-result.component';
import { NoPageComponent } from './no-page/no-page.component';
const routes: Routes = [
 {
  path:'',component:LoginComponent
 },
 {
  path:'details',component:TeacherDashboardComponent
 },
 {
  path:'student-dashboard', component:StudentDashboardComponent
 },
 {path:'student-result', component:StudentResultComponent},
 {
  path:'**',
  component:NoPageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
