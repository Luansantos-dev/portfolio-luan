import { Component, Input } from '@angular/core';
import { Project } from '../../core/data/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  host: { class: 'project-card' },
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;
}
