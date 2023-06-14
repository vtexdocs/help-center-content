---
title: 'O cartão-presente Native está adicionando crédito, embora retorne 500'
id: 1EngiQGhpPorgURRsszMX4
status: PUBLISHED
createdAt: 2023-02-27T20:40:44.824Z
updatedAt: 2023-05-11T16:25:34.547Z
publishedAt: 2023-05-11T16:25:34.547Z
firstPublishedAt: 2023-02-27T20:40:45.470Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: o-cartaopresente-native-esta-adicionando-credito-embora-retorne-500
locale: pt
kiStatus: Backlog
internalReference: 760896
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Depois de realizar alguns testes empíricos, observamos que a rota /transaction na API nativa de cartão-presente às vezes retorna um código de erro 500 ao adicionar o crédito solicitado, o que é um comportamento inesperado. Além disso, notamos que a solicitação está demorando mais do que o esperado para receber uma resposta, indicando um comportamento de tempo limite. Como resultado, não há um bloqueio eficaz para garantir que o saldo do cartão não seja creditado nesse cenário.

## Simulação


Comportamento intermitente.



## Workaround


N/A





