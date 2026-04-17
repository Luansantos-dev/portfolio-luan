import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';
import { PROJECTS } from '../../core/data/projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly projects = PROJECTS;
}
