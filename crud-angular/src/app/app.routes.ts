import { Routes } from '@angular/router';
import { StudentsListComponent } from './courses/components/students/students-list/students-list.component';

export const APP_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'students' },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.routes').then(m => m.COURSES_ROUTES)
  },
  {
    path: 'students',
    component: StudentsListComponent
  }
];
