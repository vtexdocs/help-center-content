---
title: 'Impostos nominais + promoções de presentes no mesmo item podem gerar erros no checkout'
id: 6zsBxIeKSPKX9yVRA5jcct
status: PUBLISHED
createdAt: 2024-08-29T14:57:35.310Z
updatedAt: 2024-09-04T16:16:07.470Z
publishedAt: 2024-09-04T16:16:07.470Z
firstPublishedAt: 2024-08-29T14:57:36.770Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: nominal-taxes-gift-promotions-on-the-same-item-might-generate-checkout-errors
locale: pt
kiStatus: Backlog
internalReference: 1089066
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Atualmente, ao configurar um imposto nominal junto com promoções de presentes no mesmo item, o módulo de promoções, ao se comunicar com o aplicativo de checkout, pode gerar um arredondamento diferente do valor do imposto

## Simulação


A simulação desse tipo de problema é extremamente específica e difícil de replicar. Ela requer um conjunto de promoções de presentes aplicadas ao mesmo item e um imposto nominal.

Embora possa ser difícil reproduzir o comportamento, as etapas seriam as seguintes:

1 - Crie um imposto nominal para uma SKU específica, de preferência com um número ímpar (como 4,99); números pares podem não enfrentar esse problema.
2 - Crie uma promoção de presente para essa SKU
3 - Adicione um número par de SKUs ao carrinho
4 - tente fechar o pedido, uma tela de erro poderá ser exibida e o pedido não será fechado. Você pode ter certeza de que esse é o problema se, ao alterar a quantidade de itens no pedido, o problema desaparecer.

Observação: isso acontece para combinações muito específicas de (quantidade de itens no carrinho) + (valores de impostos) + (promoções de presentes)

## Workaround


Use um imposto percentual em vez disso, outros tipos de promoções além de presentes






