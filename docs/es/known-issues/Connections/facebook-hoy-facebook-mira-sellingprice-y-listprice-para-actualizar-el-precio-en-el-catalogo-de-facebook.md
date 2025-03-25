---
title: '[Facebook] Hoy Facebook mira sellingPrice y listPrice para actualizar el precio en el catálogo de Facebook'
id: 4CDh12JM3y9AqBnuGDHgnT
status: PUBLISHED
createdAt: 2024-04-03T12:41:15.144Z
updatedAt: 2024-04-03T12:41:16.005Z
publishedAt: 2024-04-03T12:41:16.005Z
firstPublishedAt: 2024-04-03T12:41:16.005Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: facebook-today-facebook-looks-at-sellingprice-and-listprice-to-update-the-price-in-the-facebook-catalog
locale: es
kiStatus: Backlog
internalReference: 924411
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Hoy Facebook mira sellingPrice y listPrice para actualizar el precio en el catálogo de Facebook.


##

## Simulación


El vendedor utiliza unitMultiplier = 0.5

Checkout realiza el siguiente cálculo cuando el artículo tiene una unidad multiplicadora, por lo que sellingPrice = price * unitMultiplier = 3999 * 0.5 = 1999.5. El redondeo de Checkout ignorará el decimal y considerará 1999

¿Cuál es el problema con este cálculo?
Cuando el vendedor utiliza 0,5, por ejemplo, en Facebook lo estamos actualizando como el precio de liquidación en Facebook.
2. Cuando el vendedor utiliza un multiplicador superior a 1,39, entra dentro del precio promocional aunque sea superior al listPrice



##

## Workaround


vendedor usa multiplicador unitario = 10000





