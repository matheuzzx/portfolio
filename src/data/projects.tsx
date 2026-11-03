export const projects = [
  {
    route: '/projetos/ecommerce',
    title: 'API de E-commerce Multi-loja',
    description:
      'API REST onde várias lojas vendem na mesma plataforma, cada uma com seus próprios produtos, categorias e pedidos.',
    features: [
      'Isolamento entre lojas garantido na camada de serviço',
      'Autenticação e autorização com Spring Security + JWT',
      'Arquitetura em camadas: controller, service, repository, DTO',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Data JPA',
      'Spring Security',
      'PostgreSQL',
      'Lombok',
    ],
    github: 'https://github.com/matheuzzx/',
  },
  {
    route: '/projetos/orca-facil',
    title: 'Orça Fácil',
    description:
      'App para autônomos e MEIs criarem, enviarem e acompanharem orçamentos comerciais, com geração de PDF.',
    features: [
      'API própria em Spring Boot sobre o Supabase',
      'Row Level Security em todas as tabelas, dados isolados por usuário',
      'Ciclo de status do orçamento: rascunho → enviado → aprovado',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'Supabase',
      'PostgreSQL',
      'OpenAPI',
      'React',
    ],
    github: 'https://github.com/matheuzzx/',
  },
];