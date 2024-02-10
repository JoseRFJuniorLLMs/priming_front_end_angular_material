import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, of } from 'rxjs';
import { AppConfig } from 'src/app/app-config';
import { Student } from '../model/student/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private readonly API = AppConfig.urlCourse2;
  
  private cache: Student[] = [];

  constructor(private http: HttpClient) { }

  list(page = 0, pageSize = 10) {
    return this.http.get<Student[]>(this.API, { params: { page: page.toString(), pageSize: pageSize.toString() } }).pipe(
      first(),
    );
  }


  loadById(id: string) {
    if (this.cache.length > 0) {
      const record = this.cache.find(studant => studant._id === id);
      return record ? of(record) : this.getById(id);
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
