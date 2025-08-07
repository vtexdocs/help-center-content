---
title: 'Cómo integrar un proveedor externo de Tarjeta de Regalo a VTEX'
id: tutorials_450
status: PUBLISHED
createdAt: 2017-04-27T22:05:26.566Z
updatedAt: 2024-06-04T18:55:35.271Z
publishedAt: 2024-06-04T18:55:35.271Z
firstPublishedAt: 2017-04-27T23:03:24.938Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: how-to-integrate-an-external-gift-card-provider-with-vtex
locale: es
legacySlug: como-integrar-un-proveedor-externo-de-tarjeta-de-regalo-a-vtex
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX, una de las opciones para usar una tarjeta de regalo es que se utilice como un programa de créditos. 

En este contexto, hay algunos casos de clientes que ya trabajan con su propio proveedor. Este sistema gestiona su relación de créditos o puntos bajo una base de clientes que participan en un sistema de fidelización, por ejemplo.

Si el cliente desea integrar una solución externa de tarjetas de regalo al sistema VTEX, es necesario utilizar el [Giftcard Provider Protocol](https://developers.vtex.com/docs/api-reference/giftcard-provider-protocol).

## Desarrollo de provider

A través del [Giftcard Provider Protocol](https://developers.vtex.com/docs/api-reference/giftcard-provider-protocol), el proveedor externo de tarjetas de regalo debe desarrollar un [middleware](https://es.wikipedia.org/wiki/Middleware) para transmitir información entre su sistema y VTEX.

Para obtener más información sobre el sistema de tarjetas de regalo en VTEX, visite [Giftcard Hub](https://developers.vtex.com/docs/api-reference/giftcard-hub-api).

## Envío de información del endpoint 

Luego de crear el middleware, el proveedor debe abrir un [ticket](/es/support) en VTEX informando los endpoints que utilizarán los clientes para realizar transacciones de pago utilizando su sistema de tarjetas de regalo.
