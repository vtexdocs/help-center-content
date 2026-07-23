---
title: 'Conheça o novo VTEX Sales App Extensibility'
createdAt: 2026-07-23T00:00:00.000Z
updatedAt: 2026-07-23T00:00:00.000Z
contentType: updates
productTeam: Shopping
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: 2026-07-23-discover-the-new-vtex-sales-app-extensibility
locale: pt
announcementSynopsisPT: 'A funcionalidade permite que lojistas personalizem a jornada de vendas com extensões em pontos predefinidos da interface.'
tags:
  - Nova funcionalidade
  - VTEX Sales App
---

O [VTEX Sales App Extensibility](https://help.vtex.com/pt/docs/tutorials/vtex-sales-app-extensibility-pt) permite ao lojista personalizar a jornada padrão de vendas por meio de extensões em pontos predefinidos da interface, sem a necessidade de criar soluções do zero. A funcionalidade está disponível em open beta para todos que utilizam o [Sales App](https://help.vtex.com/pt/docs/tracks/o-que-e-o-vtex-sales-app) na VTEX.

Para auxiliar no desenvolvimento e implementação das extensões, os lojistas dispõem da [VTEX Sales App Extensions Skill](https://developers.vtex.com/docs/guides/vtex-sales-app-extensions-skill), uma skill baseada em IA com conhecimento integrado sobre o Sales App e o monorepo da FastStore.

## O que mudou?

O **VTEX Sales App Extensibility** permite renderizar componentes e adicionar recursos em oito pontos de extensão predefinidos do Sales App. Os principais objetivos da funcionalidade são:

* **Segurança:** aumentar a segurança para desenvolvedores na implementação de código.
* **Estabilidade:** promover a estabilidade da aplicação, mesmo em cenários de falhas em customizações.
* **Compatibilidade:** integrar-se com APIs externas e interagir com dados de outras aplicações preservando a compatibilidade das extensões com customizações.

Alguns exemplos de casos de uso do **VTEX Sales App Extensibility** são a integração com programas de fidelidade, venda de serviços adicionais (como garantias ou seguros), integração com soluções VTEX fora do fluxo padrão do Sales App e centralização de tarefas cotidianas dos vendedores em uma única plataforma.

As imagens a seguir apresentam os pontos de extensão na jornada de vendas:

* Carrinho de compras (`cart.cart-item.after`, `cart.cart-list.after`) e checkout (`cart.order-summary.after`):

  ![extensibilidade_vtex_sales_app_1_cart_checkout_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-sales-app/extensibilidade_vtex_sales_app_1_cart_checkout_PT.png)

* Página de detalhes do produto (`pdp.sidebar.before`, `pdp.sidebar.after`, `pdp.content.after`):

  ![extensibilidade_vtex_sales_app_4_pdp_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-sales-app/extensibilidade_vtex_sales_app_4_pdp_PT.png)
  
* Menu (`menu.item`) e modal lateral (`menu.drawer-content`):

  ![extensibilidade_vtex_sales_app_2_menu_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-sales-app/extensibilidade_vtex_sales_app_2_menu_PT.png)

  ![extensibilidade_vtex_sales_app_3_drawer_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-sales-app/extensibilidade_vtex_sales_app_3_drawer_PT.png)

## O que precisa ser feito?

A implementação do **VTEX Sales App Extensibility** é responsabilidade dos lojistas e parceiros. Para isso, recomendamos seguir a documentação técnica [Sales App Extensions implementation](https://developers.vtex.com/docs/guides/sales-app-extensions-implementation).

> ℹ️ Utilize a [VTEX Sales App Extensions Skill](https://developers.vtex.com/docs/guides/vtex-sales-app-extensions-skill) para auxiliar nas etapas de definição e implementação do projeto.
