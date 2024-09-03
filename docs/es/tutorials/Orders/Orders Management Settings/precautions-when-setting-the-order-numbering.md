---
title: 'Cuidados al definir la numeración de pedido'
id: VAKKptfcaOxFxM8gfPobu
status: PUBLISHED
createdAt: 2019-10-23T16:53:33.949Z
updatedAt: 2023-03-30T15:56:41.331Z
publishedAt: 2023-03-30T15:56:41.331Z
firstPublishedAt: 2019-10-29T17:23:28.798Z
contentType: tutorial
productTeam: Post-purchase
author: 1E4UkWguFZAXjkguvNHPIv
slug: cuidados-al-definir-la-numeracion-de-pedido
locale: es
legacySlug: cuidados-al-definir-la-numeracion-de-pedido
subcategoryId: 1qvm3kIrt6KA6IeGc4EQ6k
---

Al definir el formato de numeración de los pedidos de una tienda, se deben tomar ciertas precauciones. A continuación,  enumeramos algunas de estas:

- La estructura de pedidos como prefijo, sufijo y numeración del sequence, una vez elegida, es **inalterable**. Esta opción se realiza al subir la tienda, por lo que es importante tener cuidado al elegir entre los dos formatos: **A** o **B**. De manera predeterminada, su tienda sigue la opción de 12 dígitos numéricos  **A**, pero usted puede seleccionar el formato alfanumérico durante el registro. Sin embargo, una vez elegido, no se puede cambiar.

- La numeración del estándar **B** **no sigue necesariamente** una secuencia u opción alfanumérica. Pueden ser distintos, sin necesariamente una lógica en el orden. Todo pedido tiene  `orderId` y `sequence`. El `orderId` viene con 12 dígitos, y el `sequence` siempre viene con 6, comenzando por `500001`.

- Independientemente del formato, los números siguen un estándar creciente, pero la diferencia entre un número y otro (incremento) es aleatoria. Esto garantiza que nadie fuera de la tienda pueda estimar cuántos pedidos se han realizado en un período determinado.

- El `orderId` puede tener como prefijo ` XYZ-`, para distinguir los pedidos  de afiliado. Estas letras son el ID de afiliado que la tienda registra e informa al marketplace externo. En estos casos, tiene un ID de pedido que saldrá de la numeración de los pedidos cerrados por la tienda. Esto significa que los estándares alfanuméricos o numéricos de los que hablamos anteriormente son para pedidos realizados por el marketplace. Los pedidos externos, que se integran directamente para el fulfillment de la tienda, tendrán el estándar `{afiliados} - {externalId}`. El `ExternalId` no tiene un formato definido ya que sigue el estándar del marketplace.

