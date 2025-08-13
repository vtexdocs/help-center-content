---
title: 'Como identificar split de pedidos do omnichannel'
id: 5LuhsjJkEEqU0uysEuIUQO
status: PUBLISHED
createdAt: 2018-06-19T06:52:10.893Z
updatedAt: 2023-03-29T18:34:26.061Z
publishedAt: 2023-03-29T18:34:26.061Z
firstPublishedAt: 2019-01-25T17:29:55.002Z
contentType: tutorial
productTeam: Shopping
author: authors_35
slugEN: how-to-identify-an-order-split-from-omnichannel
legacySlug: como-identificar-split-de-pedidos-do-omnichannel
locale: pt
subcategoryId: 3VNOhxDrvYxJThhuJClrYZ
---

Lojas que atuam com estratégias de [Comércio Unificado](https://help.vtex.com/pt/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv) e arquitetura omnichannel precisam gerenciar pedidos junto a sua conciliação financeira. O módulo **Pedidos** e a solução [Split de pagamento](https://help.vtex.com/pt/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx) permitem que o pedido de uma loja seja dividido entre múltiplos sellers, o que é chamado split de pedidos.

É possível saber se foi feito split de pedido por meio do código identificador do pedido. Existem dois formatos de código para a loja atuando como [marketplace](https://help.vtex.com/pt/tutorial/configurar-marketplace-vtex--7splyp5MqIyt2Iyz5jsNzb):

- Sequência numérica composta de 12 dígitos. Exemplo: `527103869572`.
- Sequência alfanumérica, por padrão, composta da letra "v", seguida de seis dígitos numéricos e quatro letras. Exemplo: `v527103anml`.

Quando é feito o split do pedido, um sufixo é adicionado ao código, como `-01` ou `-02`. Cada número representa um seller, sendo que a contagem começa a partir de um e é feita de forma crescente.

> Exemplo: no ambiente do marketplace, o código do pedido com divisão é `527103869572-01` ou `v527103anml-01`. 

> ℹ️ O pedido realizado no marketplace tem um código identificador no ambiente dos sellers. Cada seller tem acesso restrito à sua própria parte do pedido e não dispõe de qualquer acesso aos pedidos de outros sellers.

O código identificador do pedido no ambiente do seller tem como base a mesma sequência usada no marketplace, com a adição do prefixo correspondente ao [ID do afiliado](https://help.vtex.com/pt/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0), o código de três consoantes que identifica o seller no marketplace.

> Exemplo: o código do pedido no marketplace é `v527103anml-01`, portanto no ambiente do seller ele corresponde a `SLR-v527103anml-01`.

Pode ser que algumas lojas com [integrações com ERP](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-guide) e outros sistemas necessitem de configurações adicionais ou customização para receberem informações de split de pedidos. Se a loja tiver acesso ao ambiente do marketplace e do seller, as informações podem ser acessadas via [API](https://developers.vtex.com/vtex-rest-api/reference/listorders). 

## Saiba mais

- [Cuidados ao definir a numeração de pedido](https://help.vtex.com/pt/tutorial/cuidados-ao-definir-a-numeracao-de-pedido--VAKKptfcaOxFxM8gfPobu)
