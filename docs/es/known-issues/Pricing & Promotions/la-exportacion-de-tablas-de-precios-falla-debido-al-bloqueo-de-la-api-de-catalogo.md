---
title: 'La exportación de tablas de precios falla debido al bloqueo de la API de catálogo'
id: 4LSQalrhGQHuz8c087WBxP
status: PUBLISHED
createdAt: 2024-08-14T18:41:34.999Z
updatedAt: 2024-08-14T18:41:35.930Z
publishedAt: 2024-08-14T18:41:35.930Z
firstPublishedAt: 2024-08-14T18:41:35.930Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: export-of-price-tables-fails-due-to-throttling-of-catalog-api
locale: es
kiStatus: Backlog
internalReference: 1081437
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


La exportación de tablas de precios falla debido a la limitación de la API de catálogo. Este problema se produce cuando el sistema supera los límites de velocidad del servicio Catálogo durante el proceso de exportación, lo que impide la recuperación de los precios de los productos tras la obtención inicial de SKU.



## Simulación



1. Intentar exportar una tabla de precios de gran tamaño desde la interfaz de administración de VTEX.
2. La exportación comenzará, pero en algún momento, el proceso falla debido a la estrangulación de la API de Catálogo.
3. No se recupera ningún precio y la exportación no se completa.



## Workaround


Si se produce un estrangulamiento, el equipo de guardia puede realizar exportaciones manuales para el cliente caso por caso. Los intentos repetidos también pueden tener éxito dependiendo del uso de la API de la cuenta en ese momento.





