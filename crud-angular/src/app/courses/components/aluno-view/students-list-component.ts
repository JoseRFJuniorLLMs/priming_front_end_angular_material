import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlunoCollection } from '../../model/aluno-collection';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent {
  @Input() alunos: AlunoCollection[] = [];
  @Output() details: EventEmitter<AlunoCollection> = new EventEmitter(false);
  @Output() edit: EventEmitter<AlunoCollection> = new EventEmitter(false);
  @Output() remove: EventEmitter<AlunoCollection> = new EventEmitter(false);
  @Output() add: EventEmitter<boolean> = new EventEmitter(false);
  @Output() view: EventEmitter<AlunoCollection> = new EventEmitter(false);

  readonly displayedColumns = ['nome', 'cpf', 'curso', 'actions'];

  onDetails(record: AlunoCollection) {
    this.details.emit(record);
  }

  onAdd() {
    this.add.emit(true);
  }

  onEdit(record: AlunoCollection) {
    this.edit.emit(record);
  }

  onRemove(record: AlunoCollection) {
    this.remove.emit(record);
  }

  onView(record: AlunoCollection) {
    this.view.emit(record);
  }
}
