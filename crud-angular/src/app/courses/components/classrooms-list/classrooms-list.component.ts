import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Classroom } from '../../model/classroom-collection';

@Component({
  selector: 'app-classrooms-list',
  templateUrl: './classrooms-list.component.html',
  styleUrls: ['./classrooms-list.component.scss']
})
export class ClassroomsListComponent {
  @Input() classrooms: Classroom[] = [];
  @Output() edit: EventEmitter<Classroom> = new EventEmitter();
  @Output() remove: EventEmitter<Classroom> = new EventEmitter();

  readonly displayedColumns = ['id', 'studentId', 'course', 'module', 'prime', 'target', 'phrase', 'actions'];

  onEdit(classroom: Classroom) {
    this.edit.emit(classroom);
  }

  onRemove(classroom: Classroom) {
    this.remove.emit(classroom);
  }
}
