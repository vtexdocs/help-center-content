---
title: 'Configurar Inventario Futuro (Beta)'
id: UMSGjooqRfkRbeoh94kS4
status: DRAFT
createdAt: 2020-09-21T21:53:10.713Z
updatedAt: 2022-04-06T17:28:53.703Z
publishedAt: 
firstPublishedAt: 2020-09-21T22:32:34.864Z
contentType: tutorial
productTeam: Post-purchase
author: authors_24
slug: configurar-inventario-futuro
legacySlug: configurar-inventario-futuro
subcategory: 32vrn4K2ZscjUaIBe6w5fm
---

<div class="alert alert-info">
<p>Esta funcionalidad está en etapa closed Beta, lo que significa que estamos trabajando para mejorarla. En caso de dudas, contacte a <a href="https://support.vtex.com/hc/pt-br/requests">nuestro Soporte</a>.</p>
</div>

Para algunas operaciones de e-commerce, es útil tener la capacidad de vender un artículo que no está disponible para entrega inmediata, pero que tiene una fecha estimada de llegada al stock. La funcionalidad __Inventario Futuro__ permite precisamente eso.

## Cómo funciona el Inventario Futuro

<div class="alert alert-warning">
Actualmente, la configuración de Inventario Futuro solo está disponible <a target="_blank" href="https://developers.vtex.com/reference/inventory#savesupplylot">a través de API</a>.
</div>

La API de Inventario Futuro le permite registrar un __lote de suministro__. Este lote representa el inventario futuro y contiene dos datos principales:
- Cantidad de artículos.
- Fecha de llegada de artículos en stock.

Al recibir una solicitud con esta información, la API registra la disponibilidad futura de los artículos. A pesar de que actualmente no están disponibles en stock, el checkout ahora muestra estos artículos como disponibles.

En este caso, las compras de estos SKU consumirán los artículos disponibles en el lote de suministro. Y cuando el envío se calcula utilizando estos artículos, la fecha límite para recibir el lote se agregará al tiempo de entrega final.

>Tiempo de entrega final = SLA de entrega + Fecha límite para recibir el lote de suministro

<div class="alert alert-info">
Si la fecha de recepción es anterior a la fecha del cálculo del envío, el tiempo adicional será 0 (cero), ya que, en este caso, el lote de suministro ya se recibió.</div>

Consulte la documentación del endpoint utilizado para guardar un inventario futuro:
[Guardar lote de suministros](https://developers.vtex.com/reference/inventory#savesupplylot)

## Consultar inventarios futuros

Para ver los inventarios futuros de un SKU, puede utilizar el endpoint [Get Supply Lots](https://developers.vtex.com/reference/inventory#getsupplylots). La respuesta a este request muestra la lista de inventarios futuros para un SKU en un inventario específico.

## Restricciones y cuidados

Cuando utilice la API de Inventario Futuro, tenga en cuenta las siguientes restricciones:

- Permitiremos el registro de hasta 10 lotes de entrega de un artículo por inventario. Los lotes con fechas de suministro vencidas, es decir, anteriores a la fecha actual, continúan considerándose dentro del límite de 10 lotes.
- El orden de consumo del inventario es: primero las unidades con entrega inmediata y luego los lotes ordenados por fecha de suministro.

## Transferencia para entrega inmediata

Es posible transferir el inventario de un lote de suministro al inventario de entrega inmediata. Esta transferencia hace que los artículos se consideren disponibles de inmediato. Con eso, ya no hay que agregar tiempo al SLA de entrega para ellos.

<div class="alert alert-info">
La transferencia para entrega inmediata libera espacio para registrar un nuevo lote. Es decir, si su tienda tiene 10 lotes registrados (límite permitido) y transfiere 2 de ellos para entrega inmediata, ahora tiene 8 lotes registrados y 2 espacios disponibles.
</div>

Consulte la documentación del endpoint utilizado para transferir un inventario futuro para entrega inmediata:
[Transferir lote de suministros](https://developers.vtex.com/reference/inventory#transfersupplylot)

## Vencimiento del período de llegada

A través de la API se puede definir si un lote debe seguir utilizándose en caso de que expire el plazo de suministro y no se lleve a cabo la transferencia al inventario de entrega inmediata.

Esta configuración se realiza a través del campo `keepSellingAfterExpiration`. Si el valor es `true`, se seguirá utilizando el lote. Si es `false`, ya no se utilizará.
