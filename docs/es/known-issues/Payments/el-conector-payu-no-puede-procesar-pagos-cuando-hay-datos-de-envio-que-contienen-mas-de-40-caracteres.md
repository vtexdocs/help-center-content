---
title: 'El conector PayU no puede procesar pagos cuando hay datos de envío que contienen más de 40 caracteres.'
id: 1SEaraqWshBYzjOcL9LxsN
status: PUBLISHED
createdAt: 2023-09-18T21:02:32.217Z
updatedAt: 2023-09-18T21:02:32.812Z
publishedAt: 2023-09-18T21:02:32.812Z
firstPublishedAt: 2023-09-18T21:02:32.812Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-payu-connector-is-unable-to-process-payments-when-there-is-shipping-data-containing-more-than-40-characters
locale: es
kiStatus: Backlog
internalReference: 902539
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


El conector de PayU no maneja los datos de dirección recibidos de la caja y los envía al proveedor tal cual, sin ninguna modificación. Sin embargo, en la documentación del proveedor se indica que dichos datos no deben superar los 40 caracteres.

Esto provoca que la transacción se cancele por un error de autorización de pago con el mensaje:

    mensaje: El tamaño debe estar entre 0 y 40 propiedad: , mensaje: El tamaño debe estar entre 0 y 40



##

## Simulación



- Durante el paso de envío en la caja, seleccione una dirección de entrega con más de 40 caracteres, como 'Región Del Libertador General Bernardo O'Higgins (VI)' en Chile.
- Seleccione un método de pago procesado a través del conector PayU.


##

## Workaround


N/A





