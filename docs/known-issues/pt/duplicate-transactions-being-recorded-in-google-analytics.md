---
title: Transações registradas em duplicidade no Google Analytics
id: 3pBn0BG1cAAqkw6CMEywIs
status: PUBLISHED
createdAt: 2018-11-20T16:44:40.811Z
updatedAt: 2022-12-22T20:54:51.124Z
publishedAt: 2022-12-22T20:54:51.124Z
firstPublishedAt: 2018-11-20T17:05:24.189Z
contentType: knownIssue
productTeam: Post-purchase
author: authors_4
tag: Checkout
slug: transacoes-duplicadas-no-google-analytics
kiStatus: Backlog
internalReference: 
---

## Sumário

As transações são registradas no Google Analytics com base na página de pedido confirmado (_orderPlaced_). Quando o cliente chega à página um evento é enviado ao _Data Layer_, de modo que o Google Tag Manager capta este evento e aciona o script do Google Analytics.

Caso o cliente acesse essa página repetidas vezes, ou mesmo recarregue/atualize a página, o evento será acionado e os dados serão enviados novamente ao Google Analytics, criando informações repetidas.

## Simulação

1. Fechar um pedido na loja;
2. Acessar a página de pedido confirmado repetidas vezes;
3. Observar que estes vários acessos foram registrados como pedidos concluídos no Google Analytics.

## Workaround

Não existe uma solução de contorno neste formato de integração.

Uma possibilidade é não fazer a integração de transações via frontend, com o GTM/Javascript, e trabalhar com uma integração de backend (middleware) entre as APIs de pedidos da VTEX e as APIs de transção do Google Analytics.

