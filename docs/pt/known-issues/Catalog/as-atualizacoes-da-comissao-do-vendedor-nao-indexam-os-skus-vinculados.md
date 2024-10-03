---
title: 'As atualizações da comissão do vendedor não indexam os skus vinculados'
id: GNX6sFV0thQkMLWEwxya9
status: PUBLISHED
createdAt: 2023-08-31T14:44:39.162Z
updatedAt: 2024-09-30T15:10:05.104Z
publishedAt: 2024-09-30T15:10:05.104Z
firstPublishedAt: 2023-08-31T14:44:39.748Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: seller-commission-updates-does-not-index-binded-skus
locale: pt
kiStatus: Backlog
internalReference: 891162
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando o comerciante atualiza a comissão do vendedor na interface do usuário de gerenciamento do vendedor, os skus vinculados relacionados a esse vendedor não são indexados automaticamente.

Nosso sistema de checkout usa a API `stockkeepingunitbyid` para obter as informações atualizadas do sku.

Nessa API, temos o objeto SkuSellers que contém as informações de comissão. Mas se a sku não for indexada, esse objeto ficará desatualizado.

Isso faz com que o checkout obtenha o valor antigo da comissão.

## Simulação



1. Altere a comissão do vendedor na interface de gerenciamento do vendedor.
2. Aguarde o tempo de cache, cerca de 10 minutos.
3. Verifique se na simulação de checkout a comissão está desatualizada

## Workaround


Para evitar o fechamento de pedidos com o valor de comissão desatualizado, o comerciante pode indexar manualmente os skus afetados.





