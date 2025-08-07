---
title: "El diseño de la página cambia a móvil cuando se imprime (ctrl+p) en Chrome"
id: 1mPBRf1IhLj27liWa040XG
status: PUBLISHED
createdAt: 2022-03-21T17:40:17.848Z
updatedAt: 2022-11-25T22:14:09.694Z
publishedAt: 2022-11-25T22:14:09.694Z
firstPublishedAt: 2022-03-21T17:40:18.209Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: el-diseno-de-la-pagina-cambia-a-movil-cuando-se-imprime-ctrlp-en-chrome
locale: es
kiStatus: No Fix
internalReference: 454680
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>

El diseño de la página cambia a la versión móvil cuando se activa la impresión (CTRL+P) dos veces en Google Chrome Desktop.

## Simulación

En el escritorio de Google Chrome, ve a cualquier página de la tienda y pulsa CTRL+P, luego cancélala y vuelve a pulsar CTRL+P. Aunque se vuelva a cancelar la impresión, el diseño de la página se mantiene como móvil hasta que se actualiza.

Este problema no ocurre en todas las tiendas que utilizan Store Framework.

## Workaround

No se conoce ninguna solución, aunque una manipulación de CSS con `@media print` podría resolver el problema.

Dado que el comportamiento para reproducir este problema es muy específico e inusual, esto no es muy impactante para cualquier tienda.

