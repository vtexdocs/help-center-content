---
title: "O Split de Entrega não será exibido na IU ou em Meus Pedidos, quando o pedido tiver o mesmo 'Método de Envio'."
id: 2VnPyguau8KjpWx09C2vOW
status: PUBLISHED
createdAt: 2022-03-15T20:24:32.693Z
updatedAt: 2022-12-16T18:00:44.514Z
publishedAt: 2022-12-16T18:00:44.514Z
firstPublishedAt: 2022-03-15T20:24:32.967Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: the-delivery-split-will-not-be-displayed-in-the-ui-or-in-my-orders-when-the-order-has-the-same-shipping-method
locale: pt
kiStatus: Backlog
internalReference: 495352
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


A sugestão do pacote dividido não está funcionando corretamente, quando você termina a compra a IU sugere os pacotes divididos em casos de docas diferentes ou tamanhos diferentes e estratégias de embarque diferentes.
Atualmente a IU está apenas dividindo os pacotes de caixas com diferentes (Métodos de Embarque), mesmo no logistcsinfo tem diferentes canais de entrega e diferentes docas,


##

## Simulação


Faça um pedido com mais de um item, e estes itens precisam ter cada um um canal de entrega diferente, mas com o mesmo método de envio. A IU não irá sugerir a divisão de pacotes porque a "selectedSla" é como a variável mais significativa, ignorando as dockids para exame.

Exemplo:

Dois itens cada um com um "courierId".

ItemIndex:0

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Order Management/o-split-de-entrega-nao-sera-exibido-na-iu-ou-em-meus-pedidos-quando-o-pedido-tiver-o-mesmo-metodo-de-envio_1.png)


IntemIndex :1
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Order Management/o-split-de-entrega-nao-sera-exibido-na-iu-ou-em-meus-pedidos-quando-o-pedido-tiver-o-mesmo-metodo-de-envio_2.png)

A UI sugere isto como um pacote único:

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Order Management/o-split-de-entrega-nao-sera-exibido-na-iu-ou-em-meus-pedidos-quando-o-pedido-tiver-o-mesmo-metodo-de-envio_3.png)




##

## Workaround


A maneira de evitar isso é mudar o método delírio das estratégias de embarque.

PS.: Esta não é uma solução adequada, pois inclui comportamentos diferentes na saída da caixa.

