import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { StudentCollection } from '../model/student-collection';
import { StudentService } from '../services/student.service';

@Injectable({
  providedIn: 'root'
})
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<StudentCollection> {
    if (route.params && route.params['id']) {
      return this.studentService.loadById(route.params['id']);
    }

    const defaultStudent: StudentCollection = {
      id: '',
      nome: '',
      cpf: '',
      curso: [],
      prime: []
    };

    return of(defaultStudent);
  }
}
