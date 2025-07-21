---
title: 'Abas de "Receber | Retirar" são exibidas apenas de acordo com a disponibilidade no CEP buscado'
id: 5PVGReAvyE0AOcoIq2SeKS
status: PUBLISHED
createdAt: 2018-11-21T16:19:00.507Z
updatedAt: 2022-12-22T20:43:11.612Z
publishedAt: 2022-12-22T20:43:11.612Z
firstPublishedAt: 2018-11-21T16:49:24.622Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: abas-de-receber-retirar-sao-exibidas-apenas-de-acordo-com-a-disponibilidade-no-cep-buscado
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Atualmente, o cenário de exibição das opções "Receber | Retirar" é condicionado ao CEP buscado em qualquer uma das abas. Isso significa que, se na aba de "Receber" for buscado um CEP que não é atendido por um ponto de retirada, a aba "Retirar" não será exibida ao usuário.


![Captura de Tela 2018-11-21 às 14.25.40](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Shopping/abas-de-receber-retirar-sao-exibidas-apenas-de-acordo-com-a-disponibilidade-no-cep-buscado_1.png) 

## Simulação


1. Na finalização de compra, avance ao passo de "Entrega";
2. Na aba "Receber", busque por um CEP que não é atendido por nenhum ponto de retirada;
3. Perceba que a aba "Retirar" não é exibida.


## Workaround

A solução paliativa se dá pela personalização do CSS, forçando a exibição da classe, conforme exemplo abaixo:

    .shipping-method-wrapper{display:block}

