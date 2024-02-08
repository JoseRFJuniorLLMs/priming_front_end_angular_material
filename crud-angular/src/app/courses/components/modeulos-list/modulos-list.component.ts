import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModuloCollection } from '../../model/modulo-collection';

@Component({
  selector: 'app-modulos-list',
  templateUrl: './modulos-list.component.html',
  styleUrls: ['./modulos-list.component.scss']
})
export class ModulosListComponent {
  @Input() modulos: ModuloCollection[] = [];
  @Output() edit: EventEmitter<ModuloCollection> = new EventEmitter();
  @Output() remove: EventEmitter<ModuloCollection> = new EventEmitter();

  readonly displayedColumns = ['id', 'prime', 'target', 'text', 'actions'];

  onEdit(modulo: ModuloCollection) {
    this.edit.emit(modulo);
  }

  onRemove(modulo: ModuloCollection) {
    this.remove.emit(modulo);
  }
}
