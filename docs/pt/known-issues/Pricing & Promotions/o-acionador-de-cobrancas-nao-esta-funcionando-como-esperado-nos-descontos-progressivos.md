---
title: "O acionador de cobranças não está funcionando como esperado nos descontos progressivos"
id: 78b9yQnTm1bxgOM2cfMlql
status: PUBLISHED
createdAt: 2023-11-06T16:42:53.081Z
updatedAt: 2023-11-06T16:42:53.722Z
publishedAt: 2023-11-06T16:42:53.722Z
firstPublishedAt: 2023-11-06T16:42:53.722Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: o-acionador-de-cobrancas-nao-esta-funcionando-como-esperado-nos-descontos-progressivos
locale: pt
kiStatus: Backlog
internalReference: 930849
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao criar uma promoção de desconto progressivo, o cliente pode definir o acionador por coleção, por uma lista de SKUs ou por ambos.

No entanto, quando ambos são configurados na promoção, a condição que deveria ser a coleção ou a lista de SKUs aciona a promoção está, na verdade, se comportando como se apenas a lista de SKUs fosse o acionador.

## Simulação



1. Crie uma promoção de desconto progressivo;
2. Nos acionadores da promoção, selecione uma coleção e uma lista de SKUs com um sku que não pertença à coleção;
3. Verifique no carrinho se a promoção só estará ativa quando o sku que pertence à lista de sku estiver presente

## Workaround


Para ativar os dois acionadores ao mesmo tempo, não há solução alternativa.





