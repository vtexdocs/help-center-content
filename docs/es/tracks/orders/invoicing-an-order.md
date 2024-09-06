---
title: 'Facturar un pedido'
id: 2WgQrlHTyVo4hLjhUs1LMT
status: PUBLISHED
createdAt: 2019-11-14T16:05:32.413Z
updatedAt: 2023-03-21T20:52:23.012Z
publishedAt: 2023-03-21T20:52:23.012Z
firstPublishedAt: 2019-11-18T12:20:37.060Z
contentType: trackArticle
productTeam: Post-purchase
slug: facturar-un-pedido
locale: es
trackId: 2xkTisx4SXOWXQel8Jg8sa
trackSlugES: pedidos
---

Introducir la factura en el pedido es un paso obligatorio para que su estado cambie a `Facturado`, una señal de que el pedido se ha completado con éxito. Recuerde que una vez que se lee un pedido como facturado por el sistema, este estado no se puede cambiar.

La facturación de un pedido puede hacerse de dos formas:
- __Manualmente__: en el *Admin VTEX > Pedidos > Todos los pedidos*, haciendo clic en el pedido y depués en el botón `Facturar`. Sepa más en [Facturar un pedido manualmente](https://help.vtex.com/en/tutorial/faturar-um-pedido-manualmente--7p1h852V5t54KyscpgxE2v).

- __Mediante API__: si tienes una integración con el ERP, utilizando el request [Order invoice notification](https://developers.vtex.com/vtex-rest-api/reference/invoice).  

## Cambiando el status para Facturado

Solo después de alcanzar el valor total del pedido, el estado cambiará a `Facturado`, es decir, cuando el valor del pedido coincide con el valor facturado. Existen trés escenarios posibles para facturación, dependendo de la situación del pedido:

- __Pedido sin cambios:__ deberás ingresar una factura con un valor equivalente al total del pedido.    
- __Pedido modificado > descontando el importe > seguido de una factura aparte__: deberás ingresar una factura con el importe restante tras el cambio. La nota puede ser [parcial](https://help.vtex.com/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) o completa, si contiene todo el valor restante, después del cambio.    
- __Pedido con factura parcial > seguido de cambio con descuento__: deberás realizar un [cambio](https://help.vtex.com/es/tutorial/changing-items-from-a-complete-order--tutorials_190), descontando el importe restante. Para ello, calcule el importe total menos el importe parcial de la factura.  

## Factura

La factura requiere atención a los siguientes puntos:
- __Número de factura__: este número debe ser único por factura por pedido, porque si ingresa dos facturas con el mismo número, el sistema lo entenderá como un cambio de factura.
- __Número de rastreo__: este número, junto con la URL de rastreo, permite el seguimiento de la entrega por parte del cliente a través de emails que se envían con cada cambio en ese rastreo.
- __Código de acceso__: esta es la clave de acceso para la consulta de NF-e (factura electrónica) en Internet. Este campo debe completarse solo para casos de facturas electrónicas.

Cuando se ingresa la URL y el código de rastreo, con cada actualización del estado de entrega, el cliente recibirá un email notificándole que la entrega ha avanzado.

El Conversation Tracker, el sistema que administra los emails intercambiados con el cliente, depende de ingresar algún valor en este campo. Si no tiene un número de rastreo, simplemente ingrese cualquier valor para activar el sistema de notificación.

También puede introducir la factura a través de la [API de pedidos](https://developers.vtex.com/vtex-rest-api/reference/invoice).

