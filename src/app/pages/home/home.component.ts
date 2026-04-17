import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { profile } from '../../core/data/profile.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly profile = profile;
  readonly stats = ['3+ anos', '10+ projetos', '2 especialidades'] as const;
}
