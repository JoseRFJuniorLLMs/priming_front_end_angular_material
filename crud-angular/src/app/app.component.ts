import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DialogAnimationsExampleDialog } from './dialog-animations-example-dialog.component';
import { DialogAnimationsExampleModule } from './dialog-animations-example.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatIconModule, 
    MatToolbarModule, 
    MatTooltipModule,
    RouterLink, 
    RouterOutlet,
    DialogAnimationsExampleModule,
    MatChipsModule
  ],
  template: `
    <div class="wrapper">
  
      <!-- Barra superior -->
      <mat-toolbar color="primary">
        <div>{{ displayTime }}</div>
         <!-- Para Relogio -->
         <mat-chip-listbox aria-label="Fish selection">
        <mat-chip-option (click)="startTimer()" color="accent" selected>Start Timer</mat-chip-option>
        <mat-chip-option (click)="stopTimer()" color="warn">Stop Timer</mat-chip-option>
       </mat-chip-listbox>
        <span style="flex: 1"></span>
     

        <!-- Espaço flexível para alinhar o botão à direita -->
        <div style="display: flex; justify-content: flex-end;">
          <button mat-icon-button [routerLink]="['/']" style="cursor: pointer">
            <mat-icon>tips_and_updates</mat-icon>
          </button>
        </div>
      </mat-toolbar>

      <!-- Conteúdo do aplicativo -->
      <div class="router-container">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [
    `
      .wrapper {
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      .mat-toolbar {
        flex: 0 0 auto; /* A barra superior não deve crescer, apenas ocupar o espaço necessário */
      }

      .router-container {
        flex: 1; /* O container do router-outlet deve ocupar todo o espaço restante */
        display: flex;
        flex-direction: column; /* Ajuste para empilhar elementos na vertical */
      }
    `
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  displayTime: string = '05:00';
  timer: any;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    // Não inicie o timer automaticamente ao iniciar o componente
    this.startTimer();
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }

  startTimer(): void {
    this.stopTimer(); // Certifique-se de parar o temporizador antes de iniciar um novo
    const duration = 5 * 60;
    let remainingSeconds = duration;

    this.timer = setInterval(() => {
      const minutes = Math.floor(remainingSeconds / 60);
      const seconds = remainingSeconds % 60;
      this.displayTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

      if (remainingSeconds === 0) {
        this.stopTimer();
        this.openDialog();
      } else {
        remainingSeconds--;
      }
    }, 1000);
  }

  stopTimer(): void {
    clearInterval(this.timer);
  }

  openDialog(): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '250px',
    });
  }
}
