---
title: 'Conheça o novo VTEX Sales App Extensibility'
createdAt: 2026-07-01T00:00:00.000Z
updatedAt: 2026-07-01T00:00:00.000Z
contentType: updates
productTeam: Shopping
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: 2026-07-01-introducing-vtex-sales-app-extensibility
locale: pt
announcementSynopsisPT: 'A funcionalidade permite que lojistas personalizem a jornada de vendas com extensões em pontos predefinidos da interface.'
tags:
  - Nova funcionalidade
  - VTEX Sales App
---

O **VTEX Sales App Extensibility** está disponível em open beta para todas as lojas VTEX. A funcionalidade permite que lojistas e parceiros personalizem a jornada padrão de vendas por meio de extensões em pontos predefinidos da interface, sem a necessidade de criar soluções do zero.

## O que mudou?

O VTEX Sales App Extensibility é uma solução nativa que permite ao Sales App integrar-se a APIs externas e interagir com dados de outras aplicações com segurança e estabilidade. Com ela, é possível renderizar componentes e adicionar recursos em oito pontos de extensão predefinidos, disponíveis nos seguintes contextos da jornada de venda:

- **Carrinho de compras e checkout:** `cart.cart-list.after`, `cart.cart-item.after` e `cart.order-summary.after`
- **Página de detalhes do produto (PDP):** `pdp.sidebar.before`, `pdp.sidebar.after` e `pdp.content.after`
- **Menu e modal lateral:** `menu.item` e `menu.drawer-content`

Os principais objetivos da funcionalidade são:

- **Segurança:** aumentar a segurança para desenvolvedores na implementação de código.
- **Estabilidade:** promover a estabilidade da aplicação, mesmo em cenários de falhas em customizações.
- **Compatibilidade:** preservar a compatibilidade das extensões com customizações, de forma que as evoluções do Sales App não comprometam as modificações realizadas pela loja.

Alguns exemplos de casos de uso do VTEX Sales App Extensibility são a integração com programas de fidelidade, venda de serviços adicionais (como garantias ou seguros), integração com soluções VTEX fora do fluxo padrão do Sales App e centralização de tarefas cotidianas dos vendedores em uma única plataforma.

## O que precisa ser feito?

A implementação do VTEX Sales App Extensibility é responsabilidade dos lojistas e parceiros. Para começar, recomendamos:

1. Ler a visão geral da funcionalidade, seus casos de uso e as orientações de implementação no artigo [Extensibilidade no VTEX Sales App](https://help.vtex.com/pt/tutorial/extensibilidade-no-vtex-sales-app).
2. Instalar a **Extensions Skill**, que auxilia nas etapas de definição e implementação do projeto. Saiba mais em [VTEX Sales App Extensions Skill](https://developers.vtex.com/docs/guides/vtex-sales-app-extensions-skill).
3. Seguir a documentação técnica para implementar as extensões: [Sales App Extensions implementation](https://developers.vtex.com/docs/guides/sales-app-extensions-implementation).
