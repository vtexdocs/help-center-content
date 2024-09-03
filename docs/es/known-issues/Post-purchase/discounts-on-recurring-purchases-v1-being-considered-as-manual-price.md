---
title: 'Descuentos en compras recurrentes (V1) se consideran como Manual Price, creando alzadas indebidamente para tiendas que tienen alzada y manual price activos'
id: 76a7i1rKyTwQIStPXgi23j
status: ARCHIVED
createdAt: 2019-03-28T17:12:52.959Z
updatedAt: 2020-02-03T22:56:10.552Z
publishedAt: 
firstPublishedAt: 2019-03-28T17:14:59.644Z
contentType: knownIssue
productTeam: Post-purchase
author: authors_41
tag: OMS
slug: descuentos-en-compras-recurrentes-v1-se-consideran-como-manual-price
locale: es
kiStatus: Open
internalReference: 
---

## Sumario

En la recurrencia V1, cuando pedidos tienen descuentos aplicados en los artículos, los mismos son rellenados como manual price, generando alzadas indebidas.

Con eso, para que estos pedidos sigan su flujo, hoy es necesario aprobarlos en VTEX DO o en el OMS.

__Importante: el error se produce sólo para las tiendas que tienen alzada y manual price activos.__

## Simulación

Para simular el escenario, la tienda necesita tener alzada y manual price activos.

1. Crear promoción para pedidos recurrentes;
2. Cuando la recurrencia se crea (pedido recurrente) el descuento se considera como manual price, creando la alzada.

## Workaround

Migre al sistema de Suscripciones V2, donde el error ha sido eliminado. V1 pronto quedará en desuso.

