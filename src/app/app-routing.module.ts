import { ErrorComponent } from './shared/component/error/error.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path : '',
    component : StudentDashboardComponent
  },
  {
    path : 'error',
    component : ErrorComponent
  },
  {
    path : '**',
    component : ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
