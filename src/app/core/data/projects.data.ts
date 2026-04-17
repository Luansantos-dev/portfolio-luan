import { Project } from './project.model';

export const PROJECTS: Project[] = [
  {
    type: 'Web App · React',
    name: 'Finance Dashboard',
    description:
      'Painel financeiro com KPIs em tempo real, filtros por período e exportação para planilhas.',
    tags: ['TypeScript', 'Charts', 'API REST'],
    url: 'https://anubisink.vercel.app',
  },
  {
    type: 'SaaS · Kanban',
    name: 'CRM Kanban',
    description:
      'Quadros arrastáveis, estágios customizáveis e rastreamento de leads para times comerciais.',
    tags: ['Angular', 'Drag & Drop', 'UX'],
  },
  {
    type: 'Produto completo',
    name: 'Landing+Admin',
    description:
      'Landing de captura integrada a painel admin para conteúdo, leads e métricas de conversão.',
    tags: ['Landing', 'Admin', 'Analytics'],
  },
  {
    type: 'Plataforma interna',
    name: 'Axion Hub',
    description:
      'Portal unificado para métricas operacionais, permissões por papel e integrações com webhooks.',
    tags: ['Design System', 'RBAC', 'Integrações'],
  },
];
