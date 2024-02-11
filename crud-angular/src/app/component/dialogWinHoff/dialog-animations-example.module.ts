// dialog-animations-example.module.ts
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogAnimationsExampleDialog } from './dialog-animations-example-dialog.component';

@NgModule({
  declarations: [DialogAnimationsExampleDialog],
  imports: [MatDialogModule],
  exports: [DialogAnimationsExampleDialog],
})
export class DialogAnimationsExampleModule {}
