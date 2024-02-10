import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Student } from '../model/student/student';
import { StudentService } from '../services/student.service';

@Injectable({
  providedIn: 'root'
})
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Student> {
    if (route.params && route.params['id']) {
      return this.studentService.loadById(route.params['id']);
    }

    const defaultStudent: Student = {
      _id: '',
      nome: ''
     };

    return of(defaultStudent);
  }
}
