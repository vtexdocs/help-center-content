---
title: 'Alterar pedidos já finalizados'
id: 3d1XLIgPQcwaKGyMiWaYog
status: DRAFT
createdAt: 2017-11-08T14:04:58.922Z
updatedAt: 2021-05-11T21:20:45.295Z
publishedAt: 
firstPublishedAt: 2017-11-08T14:08:29.393Z
contentType: tutorial
productTeam: Post-purchase
author: authors_35
slug: change-mudanca-em-pedidos
legacySlug: change-mudanca-em-pedidos
subcategory: 2t00bBkcAwIkgSCGKsMOwY
---

Lidar com eventuais mudanças nas compras após um pedido ter sido finalizado pelo cliente tem sido um problema recorrente no mercado online, principalmente considerando a área de grocery. Essas mudanças podem ocorrer por diversos motivos como, por exemplo, fim do estoque de um determinado item, mudanças nas medições originais, reposição de item por um similar, descontos por eventuais transtornos, etc.

Para suprir a esse tipo de demanda, a VTEX disponibiliza para o lojista a funcionalidade __Change__, a qual permite criar descontos, alterar itens e/ou aumentar preço.

A funcionalidade Change é permitida nos status Handling, Waiting for fulfillment ou Ready for Invoicing e pode ser dividida em três partes:

1. Alteração de item: permite a remoção e adição de SKU. Porém, fica a cargo do lojista atualização de estoque e reserva.
2. Criação de desconto: permite o cancelamento de um determinado valor das transações existentes no pedido.
3. Adição de preço: cria uma nova transação com o valor adicional sem parcelamento. Essa funcionalidade está restrita apenas à compras com cartão de crédito. O conector também deve suportar compras sem uso de CVV, além de sequences duplicados.

Essa funcionalidade está 100% disponível via [API](https://developers.vtex.com/reference/orders#registerchange). Via interface o módulo de Gerenciamento de pedidos atualmente não permite a adição de preço.

