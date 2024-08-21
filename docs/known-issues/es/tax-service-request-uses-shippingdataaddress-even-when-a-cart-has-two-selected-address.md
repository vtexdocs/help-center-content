---
title: 'La solicitud de servicio de impuestos utiliza shippingData.address incluso cuando un carro tiene dos direcciones seleccionadas'
id: 21t5R3AmcllYam4mXqX6lY
status: PUBLISHED
createdAt: 2024-08-01T13:11:10.623Z
updatedAt: 2024-08-01T13:11:11.796Z
publishedAt: 2024-08-01T13:11:11.796Z
firstPublishedAt: 2024-08-01T13:11:11.796Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: la-solicitud-de-servicio-de-impuestos-utiliza-shippingdataaddress-incluso-cuando-un-carro-tiene-dos-direcciones-seleccionadas
locale: es
kiStatus: Backlog
internalReference: 1074168
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


En un carrito con artículos para recogida y entrega, la simulación de checkout sólo considera la información del objeto shippingData.address para la solicitud del servicio de impuestos. Por ejemplo, considerando que esas direcciones son de diferentes estados, y el proveedor de impuestos considera diferentes impuestos para cada estado, a uno de los artículos se le aplicará el impuesto incorrecto.


##

## Simulación



- Configurar Servicio de Impuestos;
- Añadir dos artículos a un carrito con diferentes direcciones seleccionadas: una para recogida y otra para entrega.



## Workaround


N/A




