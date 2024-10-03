---
title: 'Transacionar pedido recorrente por tokenização do cartão'
id: ONKkNx2M8KQOcCYySOm6S
status: ARCHIVED
createdAt: 2017-10-29T16:22:10.308Z
updatedAt: 2020-02-11T15:10:58.194Z
publishedAt: 
firstPublishedAt: 2017-10-29T16:26:41.089Z
contentType: tutorial
productTeam: Post-purchase
author: authors_39
slugEN: transacting-recurring-order-through-card-tokenization
locale: pt
legacySlug: transacionar-pedido-recorrente-por-tokenizacao-do-cartao
subcategoryId: 1rA9wuuskW3PpjvMrhatAM
---

A tokenização do cartão funciona da seguinte forma: ao fechar a primeira compra sinalizando recorrência, o Pagamentos se comunica com a adquirente, que guarda os dados do cartão e cria um token. Este token retorna para o Pagamentos, e nesse momento a VTEX salva essa informação. 

Toda vez que transacionarmos passando esse mesmo token, a adquirente entenderá que trata-se de uma recorrência e não solicitará os dados do cartão novamente, pois eles já estarão salvos em sua base. Exemplos de adquirentes que usam esse modelo são Braspag e Adyen.
