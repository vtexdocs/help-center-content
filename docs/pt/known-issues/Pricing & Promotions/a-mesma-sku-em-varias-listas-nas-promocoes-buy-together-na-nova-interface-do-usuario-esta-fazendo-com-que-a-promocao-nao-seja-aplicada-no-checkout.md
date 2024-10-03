---
title: "A mesma SKU em várias listas nas promoções 'Buy Together' na nova interface do usuário está fazendo com que a promoção não seja aplicada no checkout"
id: 4M9UZhQqkU4Tl07lyLPtMt
status: PUBLISHED
createdAt: 2024-09-03T10:55:07.063Z
updatedAt: 2024-09-10T12:15:48.590Z
publishedAt: 2024-09-10T12:15:48.590Z
firstPublishedAt: 2024-09-03T10:55:07.909Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: same-sku-in-multiple-lists-in-buy-together-promotions-on-the-new-ui-is-causing-the-promotion-to-not-apply-at-the-checkout
locale: pt
kiStatus: Fixed
internalReference: 1091209
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Há um problema na nova interface do usuário em que as promoções "Buy Together" permitem que a mesma SKU seja adicionada à Lista 1 e à Lista 2 sem nenhum aviso ou erro. Esse não é o uso pretendido do tipo de promoção, pois as promoções "Buy Together" foram projetadas para funcionar com SKUs distintas em cada lista. A configuração pode levar a comportamentos inesperados, como o fato de a promoção não ser aplicada corretamente no checkout.

## Simulação



1. Acesse o painel de administração da VTEX e verifique se você está usando a nova interface do usuário para o gerenciamento de promoções.
2. Crie uma promoção "Buy Together".
3. Adicione a mesma SKU à Lista 1 e à Lista 2.
4. Salve a promoção sem encontrar nenhum aviso ou erro.
5. Tente aplicar a promoção no checkout usando itens da Lista 1 e da Lista 2.



## Workaround


No momento, não há nenhuma solução alternativa disponível para esse problema na nova interface do usuário. Recomenda-se que os comerciantes evitem adicionar a mesma SKU a ambas as listas ao configurar promoções "Buy Together". Em vez disso, considere usar SKUs distintas para cada lista ou usar o tipo de promoção "More for Less" para obter resultados semelhantes sem conflitos.





