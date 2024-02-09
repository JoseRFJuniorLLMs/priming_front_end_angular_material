import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, of } from 'rxjs';
import { AppConfig } from 'src/app/app-config';
import { StudentCollection } from '../model/student-collection';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private readonly API = AppConfig.urlCourse;
  
  private cache: StudentCollection[] = [];

  constructor(private http: HttpClient) { }

  list(page = 0, pageSize = 10) {
    return this.http.get<StudentCollection[]>(this.API, { params: { page: page.toString(), pageSize: pageSize.toString() } }).pipe(
      first(),
    );
  }


  loadById(id: string) {
    if (this.cache.length > 0) {
      const record = this.cache.find(studant => studant.id === id);
      return record ? of(record) : this.getById(id);
    }
    return this.getById(id);
  }

  private getById(id: string) {
    return this.http.get<StudentCollection>(`${this.API}/${id}`).pipe(first());
  }

  save(record: Partial<StudentCollection>) {
    if (record.id) {
      return this.update(record);
    }
    return this.create(record);
  }

  private update(record: Partial<StudentCollection>) {
    return this.http.put<StudentCollection>(`${this.API}/${record.id}`, record).pipe(first());
  }

  private create(record: Partial<StudentCollection>) {
    return this.http.post<StudentCollection>(this.API, record).pipe(first());
  }

  remove(id: string) {
    return this.http.delete<StudentCollection>(`${this.API}/${id}`).pipe(first());
  }
}
