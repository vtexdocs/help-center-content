---
title: 'Atualizações de preços com cache em aplicativos finais'
id: 1ZDl8C3DDoACmxRqRlYDJo
status: PUBLISHED
createdAt: 2023-09-08T16:08:24.445Z
updatedAt: 2023-09-08T16:08:25.900Z
publishedAt: 2023-09-08T16:08:25.900Z
firstPublishedAt: 2023-09-08T16:08:25.900Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: atualizacoes-de-precos-com-cache-em-aplicativos-finais
locale: pt
kiStatus: Backlog
internalReference: 896520
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


As modificações de preço feitas na conta são atualizadas quase em tempo real nas APIs de preço. No entanto, as simulações de checkout levam cerca de 5 minutos para ter o preço mais atualizado no produto devido ao cache. Isso é esperado.

No entanto, em aplicativos finais, como afiliados externos ou integrações de mercado, como o Google Shopping, os preços podem, **às vezes**, ser entregues errados.

Isso acontece porque o módulo de preços notifica todos os sistemas internos de que o preço foi atualizado assim que a ação ocorre, não dando tempo suficiente para que os aplicativos finais que consultam as simulações de checkout obtenham o preço sem o cache.

## Simulação



1. Atualizar o preço em uma sku;
2. Verifique nos registros da ponte se o preço enviado para as integrações do marketplace foi o que deve ser atualizado ou o valor antigo

## Workaround


N/A





