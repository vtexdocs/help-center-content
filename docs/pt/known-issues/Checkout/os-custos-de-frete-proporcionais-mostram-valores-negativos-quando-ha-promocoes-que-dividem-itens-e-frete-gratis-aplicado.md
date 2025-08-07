---
title: "Os custos de frete proporcionais mostram valores negativos quando há promoções que dividem itens e frete grátis aplicado"
id: 60gzoaN1WQC6OsEymBPdeq
status: PUBLISHED
createdAt: 2023-09-28T22:29:39.597Z
updatedAt: 2023-09-28T22:33:53.751Z
publishedAt: 2023-09-28T22:33:53.751Z
firstPublishedAt: 2023-09-28T22:29:40.382Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: os-custos-de-frete-proporcionais-mostram-valores-negativos-quando-ha-promocoes-que-dividem-itens-e-frete-gratis-aplicado
locale: pt
kiStatus: Backlog
internalReference: 909925
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao usar promoções que dividem itens, como o tipo "Mais por menos", os custos de envio proporcionais podem exibir valores negativos.

Esse problema é visível quando o desconto "Mais por menos" é aplicado pelo vendedor e uma promoção de frete grátis é aplicada pelo marketplace, resultando na concessão de um desconto. Esse comportamento causa um loop infinito quando se tenta concluir uma compra.

## Simulação


Pode haver diferentes combinações causando o problema, pois o peso é usado para calcular os custos proporcionais de envio, o que dificulta a reprodução.



## Workaround


Configure a promoção de frete grátis a ser aplicada pelo vendedor.




