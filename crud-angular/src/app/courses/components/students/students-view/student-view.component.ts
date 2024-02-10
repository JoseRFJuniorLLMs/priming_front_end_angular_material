import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  NO_ERRORS_SCHEMA,
  OnInit,
  ViewChild
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ActivatedRoute } from '@angular/router';

import { NgFor, NgIf } from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { Student } from '../../../model/student/student';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgIf,
    NgFor,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    YouTubePlayerModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CourseViewComponent implements OnInit, AfterViewInit {
  student!: Student;
  videoHeight!: number;
  videoWidth!: number;

  @ViewChild('youTubePlayer') youTubePlayer!: ElementRef<HTMLDivElement>;

  constructor(
    private route: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.student = this.route.snapshot.data['student'];
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  ngAfterViewInit(): void {
    this.onResize();
    window.addEventListener('resize', this.onResize.bind(this));
  }

  onResize(): void {
    this.videoWidth = this.youTubePlayer.nativeElement.clientWidth * 0.9;
    this.videoHeight = this.videoWidth * 0.6;
    this.changeDetectorRef.detectChanges();
  }

}
