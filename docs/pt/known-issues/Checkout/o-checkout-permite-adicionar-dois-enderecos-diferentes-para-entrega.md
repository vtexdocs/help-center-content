---
title: 'O checkout permite adicionar dois endereços diferentes para entrega'
id: 2z7iq68qdHXAfY8RLDHXDg
status: PUBLISHED
createdAt: 2023-11-06T22:03:24.983Z
updatedAt: 2023-11-07T21:28:43.164Z
publishedAt: 2023-11-07T21:28:43.164Z
firstPublishedAt: 2023-11-06T22:03:25.472Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-allows-to-add-2-different-addresses-for-delivery
locale: pt
kiStatus: Backlog
internalReference: 931225
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


O checkout permite adicionar dois endereços diferentes para entrega no formulário de pedido, por exemplo, um "comercial" e um "residencial" (definido pelo campo "addressType"), quando um deles é descartável.

Quando ambos os endereços forem selecionados, haverá um erro de mensagem "Unable to communicate with seller" (Não é possível se comunicar com o vendedor), e o comprador não poderá prosseguir para as próximas etapas.

## Simulação



- Enviar um novo endereço via API Adicionar endereço de entrega e selecionar a opção de entrega;
- Adicionar um cliente que já tenha um perfil completo via API Adicionar perfil de cliente.



## Workaround


N/A




