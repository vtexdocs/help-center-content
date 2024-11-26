---
title: 'O Quick Order altera a quantidade do item quando uma promoção More for Less é aplicada'
id: 2nixdZvlUVIXnY8h3pF60j
status: PUBLISHED
createdAt: 2024-10-24T14:40:29.973Z
updatedAt: 2024-10-24T14:40:31.031Z
publishedAt: 2024-10-24T14:40:31.031Z
firstPublishedAt: 2024-10-24T14:40:31.031Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: quick-order-changes-items-quantity-when-a-more-for-less-promotion-is-applied
locale: pt
kiStatus: Backlog
internalReference: 1123142
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Ao aplicar uma promoção Mais por Menos (mas qualquer promoção que divida itens terá o mesmo comportamento), o comportamento esperado é separar o item promocional dos itens regulares, mas isso não acontece no aplicativo Quick Order.

Somente a quantidade do primeiro item é considerada se a promoção for aplicada durante a validação do aplicativo.

## Simulação



- Defina uma promoção Mais por Menos; por exemplo, compre 3 itens e ganhe 1 de graça;
- Os itens são divididos em 2 itens com o preço original e 1 item com 0;
- O aplicativo de pedido rápido considerará apenas 2 itens após a validação

## Workaround


N/A




