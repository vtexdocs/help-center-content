---
title: 'Lean shipping muestra en UI el shippingEstimate más alto de los SLA seleccionados'
id: 1EYi8qK6pHwBU9Yqlxa9jm
status: PUBLISHED
createdAt: 2024-10-30T16:05:02.385Z
updatedAt: 2024-10-30T16:05:03.305Z
publishedAt: 2024-10-30T16:05:03.305Z
firstPublishedAt: 2024-10-30T16:05:03.305Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: lean-shipping-displays-at-ui-the-higher-shippingestimate-from-the-selected-slas
locale: es
kiStatus: Backlog
internalReference: 1126188
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


En los carros que tienen un intervalo entre la entrega y la recogida, Lean shipping muestra en UI el shippingEstimate más alto de los SLAs seleccionados.Como ejemplo: hay cuatro productos en el carro y tres de ellos tienen recogida como SLA seleccionado y 4hs de shippingEstimate. El último artículo se entregará desde la tienda y tiene 3bd de shippingEstimate. En el checkout UI, el shippingEstimate será:

-paquete de recogida: 3bd
-paquete de entrega: 3bd

La estimación de envío para la recogida es 3bd, a pesar de que esta no es la información correcta.


##

## Simulación


1- Crear un carrito con productos del mismo vendedor y distintos canales de entrega.
2- Introduce el código postal
3- Intenta seleccionar un punto de recogida.


##

## Workaround


N/A





