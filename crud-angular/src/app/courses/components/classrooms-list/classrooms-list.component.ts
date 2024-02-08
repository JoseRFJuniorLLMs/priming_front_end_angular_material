import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CategoryPipe } from '../../../shared/pipes/category.pipe';
import { ClassroomCollection } from '../../model/classroom-collection';

@Component({
  selector: 'app-classrooms-list',
  templateUrl: './classrooms-list.component.html',
  styleUrls: ['./classrooms-list.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule, CategoryPipe]
})
export class ClassroomsListComponent {
  @Input() classrooms: ClassroomCollection[] = [];
  @Output() edit: EventEmitter<ClassroomCollection> = new EventEmitter();
  @Output() remove: EventEmitter<ClassroomCollection> = new EventEmitter();

  readonly displayedColumns = ['id', 'studentId', 'course', 'module', 'prime', 'target', 'phrase', 'actions'];

  onEdit(classroom: ClassroomCollection) {
    this.edit.emit(classroom);
  }

  onRemove(classroom: ClassroomCollection) {
    this.remove.emit(classroom);
  }
}
