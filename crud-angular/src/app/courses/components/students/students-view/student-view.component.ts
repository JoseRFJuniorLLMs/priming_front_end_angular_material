import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute } from '@angular/router';

import { Student } from '../../../model/course/components/student/student-view/StudentViewComponent'; // Importe a interface Student corretamente

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatListModule]
})
export class StudentViewComponent implements OnInit, AfterViewInit {
  student!: Student;
  
  @ViewChild('youtubePlayer') youtubePlayer!: ElementRef<HTMLDivElement>; // Substitua 'youtubePlayer' pelo nome correto do seu elemento

  constructor(
    private route: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.student = this.route.snapshot.data['student']; // Supondo que você está obtendo os dados do estudante da rota

    // Aqui você pode realizar qualquer outra inicialização necessária
  }

  ngAfterViewInit(): void {
    // Se você precisa fazer algo após a visualização do componente, faça aqui
  }
}
