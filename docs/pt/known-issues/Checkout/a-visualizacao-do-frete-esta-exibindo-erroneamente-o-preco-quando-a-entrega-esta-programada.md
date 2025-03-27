---
title: 'A visualização do frete está exibindo erroneamente o preço quando a entrega está programada'
id: 1348f4mDxoxAT7pTKBxm29
status: PUBLISHED
createdAt: 2023-01-31T19:16:25.118Z
updatedAt: 2024-03-27T15:40:02.745Z
publishedAt: 2024-03-27T15:40:02.745Z
firstPublishedAt: 2023-01-31T19:16:25.874Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-preview-wrongly-displaying-the-price-when-its-scheduled-delivery
locale: pt
kiStatus: Fixed
internalReference: 532487
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


O preço de entrega exibido no shipping-preview (carrinho) está incorreto quando os itens têm entrega programada e todos esses itens saem no mesmo SLA. Mesmo com a API retornando o valor correto, a interface do usuário não reflete essa informação e exibe o valor incorreto.

## Simulação


Se você adicionar dois ou mais itens ao carrinho com entrega programada, a interface do usuário mostrará um valor diferente do valor retornado pela API



## Workaround


N/A




