import {
  AfterViewInit,
  Component,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';
import { PROJECTS } from '../../core/data/projects.data';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements AfterViewInit, OnDestroy {
  readonly projects = PROJECTS;

  private ctx!: gsap.Context;

  ngAfterViewInit(): void {
    // Pequeno delay garante que os cards estão no DOM
    setTimeout(() => {
      this.ctx = gsap.context(() => {
        gsap.from('.project-card', {
          opacity: 0,
          y: 48,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.projects__grid',
            start: 'top 82%',
            once: true, // roda só uma vez
          },
        });
      });
    }, 50);
  }

  ngOnDestroy(): void {
    this.ctx?.revert(); // limpa ScrollTrigger ao sair da rota
  }
}
