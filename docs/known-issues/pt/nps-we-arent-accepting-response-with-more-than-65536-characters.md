---
title: 'NPS - não estamos aceitando resposta com mais de 65536 caracteres'
id: 11XAxAg1dG2aKQc9lzRsfp
status: PUBLISHED
createdAt: 2022-03-03T18:45:54.398Z
updatedAt: 2022-11-25T22:05:24.116Z
publishedAt: 2022-11-25T22:05:24.116Z
firstPublishedAt: 2022-03-03T18:45:54.787Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: nps-nao-estamos-aceitando-resposta-com-mais-de-65536-caracteres
locale: pt
kiStatus: Backlog
internalReference: 317389
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Não estamos aceitando resposta NPS com mais de 65536 caracteres



## Simulação


Faça uma compra com mais de 223 itens usando o conector NPS. O gateway não suporta pedidosLista tão longa e mostra esta mensagem:

Mensagem: Erro desconhecido no AutoSettleA quota máxima de tamanho de mensagem para mensagens recebidas (65536) foi excedida. Para aumentar a cota, use a propriedade MaxReceivedMessageSize no elemento de ligação apropriado.



## Workaround


Não há solução.

