---
title: 'Cómo funciona la regla de disponibilidad mínima'
id: tutorials_394
status: PUBLISHED
createdAt: 2017-04-27T22:07:07.997Z
updatedAt: 2019-12-31T15:21:58.911Z
publishedAt: 2019-12-31T15:21:58.911Z
firstPublishedAt: 2017-04-27T23:03:22.711Z
contentType: tutorial
productTeam: Channels
author: authors_3
slugEN: understanding-the-minimum-availability-rule
locale: es
legacySlug: como-funciona-la-regla-de-disponibilidad-minima
subcategoryId: 7lxg0kyL3TYIsrlSQlf1zP
---

La regla de disponibilidad mínima es una funcionalidad asociada al proceso de consulta de stock que posibilita la correcta información de disponibilidad sin la actualización constante de cantidad en stock.

## Cómo funciona

Siempre que se monta un carrito en el marketplace, se llevan a cabo diversas consultas al sistema de VTEX. Entre ellas, está la consulta de la disponibilidad de los ítems seleccionados.

Esa consulta independe de la cantidad en stock que estaba previamente informada al marketplace, o sea, mismo con la información de la cantidad en stock, aun así se realiza esa consulta en el momento de la finalización de la compra.

Eso ocurre para garantizar que la información del stock sea la más actualizada posible.

Por eso, existe la regla de disponibilidad mínima, que define que las alteraciones en número de stock que serán notificadas a los marketplaces son aquellas que alteran ítems que estén antes o después de la actualización con número hasta 5 ítems. 

O sea, caso se haga una alteración de stock de un ítem de 50 para 20 unidades en stock, no se notificará esa alteración al aliado. Sólo se hará eso cuando la cantidad antes de la alteración o después de la alteración es de hasta 5 ítems.

## Ejemplos

**Antes de la actualización**: 16 ítems
**Después de la actualización**: 60 ítems
**No** se notificará esa alteración.

**Antes de la actualización**: 0 ítems
**Después de la actualización**: 23 ítems
Se notificará esa alteración.

**Antes de la actualización**: 15 ítems
**Después de la actualización**: 2 ítems
Se notificará esa alteración.

_Reforzamos que ese comportamiento no impacta el flujo de compra, que siempre tiene la disponibilidad verificada en el momento del cierre del pedido._
