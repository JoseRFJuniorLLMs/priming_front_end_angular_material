import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CategoryPipe } from '../../../../shared/pipes/category.pipe';
import { StudentCollection } from '../../../model/student-collection';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule, CategoryPipe]
})
export class StudentsListComponent {
  @Input() students: StudentCollection[] = [];
  @Output() edit: EventEmitter<StudentCollection> = new EventEmitter();
  @Output() remove: EventEmitter<StudentCollection> = new EventEmitter();

  readonly displayedColumns = ['id', 'name', 'cpf', 'courses', 'prime', 'actions'];

  onEdit(student: StudentCollection) {
    this.edit.emit(student);
  }

  onRemove(student: StudentCollection) {
    this.remove.emit(student);
  }
}
