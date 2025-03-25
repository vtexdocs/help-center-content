---
title: 'La interfaz de usuario muestra erróneamente el precio del envío cuando los paquetes se dividen para una entrega programada.'
id: 6HkjI7IwvvYaxHAqMS2aUv
status: PUBLISHED
createdAt: 2023-03-20T14:59:50.827Z
updatedAt: 2023-03-20T14:59:51.525Z
publishedAt: 2023-03-20T14:59:51.525Z
firstPublishedAt: 2023-03-20T14:59:51.525Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: ui-wrongly-displaying-the-shipping-price-when-packages-are-split-for-scheduled-delivery
locale: es
kiStatus: Backlog
internalReference: 774155
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando hay una división de paquetes para una entrega programada, el precio de uno de los paquetes puede ser incorrecto en la interfaz de usuario, pero los precios serán correctos en la API.



## Simulación



- Añada 2 artículos que tengan entrega programada y sean de diferentes transportistas;
- Seleccione las ventanas de entrega para ambos paquetes;
- Verá que la suma mostrada en la interfaz de usuario no coincide con el totalizador de envío.



## Workaround


N/A



