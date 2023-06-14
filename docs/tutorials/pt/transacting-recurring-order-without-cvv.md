---
title: 'Transacionar pedido recorrente sem CVV'
id: iYJ5L8LsiIu0oEkQeE4aC
status: DRAFT
createdAt: 2017-10-29T16:22:22.783Z
updatedAt: 2020-02-11T20:42:59.946Z
publishedAt: 
firstPublishedAt: 2017-10-29T16:29:02.503Z
contentType: tutorial
productTeam: Others
author: authors_39
slug: transacionar-pedido-recorrente-sem-cvv
locale: pt
legacySlug: transacionar-pedido-recorrente-sem-cvv
subcategory: 1rA9wuuskW3PpjvMrhatAM
---

A transação sem CVV pode ser feita simplesmente passando a informação de que a transação não necessita de CVV. Com isso, ela é feita apenas com os dados gerais do cartão e do comprador, que ficam salvos no Pagamentos. Exemplos de adquirentes que usam esse modelo são Cielo e Redecard.

Por ambas maneiras apresentadas, uma vez que o Pagamentos não guarda o CVV do cliente, mantemos a segurança certificada PCI DSS.

Um ponto importante é que todas as compras de recorrência, independentemente do modelo, são geradas apenas internamente na comunicação entre OMS e Pagamentos, e efetuadas inteiramente por API. 

Isso impede qualquer falha de segurança externa, pois trata-se de uma chamada autenticada. 

Caso algum usuário tente efetuar qualquer tipo de transação de outra forma, seja pela loja online ou por outros meios, será requisitado o CVV, e o pedido não será registrado como recorrente.
