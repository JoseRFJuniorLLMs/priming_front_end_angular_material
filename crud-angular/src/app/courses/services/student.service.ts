import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, of, tap } from 'rxjs';

import { AppConfig } from 'src/app/app-config';
import { Student } from '../model/student/student';
import { StudentPage } from '../model/student/student-page';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private readonly API = AppConfig.urlAlunoInfo2;
  
  private cache: Student[] = [];

  constructor(private http: HttpClient) { }

  list(page = 0, pageSize = 10) {
    return this.http.get<StudentPage>(this.API, { params: { page, pageSize } }).pipe(
      tap(data => console.log('Data from API:', data)), // Aqui você imprime o valor que vem da API
      first(),
      tap(data => (this.cache = data.students))
    );
  }

  loadById(id: string) {
    if (this.cache.length > 0) {
      const record = this.cache.find(course => `${course._id}` === `${id}`);
      return record != null ? of(record) : this.getById(id);
    }
    return this.getById(id);
  }

  private getById(id: string) {
    return this.http.get<Student>(`${this.API}/${id}`).pipe(first());
  }

  save(record: Partial<Student>) {
    if (record._id) {
      return this.update(record);
    }
    return this.create(record);
  }

  private update(record: Partial<Student>) {
    return this.http.put<Student>(`${this.API}/${record._id}`, record).pipe(first());
  }

  private create(record: Partial<Student>) {
    return this.http.post<Student>(this.API, record).pipe(first());
  }

  remove(id: string) {
    return this.http.delete<Student>(`${this.API}/${id}`).pipe(first());
  }
}
