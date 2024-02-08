import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CategoryPipe } from '../../../../shared/pipes/category.pipe';
import { LessonCollection } from '../../../model/lesson-collection';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule, CategoryPipe]
})
export class LessonCollectionsListComponent {
  @Input() lessons: LessonCollection[] = [];
  @Output() edit: EventEmitter<LessonCollection> = new EventEmitter();
  @Output() remove: EventEmitter<LessonCollection> = new EventEmitter();

  readonly displayedColumns = ['_id', 'name', 'youtubeUrl', 'actions'];

  onEdit(lesson: LessonCollection) {
    this.edit.emit(lesson);
  }

  onRemove(lesson: LessonCollection) {
    this.remove.emit(lesson);
  }
}
