---
title: 'La solicitud de liquidación de las órdenes no tiene en cuenta el valor de los intereses'
id: 149FG86c1f7sok1NJ7PWAQ
status: PUBLISHED
createdAt: 2024-11-05T17:51:29.058Z
updatedAt: 2024-11-05T17:51:29.841Z
publishedAt: 2024-11-05T17:51:29.841Z
firstPublishedAt: 2024-11-05T17:51:29.841Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: request-for-settlement-of-orders-does-not-account-for-the-value-of-interest
locale: es
kiStatus: Backlog
internalReference: 1130035
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando a una orden se le aplican intereses, el valor total de la operación acaba siendo superior al valor original de la orden. Sin embargo, durante el proceso de envío de la solicitud de liquidación desde el sistema de órdenes a la pasarela de pagos, el sistema sólo envía el importe de la orden, sin tener en cuenta los intereses, lo que da lugar a una solicitud de liquidación con un importe inferior al total de la operación, lo que puede impedir que la operación se capture completamente.
En algunos casos, la operación puede permanecer en estado "Capturando" indefinidamente.


##

## Simulación


Crear una orden utilizando una forma de pago que tenga configurado el cálculo de intereses.

Tras finalizar la compra, sigue el flujo normal de gestión de pedidos y envía la factura con el importe total del pedido, intereses incluidos.

En los detalles de la transacción en la pasarela, verá que la solicitud de captura se enviará con el importe del pedido, sin contabilizar los intereses.



## Workaround


Para evitar nuevos casos:
El comercio puede habilitar la captura automática en los conectores que acepten intereses. De esta forma, la captura se realizará directamente en el conector, utilizando el importe total de la transacción, incluidos los intereses, y eliminando la dependencia del importe enviado por el sistema de pedidos.

Para ajustar órdenes que ya están en estado "Liquidación":
Para las órdenes que ya se encuentran en estado "Liquidación" y están a la espera de que se actualice el importe con intereses, la solución es llamar explícitamente a las API de liquidación desde el área de pagos para ajustar el importe de la operación.






