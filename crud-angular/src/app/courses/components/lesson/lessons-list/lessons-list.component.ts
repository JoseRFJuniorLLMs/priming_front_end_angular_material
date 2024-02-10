import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CategoryPipe } from '../../../../shared/pipes/category.pipe';
import { Lesson } from '../../../model/lesson/lesson';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule, CategoryPipe]
})
export class LessonListComponent {
  @Input() lessons: Lesson[] = [];
  @Output() edit: EventEmitter<Lesson> = new EventEmitter();
  @Output() remove: EventEmitter<Lesson> = new EventEmitter();

  readonly displayedColumns = ['_id', 'name', 'youtubeUrl', 'actions'];

  onEdit(lesson: Lesson) {
    this.edit.emit(lesson);
  }

  onRemove(lesson: Lesson) {
    this.remove.emit(lesson);
  }
}
