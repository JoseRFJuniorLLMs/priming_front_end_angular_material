import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CategoryPipe } from '../../../../shared/pipes/category.pipe';
import { Student } from '../../../model/student/student';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule, CategoryPipe]
})
export class StudentsListComponent implements OnChanges, OnInit, OnDestroy {
  @Input() students: Student[] = [];
  @Output() edit: EventEmitter<Student> = new EventEmitter();
  @Output() remove: EventEmitter<Student> = new EventEmitter();
  @Output() add: EventEmitter<boolean> = new EventEmitter(false);
  @Output() view: EventEmitter<Student> = new EventEmitter(false);
  @Output() details: EventEmitter<Student> = new EventEmitter(false);

  readonly displayedColumns = ['name','actions'];

  constructor() {
    console.log('StudentsListComponent constructor OK', this.students);
  }

  ngOnChanges() {
    console.log('StudentsListComponent ngOnChanges OK', this.students);
  }

  ngOnInit() {
    console.log('StudentsListComponent ngOnInit OK', this.students);
  }

  ngOnDestroy() {
    console.log('StudentsListComponent ngOnDestroy OK', this.students);
  }

  onEdit(student: Student) {
    console.log('Edit clicked:', student);
    this.edit.emit(student);
  }

  onRemove(student: Student) {
    console.log('Remove clicked:', student);
    this.remove.emit(student);
  }

  
  onDetails(record: Student) {
    this.details.emit(record);
  }

  onAdd() {
    this.add.emit(true);
  }

  onView(record: Student) {
    this.view.emit(record);
  }
}
