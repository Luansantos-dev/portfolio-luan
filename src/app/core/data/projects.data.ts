import { Project } from './project.model';

export const PROJECTS: Project[] = [
  {
    type: 'Angular · Firebase',
    name: 'CRUD Users',
    description: 'Sistema de gerenciamento de usuários com criação, edição, remoção e feedback visual. Integração com Firebase Firestore.',
    tags: ['Angular', 'TypeScript', 'Firebase', 'SCSS'],
    url: 'https://crud-users-nu.vercel.app/home',
  },
  {
    type: 'Angular · Node.js',
    name: 'Users Filter',
    description: 'Aplicação de filtragem de usuários em tempo real por nome, data de cadastro e status. Interface responsiva com Angular Material.',
    tags: ['Angular', 'Angular Material', 'Node.js', 'SCSS'],
    url: 'https://usersfilter.vercel.app',
  },
  {
    type: 'Angular · GSAP',
    name: 'Portfolio Pessoal',
    description: 'Portfólio desenvolvido com Angular 18+, Standalone Components, animações GSAP e deploy no Vercel.',
    tags: ['Angular', 'GSAP', 'TypeScript', 'SCSS'],
    url: 'https://github.com/Luansantos-dev/portfolio-luan',
  },
];