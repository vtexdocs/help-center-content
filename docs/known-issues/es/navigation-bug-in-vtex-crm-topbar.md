---
title: Bug de navegación en la topbar del VTEX CRM
id: svI7gnUQLuccauCkeyyoU
status: PUBLISHED
createdAt: 2019-01-11T16:10:39.024Z
updatedAt: 2022-12-22T20:48:47.993Z
publishedAt: 2022-12-22T20:48:47.993Z
firstPublishedAt: 2019-01-11T16:24:26.801Z
contentType: knownIssue
productTeam: Master Data
author: 2mXZkbi0oi061KicTExNjo
tag: Master Data
slug: bug-de-navegacion-en-la-topbar-del-vtex-crm
kiStatus: Backlog
internalReference: 
---

## Sumario

Este error se produce con cuentas que tienen varias multi-tiendas, o que han cambiado su nombre después de la creación de MasterData.

La navegación entre subaccounts en la topbar a veces produce un comportamiento inesperado y lleva al usuario a la tienda en lugar del CRM relevante. Otras veces lleva al usuario a un CRM vacío.

Esto se puede resolver escribiendo manualmente el nombre de la subaccount en la URL.

Ejemplo: https://www.{accountname}.vtexcrm.com.br

## Simulación

1. Acceda al CRM VTEX de su tienda;
2. Seleccione una de las opciones de subaccounts que quiera.

## Workaround

Ajuste la URL en el browser manualmente para reflejar la subaccount deseada correctamente.

Ejemplo: https://www.{account}.vtex.com.br

La presencia del `https://` es extremadamente importante.

