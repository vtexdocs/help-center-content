---
title: 'Promoções UI carregando informações erradas sobre moeda'
id: 7liSZOtS1Hs2P84bXzRrG9
status: PUBLISHED
createdAt: 2022-12-19T14:41:51.129Z
updatedAt: 2022-12-19T14:41:51.903Z
publishedAt: 2022-12-19T14:41:51.903Z
firstPublishedAt: 2022-12-19T14:41:51.903Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: promocoes-ui-carregando-informacoes-erradas-sobre-moeda
locale: pt
kiStatus: Backlog
internalReference: 718908
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Ao abrir o módulo Promoções muito rapidamente e muitas vezes em uma fila, um comportamento errado aparece na IU.

O campo "Restringir esta promoção aos produtos do vendedor" não carrega o lugar correto, em vez disso carrega o lugar correto "GLOBAL SELECT-A-SELLLER...".

A informação da moeda é carregada como R$ (real)

Ao salvar a promoção, o valor final não é o esperado pelo cliente.


##

## Simulação



Não há uma maneira fácil de reproduzir este cenário. Às vezes, ao abrir o módulo de promoções em diferentes abas muito rapidamente, o comportamento acontece.
Verifique se o campo "Restringir esta promoção aos produtos do vendedor" é diferente para saber se você chegou ao cenário.


##

## Workaround



Feche a atual UI de promoções e abra uma nova onde o comportamento não esteja acontecendo.

