---
title: 'Comprar juntos promoções com impacto de restrição de faixa de preço em promoções de presentes'
id: 6tjViVNzlWgfLOLsUEtYSF
status: PUBLISHED
createdAt: 2022-10-11T19:54:05.862Z
updatedAt: 2022-11-25T22:11:38.748Z
publishedAt: 2022-11-25T22:11:38.748Z
firstPublishedAt: 2022-10-11T19:54:06.433Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: comprar-juntos-promocoes-com-impacto-de-restricao-de-faixa-de-preco-em-promocoes-de-presentes
locale: pt
kiStatus: Backlog
internalReference: 676382
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



Para que este cenário aconteça, é necessário definir o seguinte:

1. Criar uma promoção Buy together com uma restrição de faixa de preço, como o valor do preço mínimo.
2. Crie uma promoção de presente.
3. O presente na segunda promoção deve ser um dos produtos da Buy Together na primeira promoção.

Quando isto é definido, quando o cliente está na caixa tentando adicionar a promoção de presentes, ele recebe um erro:

    message="Ocorreu um erro de comunicação com o Tarifas e Benefícios"


Isto acontece porque agora o sistema está tentando reconhecer a restrição da faixa de preço quando não deveria.



## Simulação


Recriar as etapas mencionadas acima.
PS: cenários relacionados - https://help.vtex.com/known-issues/regular-promotion-using-gift-conflicts-with-value-filters-on-the-cart--oUDvaZPL0fjbN3v18QQIM



## Workaround


Eliminar a restrição da faixa de preço da promoção Buy Together.

