---
title: 'O fluxo de revisão de endereço está removendo informações essenciais de endereço'
id: 416pFRk6KsWIfgPr8pzWii
status: PUBLISHED
createdAt: 2022-08-11T18:33:49.548Z
updatedAt: 2024-02-16T20:23:20.195Z
publishedAt: 2024-02-16T20:23:20.195Z
firstPublishedAt: 2022-08-11T18:33:50.049Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: address-review-flow-is-removing-essential-address-information
locale: pt
kiStatus: No Fix
internalReference: 618756
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


A validação do endereço no modo de geolocalização (endereço inserido via Google Maps) está removendo informações essenciais, como a rua e o número, de endereços válidos, afetando o fluxo de compras.

O botão "calculate shipping", usado para validação de endereço no modo de geolocalização (endereço inserido via Google Maps), está sendo mostrado mesmo para endereços completos. Ele deve ser mostrado apenas para endereços editados - devido a informações alteradas ou endereços incompletos no primeiro momento - para garantir que eles sejam válidos, mas não para endereços completos.



## Simulação



- Em uma loja que está usando o modo de geolocalização, inserir um endereço incompleto (sem o número, como exemplo)
- Preencher os campos em falta (número)
- Ele mostrará o botão "calculate shipping", que validará o endereço editado ao longo do Google Maps para garantir as geocoordenadas.

Neste momento, o checkout pode ir para a etapa de seleção de embarque, mas o endereço pode perder informações.

Isso pode não acontecer para todos os países ou endereços.



## Workaround


N/A

