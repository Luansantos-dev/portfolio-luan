import { Component } from '@angular/core';
import { SkillBarComponent } from '../../shared/skill-bar/skill-bar.component';
import { SKILL_GROUPS } from '../../core/data/skills.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillBarComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  readonly groups = SKILL_GROUPS;
}
