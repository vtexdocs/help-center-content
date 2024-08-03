---
title: 'La ordenación de los grupos de especificaciones desde la categoría raíz no funciona'
id: 5iuLxVdAuK70VMYGts7CzJ
status: PUBLISHED
createdAt: 2022-08-09T00:46:23.102Z
updatedAt: 2024-02-16T20:25:08.305Z
publishedAt: 2024-02-16T20:25:08.305Z
firstPublishedAt: 2022-08-09T00:46:23.684Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: la-ordenacion-de-los-grupos-de-especificaciones-desde-la-categoria-raiz-no-funciona
locale: es
kiStatus: No Fix
internalReference: 634129
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente, cuando se crean grupos de especificaciones en la categoría raíz, no es posible reordenarlos por parte del administrador o de la API



## Simulación



1. Cree dos grupos de especificaciones en la categoría raíz
2. Ver que no se puede cambiar el orden por Admin, a pesar del mensaje de que es posible
3. Pruebe a cambiar el orden utilizando la ruta de actualización de grupos de especificaciones (`api/catalog_system/pvt/especificación/grupo`)
4. Observe que el campo de posición en la respuesta no se modifica



## Workaround


N/A

