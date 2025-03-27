---
title: 'As especificações da SKU têm prioridade no título da página'
id: 2AfzLrb7Vu3E4HBqH3l9iN
status: PUBLISHED
createdAt: 2024-08-29T20:58:07.401Z
updatedAt: 2024-08-29T20:58:08.064Z
publishedAt: 2024-08-29T20:58:08.064Z
firstPublishedAt: 2024-08-29T20:58:08.064Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: sku-specifications-taking-priority-on-the-page-title
locale: pt
kiStatus: Backlog
internalReference: 1089440
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Espera-se que o título da página seja baseado nos últimos filtros ou nos filtros iniciais. Os filtros das especificações de SKU são sempre definidos como o último do breadcrumb, que ocorre como o título da página.

## Simulação


Navegar em uma página como "/summer-2024?map=productclusternames" e aplicar qualquer filtro que não seja uma especificação de SKU manterá o título da página como "Summer 2024", mas um filtro como "size=M" terá prioridade e o título será mostrado como "M"

## Workaround


N/A




