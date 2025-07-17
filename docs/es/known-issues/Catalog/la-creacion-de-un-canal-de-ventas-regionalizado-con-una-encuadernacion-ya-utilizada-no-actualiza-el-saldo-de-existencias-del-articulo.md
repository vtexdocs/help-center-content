---
title: "La creación de un canal de ventas regionalizado con una encuadernación ya utilizada no actualiza el saldo de existencias del artículo."
id: 7CqZPslfGY8mTmBLuWe5SQ
status: PUBLISHED
createdAt: 2024-03-22T19:39:26.469Z
updatedAt: 2024-07-01T18:49:34.061Z
publishedAt: 2024-07-01T18:49:34.061Z
firstPublishedAt: 2024-03-22T19:39:27.432Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: la-creacion-de-un-canal-de-ventas-regionalizado-con-una-encuadernacion-ya-utilizada-no-actualiza-el-saldo-de-existencias-del-articulo
locale: es
kiStatus: No Fix
internalReference: 1005112
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Para las cuentas regionalizadas el sistema de índices filtra por los canales de venta regionalizados el stockbalance que debe aparecer, para no mostrar vinculaciones de ventas que no están regionalizadas.

Si es necesario regionalizar un nuevo canal en una vinculación que ya está en producción, la indexación no se activará. Causando algunas inconsistencias en la disponibilidad de los productos.


##

## Simulación



1. Crear un canal de ventas regionalizado en una encuadernación de producción;
2. Compruebe si las existencias y la disponibilidad son coherentes con todos los productos.



## Workaround


Forzar un reindexado con stockSimulation. Actualizar stock por ejemplo.





