// dialog-animations-example-dialog.component.ts
import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: './dialog-animations-example-dialog.component.html',
  styleUrls: ['./dialog-animations-example-dialog.component.scss']
})
export class DialogAnimationsExampleDialog {
  @Input() selectedLesson: any; // Definindo selectedLesson como uma entrada para o componente

  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
}
