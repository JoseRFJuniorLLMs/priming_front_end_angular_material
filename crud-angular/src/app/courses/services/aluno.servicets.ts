import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, of } from 'rxjs';
import { AlunoCollection } from '../model/aluno-collection';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private readonly API = '/api/alunos';

  private cache: AlunoCollection[] = [];

  constructor(private http: HttpClient) { }

  list(page = 0, pageSize = 10) {
    return this.http.get<AlunoCollection[]>(this.API, { params: { page: page.toString(), pageSize: pageSize.toString() } }).pipe(
      first(),
    );
  }

  loadById(id: string) {
    if (this.cache.length > 0) {
      const record = this.cache.find(aluno => aluno.id === id);
      return record ? of(record) : this.getById(id);
    }
    return this.getById(id);
  }

  private getById(id: string) {
    return this.http.get<AlunoCollection>(`${this.API}/${id}`).pipe(first());
  }

  save(record: Partial<AlunoCollection>) {
    if (record.id) {
      return this.update(record);
    }
    return this.create(record);
  }

  private update(record: Partial<AlunoCollection>) {
    return this.http.put<AlunoCollection>(`${this.API}/${record.id}`, record).pipe(first());
  }

  private create(record: Partial<AlunoCollection>) {
    return this.http.post<AlunoCollection>(this.API, record).pipe(first());
  }

  remove(id: string) {
    return this.http.delete<AlunoCollection>(`${this.API}/${id}`).pipe(first());
  }
}
