import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
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
export class StudentsListComponent implements OnChanges, OnInit, OnDestroy {
  @Input() students: StudentCollection[] = [];
  @Output() edit: EventEmitter<StudentCollection> = new EventEmitter();
  @Output() remove: EventEmitter<StudentCollection> = new EventEmitter();

  readonly displayedColumns = ['id', 'name', 'cpf', 'courses', 'prime', 'actions'];

  constructor() {
    console.log('StudentsListComponent constructor called');
  }

  ngOnChanges() {
    console.log('StudentsListComponent ngOnChanges called', this.students);
  }

  ngOnInit() {
    console.log('StudentsListComponent ngOnInit called', this.students);
  }

  ngOnDestroy() {
    console.log('StudentsListComponent ngOnDestroy called');
  }

  onEdit(student: StudentCollection) {
    console.log('Edit clicked:', student);
    this.edit.emit(student);
  }

  onRemove(student: StudentCollection) {
    console.log('Remove clicked:', student);
    this.remove.emit(student);
  }
}
