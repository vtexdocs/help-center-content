---
title: 'Artículo disponible cuando la ubicación del cliente no está definida sin existencias'
id: 7vDywP0WtfpJ4bCiNkXNfw
status: PUBLISHED
createdAt: 2024-07-30T22:51:30.425Z
updatedAt: 2024-07-30T22:54:29.056Z
publishedAt: 2024-07-30T22:54:29.056Z
firstPublishedAt: 2024-07-30T22:51:31.764Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: articulo-disponible-cuando-la-ubicacion-del-cliente-no-esta-definida-sin-existencias
locale: es
kiStatus: Backlog
internalReference: 1073363
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando la ubicación del cliente no está definida, los artículos aparecen disponibles incluso cuando no hay existencias disponibles y la marca blanca del vendedor no es completa. Esto solo ocurre si la SKU tiene existencias en el vendedor de marca blanca en un almacén asociado a un canal de ventas distinto al registrado en el punto final de cumplimiento del vendedor.


##

## Simulación



- No hay stock para el vendedor 1;
- Ningún vendedor integral configurado;
- Stock en un vendedor de marca blanca en un canal de ventas diferente al punto final de cumplimiento, por ejemplo:
Punto final de cumplimiento con sc=1;
Stock en el vendedor para sc=2.



## Workaround

 provisional
N/A




