---
title: 'Obtener el IP de un pedido'
id: 3WSy36WlOEk8Oc6escGmEy
status: PUBLISHED
createdAt: 2019-01-24T20:45:49.278Z
updatedAt: 2021-09-21T16:38:08.036Z
publishedAt: 2021-09-21T16:38:08.036Z
firstPublishedAt: 2019-01-24T21:55:45.541Z
contentType: tutorial
productTeam: Post-purchase
author: authors_41
slugEN: how-to-capture-the-ip-of-an-order
legacySlug: obtener-ip-de-un-pedido
locale: es
subcategoryId: 3Gdgj9qfu8mO0c0S4Ukmsu
---

Para recuperar la IP de un cliente que realizó un pedido en su tienda, basta analizar la información del pago realizado, el cual informará dicho dato.

## Obtener la IP manualmente

Al abrir una ordén, haga clic en "Ver detalles de la transacción" en la caja de pagos:

![ip pedido1 ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Transactions/obtener-ip-de-un-pedido_1.png)

Finalmente, la IP se visualiza en la parte superior derecha:

![ip pedido2 ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Transactions/obtener-ip-de-un-pedido_2.png)

Ver más detalles en [Cómo visualizar detalle del pedido](/es/tutorial/como-visualizar-detalle-del-pedido)

## Obtener la IP por API
Para obtener la IP por integración, se podrá consultar la API Get Order mediante el orderID.

> ℹ️ [Ver documentación de API OMS](https://developers.vtex.com/reference/orders#getorder)

Una vez obtenido el Json de la Orden, se podrá obtener el transactionId y consultar la API **Get Transaction Details** mediante el ID de la transacción.

> ℹ️ [Ver documentación de API Transaction](https://developers.vtex.com/reference/transaction-process#transactiondetails)

Finalmente, de esta última llamada se podrá consultar el campo `ipAddress`.
