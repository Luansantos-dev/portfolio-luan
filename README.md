# Luan Santos — Portfolio

Portfólio pessoal desenvolvido com Angular 18+, animações GSAP e deploy automático no Vercel.

**Live:** [portfolio-higino.vercel.app](https://portfolio-higino.vercel.app)

---

## Stack

- **Angular 18+** — Standalone Components, lazy loading por rota
- **TypeScript** — tipagem estrita em todo o projeto
- **SCSS** — variáveis globais, design system próprio
- **GSAP** — animações de entrada, typewriter e stagger
- **Vercel** — deploy automático via GitHub

---

## Seções

| Rota | Conteúdo |
|------|----------|
| `/` | Hero com typewriter, avatar monocromático e stats |
| `/projetos` | Cards com projetos reais e links para deploy/GitHub |
| `/skills` | Grupos de habilidades com barras animadas |
| `/servicos` | Serviços oferecidos com preços |
| `/contato` | Links de contato + botão direto para WhatsApp |

---

## Projetos em destaque

**CRUD Users** — [crud-users-nu.vercel.app](https://crud-users-nu.vercel.app/home)
Sistema de gerenciamento de usuários com Firebase Firestore. Angular + TypeScript + SCSS.

**Users Filter** — [usersfilter.vercel.app](https://usersfilter.vercel.app)
Filtragem de usuários em tempo real por nome, data e status. Angular Material + Node.js.

---

## Rodando localmente

```bash
# Clone o repositório
git clone https://github.com/Luansantos-dev/portfolio-luan.git

# Entre na pasta
cd portfolio-luan

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
ng serve
```

Acesse `http://localhost:4200`

---

## Build de produção

```bash
ng build --configuration production
```

Output em `dist/portfolio/browser`

---

## Estrutura

```
src/
├── app/
│   ├── core/data/        # dados centralizados (projetos, skills, serviços)
│   ├── pages/            # home, projects, skills, services, contact
│   └── shared/           # navbar, footer, componentes reutilizáveis
├── assets/               # avatar e imagens
└── styles/               # variáveis SCSS globais
```

---

## Contato

- LinkedIn: [linkedin.com/in/luansantosdev](https://linkedin.com/in/luansantosdev)
- GitHub: [github.com/Luansantos-dev](https://github.com/Luansantos-dev)
- WhatsApp: [wa.me/5571992752076](https://wa.me/5571992752076)
