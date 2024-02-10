import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from '../../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { Student } from '../../model/student/student';
import { StudentService } from '../../services/student.service';

import { AsyncPipe, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-students-list',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatToolbarModule,
    NgIf,
    StudentsListComponent,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatDialogModule,
    MatPaginatorModule,
    AsyncPipe
  ]
})

export class StudentsListComponent implements OnInit {
  @Input() students: Student[] = [];
  @Output() edit: EventEmitter<Student> = new EventEmitter();
  @Output() remove: EventEmitter<Student> = new EventEmitter();
  @Output() details: EventEmitter<Student> = new EventEmitter(false);
  @Output() add: EventEmitter<boolean> = new EventEmitter(false);
  @Output() view: EventEmitter<Student> = new EventEmitter(false);

  readonly displayedColumns = ['id', 'name', 'cpf', 'courses', 'prime', 'actions'];

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private studentService: StudentService
  ) {}

  ngOnInit() {
    this.loadStudents();
  }

  loadStudents() {
    this.studentService.list().subscribe(
      (students: Student[]) => {
        this.students = students;
      },
      (error: any) => {
        this.onError('Error trying to fetch students data.');
      }
    );
  }

  onEdit(student: Student) {
    this.edit.emit(student);
  }

  onRemove(student: Student) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Are you sure you would like to remove this student?'
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.studentService.remove(student.id).subscribe({
          next: () => {
            this.remove.emit(student);
            this.snackBar.open('Student removed successfully!', 'X', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          },
          error: () => this.onError('Error trying to remove the student.')
        });
      }
    });
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
}
