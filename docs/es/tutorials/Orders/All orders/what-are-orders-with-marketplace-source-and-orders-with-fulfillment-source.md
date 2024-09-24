---
title: 'Diferencia entre pedidos con origen marketplace y fulfillment'
id: 6eVYrmUAwMOeKICU2KuG06
status: ARCHIVED
createdAt: 2019-01-24T21:38:41.397Z
updatedAt: 2022-08-29T22:43:03.531Z
publishedAt: 
firstPublishedAt: 2019-01-24T21:38:41.806Z
contentType: tutorial
productTeam: Others
author: authors_24
slug: que-son-pedidos-con-origen-marketplace-y-origen-fulfillment
locale: es
legacySlug: que-son-pedidos-con-origen-marketplace-y-origen-fulfillment
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

Al acceder la sección __Todos los pedidos__, en __Gestión de pedidos__, es posible ver y rastrear los pedidos realizados en su tienda a través de la [lista de pedidos](https://help.vtex.com/es/tutorial/listado-de-pedidos/). 

La columna __Origin__ indica de dónde proviene los pedidos, distinguiéndo ellos entre en dos posibles orígenes: __Marketplace__ y __Fulfillment__.

![orders-list-origin-es](//images.ctfassets.net/alneenqid6w5/1rflCsjI1vIGnb7juYOJJa/8e060cea0849e422a060526bf2fe81e2/oders-list-origin-es.png)

## Marketplace

Para VTEX, una tienda actúa como marketplace cuando el pedido se realiza directamente en ella - es decir, cuando la tienda recibe el pago y inicia el ciclo del pedido.

Por lo tanto, el origen de un pedido está indicado como __Marketplace__ cuando ese pedido se hizo directamente a su tienda, o sea, fue su tienda que recibió y procesó el pago.

Son posibles dos escenarios:

- Su tienda, además de haber recibido el pago, hará la entrega. Es decir, ella actúa como marketplace (porque recibió el pago) y también como seller (porque es responsable de todo el ciclo del pedido, desde el procesamiento del pago hasta la entrega).
- Su tienda sólo recibe el pago - la entrega es hecha por un seller integrado a su tienda.

En cualquiera de esos dos casos, el origen del pedido aparece como __Marketplace__.

## Fulfillment

Para VTEX, una tienda actúa como seller cuando ella debe cumplir con la obligación de realizar la entrega del producto al cliente.

El origen de un pedido está indicado como __Fulfillment__ cuando su tienda actúa como seller en el pedido, o sea, cuando el pago fue procesado en otra tienda (el marketplace) y su tienda se responsabiliza sólo por la entrega de los productos del pedido.
