---
title: Kits sin stock se muestran como disponibles si tienen promoción de regalo
id: 5xHAJ10n3qMSOGECegw8Yo
status: PUBLISHED
createdAt: 2018-04-24T21:43:13.080Z
updatedAt: 2022-12-22T20:45:17.620Z
publishedAt: 2022-12-22T20:45:17.620Z
firstPublishedAt: 2018-04-24T21:54:44.236Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: kits-sin-stock-se-muestran-como-disponibles-si-tienen-promocion-de-regalo
kiStatus: Backlog
internalReference: 
---

## Sumario

Kits aplicables a promociones de regalo, pero que están sin stock, se muestran incorrectamente como disponibles en los estantes y páginas de producto.

A pesar de ello, son correctamente indexados como indisponibles, y no es posible seguir con la compra después de llegar al carrito, que indicará indisponibilidad.

## Simulación

- Registrar un kit que tenga uno o más componentes sin stock.
- Crear una promoción de regalo para este kit.
- Observar su comportamiento en la página de producto.

## Workaround

Una forma de evitar este escenario es optar por no exhibir los productos sin stock, según el registro del producto. Como se indizan correctamente, al no identificar disponibilidad del ítem, éste quedará inaccesible.


