export const projects = [
  {
    slug: "webhook-listener-api",
    title: "Webhook Listener API",
    period: "2026",
    category: "Backend",
    summary:
      "API em Spring Boot para receber, validar e armazenar eventos de webhook do GitHub.",
    description:
      "Projeto backend desenvolvido com Java e Spring Boot para centralizar o recebimento de eventos enviados pelo GitHub. A aplicacao valida os dados recebidos e organiza o armazenamento desses eventos, criando uma base clara para integracoes e acompanhamento do fluxo.",
    stack: ["Java", "Spring Boot", "GitHub Webhooks"],
    highlights: [
      "Projeto focado na automacao do recebimento de eventos entre sistemas.",
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
      "API de gerenciamento de tarefas desenvolvida em Java com Spring Boot, estruturada com base nos principios da Clean Architecture. O projeto destaca a separacao de responsabilidades entre camadas e uma organizacao de codigo voltada para manutencao, clareza e evolucao do backend.",
    stack: ["Java", "Spring Boot", "Clean Architecture"],
    highlights: [
      "Projeto orientado por Clean Architecture para reforcar separacao de responsabilidades.",
      "Codigo organizado para facilitar manutencao, testes e evolucao da API.",
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
      "API REST em Spring Boot para gerenciamento de produtos com regras de negocio bem definidas.",
    description:
      "API RESTful desenvolvida em Java com Spring Boot para gerenciamento de produtos. O projeto reune operacoes de CRUD, validacoes de negocio e tratamento de excecoes em uma base backend enxuta e objetiva para cadastro e manutencao de itens.",
    stack: ["Java", "Spring Boot", "PostgreSQL"],
    highlights: [
      "API voltada para um fluxo completo de cadastro e gerenciamento de produtos.",
      "Regras de negocio tratadas no backend para manter consistencia dos dados.",
      "Respostas mais previsiveis com tratamento de excecoes e organizacao do fluxo."
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
      "Aplicativo mobile de e-commerce em Flutter com catalogo, produto, perfil e carrinho.",
    description:
      "Aplicativo mobile de e-commerce desenvolvido como Projeto Integrador, com foco na experiencia de navegacao entre catalogo, detalhes de produto, carrinho e perfil do usuario. O projeto destaca a construcao da interface mobile e a organizacao do fluxo principal da aplicacao em Flutter.",
    stack: ["Flutter", "Dart", "Firebase"],
    highlights: [
      "Experiencia mobile de e-commerce com navegacao fluida entre as etapas principais.",
      "Projeto integrador focado na construcao de uma jornada de compra clara no app.",
      "Interface pensada para apresentar catalogo, produto, carrinho e perfil de forma objetiva."
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
