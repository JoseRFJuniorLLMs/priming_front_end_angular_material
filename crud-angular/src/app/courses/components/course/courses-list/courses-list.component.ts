import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { CategoryPipe } from '../../../../shared/pipes/category.pipe';
import { Course } from '../../../model/course/course';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule, CategoryPipe, MatExpansionModule, MatTooltipModule]
})
export class CoursesListComponent {
  @Input() courses: Course[] = [];
  @Output() details: EventEmitter<Course> = new EventEmitter(false);
  @Output() edit: EventEmitter<Course> = new EventEmitter(false);
  @Output() remove: EventEmitter<Course> = new EventEmitter(false);
  @Output() add: EventEmitter<boolean> = new EventEmitter(false);
  @Output() view: EventEmitter<Course> = new EventEmitter(false);

  panelOpenState = false;

  readonly displayedColumns = ['name', 'category', 'actions'];

  onDetails(record: Course) {
    this.details.emit(record);
  }

  onAdd() {
    this.add.emit(true);
  }

  onEdit(record: Course) {
    this.edit.emit(record);
  }

  onRemove(record: Course) {
    this.remove.emit(record);
  }

  onView(record: Course) {
    this.view.emit(record);
  }
}
