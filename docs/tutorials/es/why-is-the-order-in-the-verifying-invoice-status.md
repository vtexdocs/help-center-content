---
title: '¿Por qué el pedido se encuentra en el status "Verificando fatura"?'
id: 5VJjxRjeH6SimiG0Wkk2gm
status: DRAFT
createdAt: 2019-01-24T20:45:44.680Z
updatedAt: 2024-08-16T19:04:12.849Z
publishedAt: 
firstPublishedAt: 2019-01-24T21:53:54.764Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slug: por-que-el-pedido-se-encuentra-en-el-status-verificando-fatura
locale: es
legacySlug: por-que-el-pedido-se-encuentra-en-el-status-verificando-fatura
subcategory: 2t00bBkcAwIkgSCGKsMOwY
---


Hay dos casos en los que un pedido puede tener el status `Verificando factura`: 

* Cuando el pedido se ha facturado parcialmente, es decir, cuando la factura insertada no comprende el valor total del pedido. En este caso, puedes continuar con el flujo del pedido verificando si:
    * La factura introducida contiene solo una parte de los ítems del pedido. En este caso, hay que introducir las facturas que suman el valor total del pedido.
    * La factura contiene errores. En este caso, debes asegurarte de que la factura contiene la información correcta.
    * Hay un problema en la integración externa que está afectando al envío de la factura. En este caso debes enviar una nueva factura.
* Cuando el pago no se ha [liquidado](https://help.vtex.com/es/tutorial/configurar-tiempo-maximo-para-la-captura-automatica--7dwcaxrcgcFJUk7umqPBw2). En este caso, el pedido permanece con el status `Verificando factura` hasta que el _gateway_ confirme la liquidación. Si la liquidación no se produce, es necesario volver a realizar el pedido, ya que se trata de un problema del _gateway_ y no de la tienda. 

## Más información

Consulta los siguientes artículos para obtener más información:

* [Flujo del pedido](https://help.vtex.com/es/tutorial/flujo-de-pedido-en-el-oms--tutorials_196);
* [Insertar factura en el pedido](https://help.vtex.com/es/tutorial/como-insertar-la-nota-fiscal--tutorials_193);
