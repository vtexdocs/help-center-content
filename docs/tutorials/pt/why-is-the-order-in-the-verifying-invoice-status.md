---
title: 'Por que o pedido está no status "Verificando fatura"?'
id: 5VJjxRjeH6SimiG0Wkk2gm
status: PUBLISHED
createdAt: 2019-01-24T20:45:44.680Z
updatedAt: 2022-07-19T13:18:05.248Z
publishedAt: 2022-07-19T13:18:05.248Z
firstPublishedAt: 2019-01-24T21:53:54.764Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slug: por-que-o-pedido-esta-no-status-verificando-fatura
locale: pt
legacySlug: por-que-o-pedido-esta-no-status-verificando-fatura
subcategory: 2t00bBkcAwIkgSCGKsMOwY
---


Há dois casos em que um pedido entra no status `Verificando fatura` : 

* Quando o pedido foi faturado parcialmente, ou seja, quando a nota fiscal inserida não compreende o valor total do pedido. Nesse caso, é possível dar continuidade ao fluxo do pedido verificando se:
    * A nota inserida contém apenas uma parte dos itens do pedido. Nesse caso, é preciso inserir as notas fiscais que totalizam o valor total do pedido.
    * A nota fiscal contém erros. Nesse caso é preciso garantir que a nota fiscal contém as informações corretas.
    * Há um problema na integração externa que está afetando o envio da nota fiscal. Neste caso você deve enviar uma nova nota fiscal.
* Quando o pagamento não foi [liquidado](https://help.vtex.com/pt/tutorial/configurar-tempo-maximo-para-captura-automatica--7dwcaxrcgcFJUk7umqPBw2). Nesse caso o pedido permanece com o status `Verificando fatura` até que o gateway confirme a liquidação. Se não ocorrer a liquidação, é preciso refazer o pedido, pois é um problema do gateway e não da loja. 

## Saiba mais

Consulte os artigos abaixo para saber mais:

* [Fluxo de pedido](https://help.vtex.com/pt/tutorial/fluxo-de-pedido--tutorials_196);
* [Inserir nota fiscal no pedido](https://help.vtex.com/pt/tutorial/como-inserir-a-nota-fiscal--tutorials_193).
