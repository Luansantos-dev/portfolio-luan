import { ServiceOffer } from './services.model';

export const SERVICES: ServiceOffer[] = [
  {
    number: '01',
    name: 'Front-End',
    description:
      'Interfaces modernas, componentização e integração com APIs — foco em UX e manutenção.',
    price: 'sob consulta',
  },
  {
    number: '02',
    name: 'Automação',
    description:
      'Fluxos repetitivos virando scripts ou integrações: menos clique, mais consistência.',
    price: 'R$497+',
  },
  {
    number: '03',
    name: 'BI',
    description:
      'Organização de dados, indicadores acionáveis e visões que o time realmente usa.',
    price: 'sob consulta',
  },
  {
    number: '04',
    name: 'Landing+Admin',
    description:
      'Site de conversão + painel leve para conteúdo, leads e acompanhamento de métricas.',
    price: 'R$997+',
  },
];
