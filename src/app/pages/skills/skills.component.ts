import {
  AfterViewInit,
  Component,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SKILL_GROUPS } from '../../core/data/skills.data';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements AfterViewInit, OnDestroy {
  readonly skillGroups = SKILL_GROUPS;

  private ctx!: gsap.Context;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.ctx = gsap.context(() => {
        gsap.from('.skill-group', {
          opacity: 0,
          y: 32,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.skills__grid',
            start: 'top 85%',
            once: true,
          },
        });

        document.querySelectorAll('.skill-bar__fill').forEach((bar) => {
          gsap.from(bar, {
            scaleX: 0,
            duration: 0.8,
            ease: 'power2.out',
            transformOrigin: 'left center',
            scrollTrigger: {
              trigger: bar,
              start: 'top 90%',
              once: true,
            },
          });
        });
      });
    }, 50);
  }

  ngOnDestroy(): void {
    this.ctx?.revert();
  }
}
