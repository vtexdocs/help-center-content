---
title: "Formato incorreto do endereço nos endereços de cobrança 'Meus Cartões"
id: 25QxVtMOazrxugHZqFrhSG
status: PUBLISHED
createdAt: 2023-04-17T17:40:24.795Z
updatedAt: 2023-04-17T17:40:25.411Z
publishedAt: 2023-04-17T17:40:25.411Z
firstPublishedAt: 2023-04-17T17:40:25.411Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: formato-incorreto-do-endereco-nos-enderecos-de-cobranca-meus-cartoes
locale: pt
kiStatus: Backlog
internalReference: 791779
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Ao adicionar um novo endereço de cobrança no vtex.my-cards, o formato incorreto do endereço é exibido. Isto acontece quando o usuário está tentando adicionar um novo cartão de crédito, e ocorre somente quando o novo endereço que o usuário está tentando digitar é de um país diferente. O que acontece, por exemplo, é que o usuário escolhe um novo endereço dos EUA, enquanto os outros são do Canadá, todos os endereços do Canadá serão formatados como um endereço dos EUA.


##

## Simulação


1. Clique em "Adicionar um novo cartão" na página do cartão de crédito
2. Escolha um endereço diferente na seção "Endereço para faturamento do cartão".
3. Quando escolhemos um endereço canadense, todos os endereços são exibidos como Canadá, mesmo que seja um endereço dos EUA.
4. Quando escolhemos o endereço dos EUA, todos os endereços são exibidos como EUA, mesmo que seja canadense.


##

## Workaround


N/A





