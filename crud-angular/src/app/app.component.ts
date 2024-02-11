import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatToolbarModule, RouterLink, RouterOutlet, MatIconModule],
  template: `
    <div class="wrapper">
      <!-- Barra superior -->
      <mat-toolbar color="primary">
        <span style="flex: 1"></span>
        <!-- Espaço flexível para alinhar o botão à direita -->
        <div style="display: flex; justify-content: flex-end;">
          <button mat-icon-button [routerLink]="['/']" style="cursor: pointer" >
            <mat-icon>tips_and_updates</mat-icon>
          </button>

          <button style="cursor: pointer" 
            class="action-column"
            mat-mini-fab
            color="primary"
            [routerLink]="['students']"
            color="accent"
            aria-label="Add a new Course">
            <mat-icon>self_improvement</mat-icon>
          </button>

          <button style="cursor: pointer" 
            class="action-column"
            mat-mini-fab
            matTooltip="Info about the action"
            color="primary"
            [routerLink]="['students']"
            color="accent"
            aria-label="Add a new Course">
            <mat-icon>ondemand_video</mat-icon>
          </button>

          <button style="cursor: pointer" 
            class="action-column"
            mat-mini-fab
            matTooltip="Info about the action"
            color="primary"
            [routerLink]="['students']"
            color="accent"
            aria-label="Add a new Course">
            <mat-icon>voice_chat</mat-icon>
          </button>

          <button style="cursor: pointer" 
            class="action-column"
            mat-mini-fab
            matTooltip="Info about the action"
            color="primary"
            [routerLink]="['students']"
            color="accent"
            aria-label="Add a new Course">
            <mat-icon>play_circle_filled</mat-icon>
          </button>

          <button style="cursor: pointer" 
            class="action-column"
            mat-mini-fab
            matTooltip="Info about the action"
            color="primary"
            [routerLink]="['students']"
            color="accent"
            aria-label="Add a new Course">
            <mat-icon>60fps</mat-icon>
          </button>
          <button style="cursor: pointer" 
            class="action-column"
            mat-mini-fab
            matTooltip="Info about the action"
            color="primary"
            [routerLink]="['students']"
            color="accent"
            aria-label="Add a new Course">
            <mat-icon>30fps_select</mat-icon>
          </button>
          <button style="cursor: pointer" 
            class="action-column"
            mat-mini-fab
            matTooltip="Info about the action"
            color="primary"
            [routerLink]="['students']"
            color="accent"
            aria-label="Add a new Course">
            <mat-icon>speed</mat-icon>
          </button>
        </div>
      </mat-toolbar>

      <!-- Conteúdo do aplicativo -->
      <div class="router-container">
        <router-outlet></router-outlet>
        <!-- <div class="message">
          <p>Esta é a segunda parte do conteúdo.</p>
        </div> -->
      </div>
      
    </div>
  `,
  styles: [`
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

    .message {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }

    .action-column {
      margin-left: 8px;
    }
  `]
})
export class AppComponent {}
