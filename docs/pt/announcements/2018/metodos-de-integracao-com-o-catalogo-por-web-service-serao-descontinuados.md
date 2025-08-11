---
title: 'Métodos de integração com o catálogo por Web Service serão descontinuados'
id: 1GmJhvCNvKAYWwwIEeyOey
status: PUBLISHED
createdAt: 2018-08-21T22:22:45.403Z
updatedAt: 2019-12-31T15:13:37.967Z
publishedAt: 2019-12-31T15:13:37.967Z
contentType: updates
productTeam: Others
author: authors_24
slugEN: integration-methods-with-the-catalog-through-web-service-will-be
locale: pt
legacySlug: metodos-de-integracao-com-o-catalogo-por-web-service-serao-descontinuados
announcementImageID: ''
announcementSynopsisPT: 'Em 29/10, vamos descontinuar alguns métodos de Web Service para integração com o catálogo.'
---

> ℹ️ A mudança descrita aqui só tem impacto na sua operação se sua loja usa **integração por Web Service** e essa integração usa algum dos métodos listados abaixo. Caso contrário, você **não** precisa tomar nenhuma ação.

A partir do dia __29 de outubro__, a VTEX vai descontinuar os seguintes métodos de integração por Web Service, com o objetivo de melhorar a performance da plataforma.

```
StockKeepingUnitGetAllFromUpdatedDate
StockKeepingUnitGetAllFromUpdatedDateAndId
IntegrationSettings
IntegrationErrorGetAllByErrorTypeAndId
IntegrationLogEvent
IntegrationLogError
IntegrationLog
IntegrationLogError
IntegrationInterfaceGetAll
IntegrationLogErrorInsertUpdate
IntegrationErrorCheckInstanceExists
```

Destes métodos, apenas os dois primeiros têm efeito atualmente:
- __StockKeepingUnitGetAllFromUpdatedDate__: pega todos os SKUs ordenados pela data de atualização.
- __StockKeepingUnitGetAllFromUpdatedDateAndId__: pega todos os SKUs ordenados pela data de atualização e pelo ID.

Os demais métodos listados acima já não têm aplicação prática alguma - ou seja, para todos os efeitos, já estão descontinuados.

Caso sua loja use algum desses métodos, você precisa avaliar o cenário e refazer a solução por meio de integração via API. Para ajudá-lo nessa tarefa, preparamos um guia de integração do catálogo com serviços externos, cobrindo todos os possíveis cenários atualmente atendidos pelos métodos que serão descontinuados: [Guia de Integração - Consumir as informações do Catálogo para utilizar em um Serviço Externo](/pt/tutorial/guia-de-integracao-consumir-as-informacoes-do-catalogo).

- __O que vai acontecer__: os métodos de Web Service listados acima serão descontinuados.
- __Quando__: 29 de outubro de 2018.
- __O que eu preciso fazer__: Primeiro, identifique se sua loja usa algum desses métodos. Caso use, sua loja precisa substituí-los por soluções via API.
- __Como faço isso__: Leia nosso [guia de integração do catálogo com serviços externos](/pt/tutorial/guia-de-integracao-consumir-as-informacoes-do-catalogo).
