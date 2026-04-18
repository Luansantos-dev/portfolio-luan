import { SkillGroup } from './skills.model';

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Front-End',
    skills: [
      { name: 'Angular / TypeScript', level: 92 },
      { name: 'HTML & semântica / a11y', level: 88 },
      { name: 'SCSS / design responsivo', level: 90 },
      { name: 'Performance & Core Web Vitals', level: 82 },
    ],
  },
  {
    title: 'Back-End & Dados',
    skills: [
      { name: 'APIs REST / JSON', level: 78 },
      { name: 'SQL & modelagem', level: 74 },
      { name: 'ETL leve & dashboards', level: 80 },
      { name: 'Python para dados', level: 72 },
    ],
  },
  {
    title: 'Automação',
    skills: [
      { name: 'Scripts & pipelines', level: 76 },
      { name: 'Integrações (webhooks, cron)', level: 70 },
      { name: 'CI/CD básico', level: 68 },
    ],
  },
  {
    title: 'Ferramentas',
    skills: [
      { name: 'Git / GitHub', level: 88 },
      { name: 'Figma (handoff)', level: 75 },
      { name: 'Vercel / deploy', level: 82 },
      { name: 'VS Code / debugging', level: 90 },
    ],
  },
];
