---
title: 'Alterar v1 O item desaparece da interface do usuário após ser faturado, cenário com promoção.'
id: 2OsJe5vLh2IsNUikT5VBrL
status: PUBLISHED
createdAt: 2024-08-13T13:11:12.493Z
updatedAt: 2024-08-13T13:53:43.754Z
publishedAt: 2024-08-13T13:53:43.754Z
firstPublishedAt: 2024-08-13T13:11:13.338Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: alterar-v1-o-item-desaparece-da-interface-do-usuario-apos-ser-faturado-cenario-com-promocao
locale: pt
kiStatus: No Fix
internalReference: 1080187
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Identificamos um cenário na Change V1 em que, depois de aplicar uma promoção "compre 2 e ganhe um desconto na segunda unidade", quando faturamos um dos itens e o segundo é removido por meio da Change V1, as informações sobre o produto que foi faturado desaparecem da UI de pedidos, deixando apenas as informações sobre o item que foi removido na Change V1.

Como a Change V1 não usa o itemIndex, a validação é feita pelo id, o que gera esse comportamento.

Ressaltamos que esse é apenas um comportamento na interface do usuário; via API, o pedido permanece intacto!

## Simulação


Para simular esse cenário, você precisa criar uma promoção do tipo "compre 2 e ganhe desconto na segunda unidade", depois faturar apenas um dos itens do pedido e remover o outro por meio da alteração v1.
O comportamento descrito neste KI será identificado, ou seja, o produto que foi faturado não aparecerá na interface do usuário de pedidos

## Workaround


No momento, estamos desenvolvendo a alteração V2, onde esse cenário não ocorre, sugerimos migrar para a alteração v2.





