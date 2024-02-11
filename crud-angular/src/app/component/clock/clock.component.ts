import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent implements OnInit, OnDestroy {
  displayTime: string = '01:00';
  timer: any;

  constructor() { }

  ngOnInit(): void {
    this.startTimer();
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }

  startTimer(): void {
    const duration = 1 * 60; // 45 minutes in seconds
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
    console.log('Time is up! Opening dialog...');
  }
}
