---
title: 'Untitled'
id: 23f5tQp4aND2R6CSU9P1S6
status: CHANGED
createdAt: 2023-11-07T19:59:34.320Z
updatedAt: 2023-11-09T20:45:57.445Z
publishedAt: 2023-11-07T20:04:35.252Z
firstPublishedAt: 2023-11-07T19:59:35.068Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: untitled
locale: es
kiStatus: Fixed
internalReference: 631970
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



Actualmente, el SNO (Shipping Notification Order) acepta recibir un número de factura con un "espacio" (carácter especial) al final, por ejemplo: "123456 ", pero al recibir el número de factura de esta forma algunos flujos realizados después de la compra como el seguimiento de actualizaciones, el sistema de tarjetas regalo que utilizan estos datos fallan porque el sistema no puede utilizar los datos correctamente.


##

## Simulación


1- Facturar un pedido, insertando el siguiente número de factura de ejemplo: "**123456**"; (espacio al final del número)
2- Intenta insertar una actualización de seguimiento, según la API Actualizar estado de seguimiento del pedido: https://developers.vtex.com/vtex-rest-api/reference/updatetrackingstatus
2.1- Informar el número de factura **sin** el "espacio", por ejemplo: "**123456**", tendremos el siguiente error: "mensaje": "**Factura no encontrada**"
2.2- Informando el número de factura **con** el "espacio", por ejemplo: "123456 " (espacio al final del número), tendremos el siguiente error: "**500 Error Interno del Servidor**"



## Workaround


Para estos casos, la solución sería no utilizar el "espacio" al final del número de factura.





