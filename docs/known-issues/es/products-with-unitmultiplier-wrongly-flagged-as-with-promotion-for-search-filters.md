---
title: 'Productos con "unitMultiplier" marcados erróneamente como "con promoción" para los filtros de búsqueda'
id: 2rCi8K01DHsNuYsefE7oR2
status: PUBLISHED
createdAt: 2024-02-15T22:52:17.434Z
updatedAt: 2024-02-15T22:52:18.189Z
publishedAt: 2024-02-15T22:52:18.189Z
firstPublishedAt: 2024-02-15T22:52:18.189Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: productos-con-unitmultiplier-marcados-erroneamente-como-con-promocion-para-los-filtros-de-busqueda
locale: es
kiStatus: Backlog
internalReference: 982830
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Un producto cuyo precio de venta sea inferior a su precio de lista será marcado como parte de una promoción a efectos de filtrado de búsqueda. Los productos con algún multiplicador de unidades pueden dar lugar a un cálculo erróneo que puede afectar a esta comparación, dando lugar a que reciban erróneamente esta bandera.


##

## Simulación


La simulación depende de la aparición de problemas específicos de redondeo, pero un ejemplo de ello es un producto con un precio de lista y un precio normal de 264,20 $ y un multiplicador de unidades de 3,07.

Aunque el precio de lista y el precio normal sean iguales, este artículo se devolverá en el filtro de búsqueda "promotion=yes".



## Workaround


N/A





