export const projects = [
  {
    slug: "webhook-listener-api",
    title: "Webhook Listener API",
    period: "2026",
    category: "Backend",
    summary:
      "API em Spring Boot para receber, validar e armazenar eventos de webhook do GitHub.",
    description:
      "Projeto backend desenvolvido com Java e Spring Boot para centralizar o recebimento de eventos enviados pelo GitHub. A aplicação valida os dados recebidos e organiza o armazenamento desses eventos, criando uma base clara para integrações e acompanhamento do fluxo.",
    stack: ["Java", "Spring Boot", "GitHub Webhooks"],
    highlights: [
      "Projeto focado na automação do recebimento de eventos entre sistemas.",
      "Estrutura pensada para validar payloads antes de seguir no fluxo.",
      "Base backend preparada para registrar e acompanhar integracoes via webhook."
    ],
    images: [],
    github: "https://github.com/FelipeZelent/webhook-listener-api",
    demo: ""
  },
  {
    slug: "task-manager-api-clean",
    title: "Task Manager API",
    period: "2024",
    category: "Backend",
    summary:
      "API de gerenciamento de tarefas com Java, Spring Boot e foco em Clean Architecture.",
    description:
      "API de gerenciamento de tarefas desenvolvida em Java com Spring Boot, estruturada com base nos princípios da Clean Architecture. O projeto destaca a separação de responsabilidades entre camadas e uma organização de código voltada para manutenção, clareza e evolução do backend.",
    stack: ["Java", "Spring Boot", "Clean Architecture"],
    highlights: [
      "Projeto orientado por Clean Architecture para reforçar separação de responsabilidades.",
      "Código organizado para facilitar manutenção, testes e evolução da API.",
      "Estrutura backend pensada para crescer sem perder clareza entre camadas."
    ],
    images: [],
    github: "https://github.com/FelipeZelent/Task-Manager-api-clean",
    demo: ""
  },
  {
    slug: "product-management-api",
    title: "Product Management API",
    period: "2025",
    category: "Backend",
    summary:
      "API REST em Spring Boot para gerenciamento de produtos com regras de negócio bem definidas.",
    description:
      "API RESTful desenvolvida em Java com Spring Boot para gerenciamento de produtos. O projeto reúne operações de CRUD, validações de negócio e tratamento de exceções em uma base backend enxuta e objetiva para cadastro e manutenção de itens.",
    stack: ["Java", "Spring Boot", "PostgreSQL"],
    highlights: [
      "API voltada para um fluxo completo de cadastro e gerenciamento de produtos.",
      "Regras de negócio tratadas no backend para manter consistência dos dados.",
      "Respostas mais previsíveis com tratamento de exceções e organização do fluxo."
    ],
    images: ["/swagger-ui-screenshot.png"],
    github: "https://github.com/FelipeZelent/ProductManagementAPI",
    demo: ""
  },
  {
    slug: "pi-delta",
    title: "P.I-Delta",
    period: "2023",
    category: "Mobile",
    summary:
      "Aplicativo mobile de e-commerce em Flutter com catálogo, produto, perfil e carrinho.",
    description:
      "Aplicativo mobile de e-commerce desenvolvido como Projeto Integrador, com foco na experiência de navegação entre catálogo, detalhes de produto, carrinho e perfil do usuário. O projeto destaca a construção da interface mobile e a organização do fluxo principal da aplicação em Flutter.",
    stack: ["Flutter", "Dart", "Firebase"],
    highlights: [
      "Experiência mobile de e-commerce com navegação fluida entre as etapas principais.",
      "Projeto integrador focado na construção de uma jornada de compra clara no app.",
      "Interface pensada para apresentar catálogo, produto, carrinho e perfil de forma objetiva."
    ],
    galleryLayout: "phone-pairs",
    images: [
      "/carrinho_app.png",
      "/editar_app.png",
      "/home_app.png",
      "/perfil_app.png",
      "/produto_app.png"
    ],
    github: "https://github.com/FelipeZelent/P.I-Delta",
    demo: ""
  }
];
