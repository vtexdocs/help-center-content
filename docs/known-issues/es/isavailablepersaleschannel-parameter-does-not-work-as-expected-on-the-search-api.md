---
title: 'El parámetro isAvailablePerSalesChannel no funciona como se espera en la API de búsqueda'
id: 6vexCZQTib8fFI6sCSTdWL
status: PUBLISHED
createdAt: 2022-09-12T16:03:25.215Z
updatedAt: 2024-02-16T20:24:54.890Z
publishedAt: 2024-02-16T20:24:54.890Z
firstPublishedAt: 2022-09-12T16:03:25.837Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: el-parametro-isavailablepersaleschannel-no-funciona-como-se-espera-en-la-api-de-busqueda
locale: es
kiStatus: No Fix
internalReference: 656284
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al intentar utilizar el parámetro isAvailablePerSalesChannel para mostrar los productos disponibles (fq=isAvailablePerSalesChannel_{id}:1) o no disponibles (fq=isAvailablePerSalesChannel_{id}:0) el resultado no es coherente.

A veces funciona como se espera y otras veces no, especialmente cuando intervienen otros parámetros en la búsqueda, como productId, skuId o sc.



## Simulación



1. Hacer que un producto no esté disponible en un canal de venta.
2. Utilice la API de búsqueda con el parámetro isAvailablePerSalesChannel.
3. Compruebe que el resultado es incoherente.



## Workaround


No hay solución.

