import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CategoryPipe } from '../../../../shared/pipes/category.pipe';
import { ModuloCollection } from '../../../model/modulo/modulo-collection';

@Component({
  selector: 'app-modulos-list',
  templateUrl: './modulos-list.component.html',
  styleUrls: ['./modulos-list.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule, CategoryPipe]
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
