import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BitcoinModule } from '../app/component/bitcoin/bitcoin.module';
import { DialogAnimationsExampleDialog } from './component/dialogWimHoff/dialog-animations-example-dialog.component';
import { DialogAnimationsExampleModule } from './component/dialogWimHoff/dialog-animations-example.module';

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
    MatChipsModule,
    BitcoinModule
  ],
  template: `
    <div class="wrapper">
      <!-- Barra superior -->
      <mat-toolbar color="primary">
      <!-- app.component.html ou qualquer outro componente onde você deseja usar o componente Bitcoin -->
  
      <!-- Relogio -->
      <mat-chip-listbox>
      <!-- Ícone do relógio -->
     <mat-basic-chip>
      <!-- Texto do relógio -->
       {{ displayTime }}
       <span class="material-icons" (click)="pauseTimer()" 
       matTooltip="Info: Pause Pomodoro"
       style="cursor: pointer"
       color="primary">alarm_add</span>
     </mat-basic-chip>
     </mat-chip-listbox>
        <!-- Para Relogio -->
        <mat-chip-listbox aria-label="Fish selection">
  
          <mat-chip-option (click)="startTimer()" 
          color="accent" 
          style="cursor: pointer" 
          matTooltip="Info: Click to start!"
          matTooltipClass="example-tooltip-uppercase" 
          selected>Start Pomodoro</mat-chip-option>
          <mat-icon>self_improvement</mat-icon>

          <mat-chip-option (click)="stopTimer()" (click)="openDialog()"
          color="warn" 
          style="cursor: pointer" 
          matTooltip="Info: Click to pause!"
          matTooltipClass="example-tooltip-uppercase">Stop Pomodo</mat-chip-option>
          <mat-icon>pan_tool</mat-icon>
        </mat-chip-listbox>
        <span style="flex: 1"></span>

        <!-- Espaço flexível para alinhar o botão à direita -->
        <button
            style="cursor: pointer"
            matTooltip="Info: Click to view the video!"
            matTooltipClass="example-tooltip-uppercase"
            aria-label="Button that shows a red tooltip"
            style="cursor: pointer"
            class="action-column"
            mat-mini-fab
            color="primary"
            [routerLink]="['students']"
            color="accent"
            aria-label="Add a new Course">
            <mat-icon>self_improvement</mat-icon>
          </button>

          <button
            style="cursor: pointer"
            class="action-column"
            mat-mini-fab
            matTooltip="Info about the action"
            color="primary"
            [routerLink]="['students']"
            color="accent"
            aria-label="Add a new Course">
            <mat-icon>ondemand_video</mat-icon>
          </button>

          <button
            style="cursor: pointer"
            class="action-column"
            mat-mini-fab
            matTooltip="Info about the action"
            color="primary"
            [routerLink]="['students']"
            color="accent"
            aria-label="Add a new Course">
            <mat-icon>voice_chat</mat-icon>
          </button>

          <button
            style="cursor: pointer"
            class="action-column"
            mat-mini-fab
            matTooltip="Info about the action"
            color="primary"
            [routerLink]="['students']"
            color="accent"
            aria-label="Add a new Course">
            <mat-icon>play_circle_filled</mat-icon>
          </button>

          <button
            style="cursor: pointer"
            class="action-column"
            mat-mini-fab
            matTooltip="Info about the action"
            color="primary"
            [routerLink]="['students']"
            color="accent"
            aria-label="Add a new Course">
            <mat-icon>60fps</mat-icon>
          </button>
          <button
            style="cursor: pointer"
            class="action-column"
            mat-mini-fab
            matTooltip="Info about the action"
            color="primary"
            [routerLink]="['students']"
            color="accent"
            aria-label="Add a new Course">
            <mat-icon>30fps_select</mat-icon>
          </button>
          <button
            style="cursor: pointer"
            class="action-column"
            mat-mini-fab
            matTooltip="Info about the action"
            color="primary"
            [routerLink]="['students']"
            color="accent"
            aria-label="Add a new Course">
            <mat-icon>speed</mat-icon>
          </button>
        <div style="display: flex; justify-content: flex-end;">
          <button mat-icon-button [routerLink]="['/']" style="cursor: pointer">
            <mat-icon>tips_and_updates</mat-icon>
          </button>
        </div>

        <app-bitcoin  style="cursor: pointer"
            class="action-column"
            mat-mini-fab
            matTooltip="Bitcoin"
            color="primary"
            [routerLink]="['students']"
            color="accent"
            aria-label="Bitcoin"></app-bitcoin> <!-- Incluindo o componente Bitcoin -->

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
  displayTime: string = '25:00';
  timer: any;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.startTimer();
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }

  paused: boolean = false;
remainingSeconds: number = 0; // Armazena os segundos restantes quando o timer é pausado

startTimer(): void {
  if (this.paused) {
    // Se estiver pausado, continue de onde parou
    this.timer = setInterval(() => {
      const minutes = Math.floor(this.remainingSeconds / 60);
      const seconds = this.remainingSeconds % 60;
      this.displayTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

      if (this.remainingSeconds === 0) {
        this.stopTimer();
        this.openDialog();
      } else {
        this.remainingSeconds--;
      }
    }, 1000);
  } else {
    // Se não estiver pausado, inicie um novo timer
    this.stopTimer(); // Certifique-se de parar o temporizador antes de iniciar um novo
    const duration = 25 * 60;
    this.remainingSeconds = duration;

    this.timer = setInterval(() => {
      const minutes = Math.floor(this.remainingSeconds / 60);
      const seconds = this.remainingSeconds % 60;
      this.displayTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

      if (this.remainingSeconds === 0) {
        this.stopTimer();
        this.openDialog();
      } else {
        this.remainingSeconds--;
      }
    }, 1000);
  }
}

stopTimer(): void {
  clearInterval(this.timer);
}

pauseTimer(): void {
  clearInterval(this.timer);
  this.paused = true;
}

continueTimer(): void {
  if (!this.paused) return;

  // Reinicie o timer com o tempo restante
  this.startTimer();
  this.paused = false;
}

  
  
  
  openDialog(): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '!00%',
      height: '100%'
    });
  }
}
