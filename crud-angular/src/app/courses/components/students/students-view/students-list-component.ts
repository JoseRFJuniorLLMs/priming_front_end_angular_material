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
  @Output() details: EventEmitter<StudentCollection> = new EventEmitter(false);
  @Output() edit: EventEmitter<StudentCollection> = new EventEmitter(false);
  @Output() remove: EventEmitter<StudentCollection> = new EventEmitter(false);
  @Output() add: EventEmitter<boolean> = new EventEmitter(false);
  @Output() view: EventEmitter<StudentCollection> = new EventEmitter(false);

  readonly displayedColumns = ['nome', 'cpf', 'curso', 'actions'];

  onDetails(record: StudentCollection) {
    this.details.emit(record);
  }

  onAdd() {
    this.add.emit(true);
  }

  onEdit(record: StudentCollection) {
    this.edit.emit(record);
  }

  onRemove(record: StudentCollection) {
    this.remove.emit(record);
  }

  onView(record: StudentCollection) {
    this.view.emit(record);
  }
}
