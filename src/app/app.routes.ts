import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Luan Santos — Home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'projetos',
    title: 'Projetos — Luan Santos',
    loadComponent: () =>
      import('./pages/projects/projects.component').then((m) => m.ProjectsComponent),
  },
  {
    path: 'skills',
    title: 'Skills — Luan Santos',
    loadComponent: () =>
      import('./pages/skills/skills.component').then((m) => m.SkillsComponent),
  },
  {
    path: 'servicos',
    title: 'Serviços — Luan Santos',
    loadComponent: () =>
      import('./pages/services/services.component').then((m) => m.ServicesComponent),
  },
  {
    path: 'contato',
    title: 'Contato — Luan Santos',
    loadComponent: () =>
      import('./pages/contact/contact.component').then((m) => m.ContactComponent),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
