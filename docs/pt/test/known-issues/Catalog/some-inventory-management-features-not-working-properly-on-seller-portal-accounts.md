---
title: 'Alguns recursos do Inventory Management não estão funcionando corretamente nas contas do portal do vendedor'
id: uJ4qws662c8pUnyfOV1fV
status: PUBLISHED
createdAt: 2024-03-18T17:54:20.400Z
updatedAt: 2024-03-18T17:54:21.597Z
publishedAt: 2024-03-18T17:54:21.597Z
firstPublishedAt: 2024-03-18T17:54:21.597Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: alguns-recursos-do-inventory-management-nao-estao-funcionando-corretamente-nas-contas-do-portal-do-vendedor
locale: pt
kiStatus: Backlog
internalReference: 1001665
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Os recursos de gerenciamento de estoque (como os links para os produtos) não se comportam como esperado nas contas do portal do vendedor. Isso acontece porque esse tipo de conta usa uma versão diferente do catálogo.

O módulo Logistics usa nessa UI uma API do catalogV1.

No entanto, não temos um proxy do catálogo do portal do vendedor para essa API no catalogV1.

O impacto é que os links fornecidos nos produtos não abrem a página do catálogo, mas, em vez disso, retornam um erro.

## Simulação



1. Tente abrir os links para os produtos em um gerenciamento de inventário do portal do vendedor

## Workaround


N/A





