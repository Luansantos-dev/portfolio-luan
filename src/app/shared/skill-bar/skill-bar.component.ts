import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-bar',
  standalone: true,
  templateUrl: './skill-bar.component.html',
  styleUrl: './skill-bar.component.scss',
})
export class SkillBarComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) level!: number;

  get clamped(): number {
    return Math.min(100, Math.max(0, this.level));
  }
}
