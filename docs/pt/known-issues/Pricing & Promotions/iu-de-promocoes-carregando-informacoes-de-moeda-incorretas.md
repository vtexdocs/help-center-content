---
title: 'IU de promoções carregando informações de moeda incorretas'
id: 7liSZOtS1Hs2P84bXzRrG9
status: PUBLISHED
createdAt: 2022-12-19T14:41:51.129Z
updatedAt: 2024-02-15T12:11:06.893Z
publishedAt: 2024-02-15T12:11:06.893Z
firstPublishedAt: 2022-12-19T14:41:51.903Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: promotions-ui-loading-wrong-currency-information
locale: pt
kiStatus: Fixed
internalReference: 718908
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Ao abrir o módulo Promoções muito rapidamente e várias vezes seguidas, um comportamento incorreto aparece na interface do usuário.

O campo "Restrict this promotion to seller products" (Restringir esta promoção a produtos do vendedor) não carrega o espaço reservado correto, mas sim o espaço reservado "GLOBAL SELECT-A-SELLER..." (Selecionar um vendedor global).

As informações de moeda são carregadas como R$ (real)

Ao salvar a promoção, o valor final não é o esperado pelo cliente.

## Simulação


Não há uma maneira fácil de reproduzir esse cenário. Às vezes, ao abrir o módulo de promoções em guias diferentes muito rapidamente, o comportamento acontece.
Verifique se o campo "Restrict this promotion to seller products" (Restringir esta promoção a produtos do vendedor) está diferente para saber se você alcançou o cenário

## Workaround


Feche a IU de promoções atual e abra uma nova em que o comportamento não esteja ocorrendo.





