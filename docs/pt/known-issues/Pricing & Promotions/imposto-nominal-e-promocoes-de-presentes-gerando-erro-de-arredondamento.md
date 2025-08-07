---
title: "Imposto nominal e promoções de presentes gerando erro de arredondamento"
id: 6zsBxIeKSPKX9yVRA5jcct
status: PUBLISHED
createdAt: 2024-08-29T14:57:35.310Z
updatedAt: 2024-12-19T13:35:00.593Z
publishedAt: 2024-12-19T13:35:00.593Z
firstPublishedAt: 2024-08-29T14:57:36.770Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: imposto-nominal-e-promocoes-de-presentes-gerando-erro-de-arredondamento
locale: pt
kiStatus: Backlog
internalReference: 1089066
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao configurar um imposto nominal e promoções de presentes para o mesmo item, o módulo Promoções pode gerar uma discrepância de arredondamento no valor do imposto durante a comunicação com o aplicativo Checkout. Essa discrepância pode impedir que os pedidos sejam concluídos.

## Simulação


O problema é altamente específico e difícil de reproduzir, pois depende de combinações específicas de quantidade de itens, valores de impostos e promoções de presentes. As etapas para reproduzi-lo são as seguintes:

1. Configure um imposto nominal para uma SKU específica, usando um valor de imposto ímpar (por exemplo, 4,99). Números pares podem não acionar esse problema.
2. Crie uma promoção de presente para a mesma SKU.
3. Adicione uma quantidade par da SKU ao carrinho.
4. Tente concluir o pedido. Uma mensagem de erro pode ser exibida, impedindo que o pedido seja finalizado.
5. Confirme o problema ajustando a quantidade de itens no carrinho. Se a alteração da contagem de itens resolver o problema, ele provavelmente está relacionado a esse bug

## Workaround


Para evitar esse problema:

- Use impostos baseados em porcentagem em vez de impostos nominais.
- Opte por outros tipos de promoções em vez de promoções de brindes.





