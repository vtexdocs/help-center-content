---
title: 'O checkout não exibe a promoção de frete no primeiro instante para uma condição específica'
id: 14rQaM53csQQeA1wu5lRj8
status: PUBLISHED
createdAt: 2022-05-20T17:46:10.644Z
updatedAt: 2024-01-15T14:35:39.473Z
publishedAt: 2024-01-15T14:35:39.473Z
firstPublishedAt: 2022-05-20T17:46:11.046Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: o-checkout-nao-exibe-a-promocao-de-frete-no-primeiro-instante-para-uma-condicao-especifica
locale: pt
kiStatus: No Fix
internalReference: 280144
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


O checkout (backend) tem o comportamento de pré-selecionar o melhor método de entrega para o usuário assim que um código postal é informado.

As promoções que usam a restrição "Aplicar o desconto somente quando uma das transportadoras acima for selecionada pelo cliente", na verdade, só são aplicadas depois que o cliente escolhe o método de entrega específico.

Ocorre que, se a opção de entrega selecionada automaticamente no checkout se enquadrar em alguma promoção com a restrição acima, o desconto não será aplicado (a opção mencionada é a que diz "Aplicar o desconto somente quando uma das transportadoras acima for selecionada pelo cliente").

Isso só ocorre em um primeiro momento, pois o checkout não recalcula as promoções ao fazer essa escolha automática de entrega. Isso ocorre porque, se você recalcular as promoções, eventualmente a melhor opção de entrega pode ser diferente, e isso deixaria o sistema em um loop, sempre procurando a melhor opção. Na atualização futura do orderForm, todo o seu contexto é recalculado, dessa vez com a forma de entrega realmente selecionada, e então a promoção será aplicada.

Além desse fato, a simulação de envio do carrinho (shipping-preview) faz solicitações adicionais à API, não utilizando apenas o contexto do orderForm. Isso faz com que ele receba a promoção, enquanto os totais do carrinho ficam restritos ao contexto do orderForm, que ainda não tem a promoção, resultando em valores divergentes.

## Simulação


- ter uma promoção de frete grátis restrita a uma opção "A" e com a opção adicional acima ativada
- tenha um carrinho e um CEP com dois ou mais tipos de frete, em que "A" é o frete mais barato (exemplo, A = R$10; B = R$20)
- digite o código postal e observe que "A" (o mais barato) será selecionado automaticamente, mas ainda aparecerá como R$10
- selecione o frete "B" (R$ 20) e retorne ao frete "A" (R$ 10)
- nesse momento, o valor de "A" será recalculado e será exibido como gratuit

## Workaround


Não é recomendável usar essa restrição em promoções de frete.





