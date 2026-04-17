import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  readonly links = [
    { path: '/', label: 'sobre', exact: true },
    { path: '/projetos', label: 'projetos', exact: false },
    { path: '/skills', label: 'skills', exact: false },
    { path: '/servicos', label: 'serviços', exact: false },
    { path: '/contato', label: 'contato', exact: false },
  ] as const;
}
