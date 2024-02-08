import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StudentCollection } from '../../model/student-collection';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
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
