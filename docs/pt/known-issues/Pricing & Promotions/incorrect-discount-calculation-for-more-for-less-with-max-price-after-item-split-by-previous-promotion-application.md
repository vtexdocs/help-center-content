---
title: "Cálculo de desconto incorreto para 'Mais por menos' com preço máximo após a divisão do item pelo aplicativo de promoção anterior"
id: 6ZiiHgNADTxZDpE9wu6EkJ
status: PUBLISHED
createdAt: 2024-09-06T14:21:14.890Z
updatedAt: 2024-09-07T01:50:37.471Z
publishedAt: 2024-09-07T01:50:37.471Z
firstPublishedAt: 2024-09-06T14:21:16.136Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: calculo-de-desconto-incorreto-para-mais-por-menos-com-preco-maximo-apos-a-divisao-do-item-pelo-aplicativo-de-promocao-anterior
locale: pt
kiStatus: Backlog
internalReference: 1093789
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Ocorre um erro ao empilhar uma promoção Comprar juntos ou qualquer promoção que divida itens com uma promoção Mais por menos configurada para dar um desconto de preço máximo, o que leva a cálculos de desconto incorretos. O problema decorre das diferenças de preço entre os itens divididos, fazendo com que a segunda promoção aplique descontos imprecisos em vários SKUs.
Além disso, ocorre um efeito colateral em que o desconto calculado da segunda promoção é aplicado a todas as SKUs qualificadas, sem considerar o número máximo de itens especificado na configuração da promoção Mais por Menos.

## Simulação



1. Crie uma promoção _Buy Together_ que aplique um desconto percentual a uma SKU.
2. Crie uma promoção _Mais por menos_ com um desconto de preço máximo que aplique um desconto à mesma SKU.
3. Adicione itens ao carrinho que atendam às condições de ambas as promoções.
4. Observe que a promoção _Buy Together_ é aplicada corretamente.
5. Quando a promoção _Mais por menos_ tenta ser aplicada, o sistema calcula o desconto com base em um grupo dividido de SKUs e aplica o desconto de forma imprecisa a todos os itens dessa SKU.
_Nota_: O problema pode ocorrer devido a outros fatores que causam divisões de itens, não apenas da primeira promoção

## Workaround


N/A





