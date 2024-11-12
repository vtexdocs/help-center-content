---
title: 'O filtro do catálogo para o vendedor = 1 traz resultados vazios'
id: 3BG6c5IPa7W950vCpTFY6H
status: PUBLISHED
createdAt: 2023-05-03T14:37:41.635Z
updatedAt: 2023-05-08T18:31:01.764Z
publishedAt: 2023-05-08T18:31:01.764Z
firstPublishedAt: 2023-05-03T14:37:42.157Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-filter-for-seller-1-brings-empty-results
locale: pt
kiStatus: Backlog
internalReference: 801538
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Atualmente, ao filtrar exclusivamente o vendedor principal nos menus do Catálogo, nenhum resultado é exibido. Isso acontece porque esse filtro está procurando incorretamente por um vendedor específico quando, em vez disso, o vendedor = 1 (o vendedor principal da conta) é o próprio marketplace.


## Simulação



1. Vá para qualquer menu do catálogo, como Import/Export
2. Filtre o vendedor principal da conta:

 ![](https://vtexhelp.zendesk.com/attachments/token/6dygVHVlzTTdqYD3jOyV10DaZ/?name=image.png)
3. Nenhum resultado será exibid

## Workaround


Usando uma política comercial na qual apenas o vendedor 1 está presente, filtre por essa política comercial em vez disso e, consequentemente, você estará filtrando pelo vendedor principal.

