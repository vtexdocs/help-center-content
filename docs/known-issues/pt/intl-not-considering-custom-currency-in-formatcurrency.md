---
title: Não considerando a moeda personalizada no formato
id: 6uzuilnzwSZ4oQBJqqoZmd
status: PUBLISHED
createdAt: 2023-01-19T15:45:59.663Z
updatedAt: 2023-01-19T15:46:00.490Z
publishedAt: 2023-01-19T15:46:00.490Z
firstPublishedAt: 2023-01-19T15:46:00.490Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: nao-considerando-a-moeda-personalizada-no-formato
kiStatus: Backlog
internalReference: 736695
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Em algumas lojas locais, o formatador Intl exibe o símbolo da moeda errada, não considerando o que passou pela cultura


https://github.com/vtex-apps/format-currency/blob/master/react/formatCurrency.ts


##

## Simulação


Estabelecer uma política comercial locale e uma moeda personalizada e chamar o formato da funçãoCurrency from format-currency, ela não será exibida corretamente porque a intl usa o locale para definir (acontece mais frequentemente no celular)


##

## Workaround


É possível implementar componentes de preço personalizados com um símbolo de moeda diferente.

