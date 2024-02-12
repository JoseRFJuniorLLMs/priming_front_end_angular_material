// dialog-animations-example.module.ts
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogAnimationsExampleDialog } from './dialog-animations-example-dialog.component';
@NgModule({
  declarations: [DialogAnimationsExampleDialog],
  imports: [MatDialogModule, MatTooltipModule],
  exports: [DialogAnimationsExampleDialog],
})
export class DialogAnimationsExampleModule {}
