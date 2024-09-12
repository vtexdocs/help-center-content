---
title: 'A promoção de frete grátis não se aplica devido ao fato de o valor mínimo ou máximo ser baseado no preço unitário em vez do valor total do item'
id: 2eti6qau2VXzuBBU8Us25V
status: PUBLISHED
createdAt: 2024-08-15T13:48:35.886Z
updatedAt: 2024-08-15T13:48:36.853Z
publishedAt: 2024-08-15T13:48:36.853Z
firstPublishedAt: 2024-08-15T13:48:36.853Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: a-promocao-de-frete-gratis-nao-se-aplica-devido-ao-fato-de-o-valor-minimo-ou-maximo-ser-baseado-no-preco-unitario-em-vez-do-valor-total-do-item
locale: pt
kiStatus: Backlog
internalReference: 1081841
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


A promoção de frete grátis com um valor mínimo ou máximo de pedido está considerando incorretamente o valor do item por unidade em vez do valor total do item, levando a inconsistências na aplicação da promoção.

## Simulação



1. Configure uma promoção de frete grátis com um limite mínimo de valor de carrinho.
2. Adicione um produto ao carrinho cujo preço seja baseado em um multiplicador de unidades (por exemplo, preço por quilograma) em vez de um preço fixo.
3. Certifique-se de que o valor total dos itens no carrinho exceda o valor mínimo necessário para que a promoção seja aplicada. Entretanto, o valor real do item, considerando o multiplicador de unidades, deve fazer com que o valor total do carrinho seja menor do que o requisito mínimo da promoção.
4. Verifique se a promoção não se aplica quando o valor total do carrinho excede o mínimo exigido devido ao multiplicador de unidades do item.



## Workaround


Atualmente, não há nenhuma solução alternativa disponível para esse problema.





