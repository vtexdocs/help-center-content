---
title: 'Itens devueltos con el mismo SkuId en diferentes arrays UniqueId no es visible correctamente'
id: 65uUpH4uSicaDzruCIBaTq
status: PUBLISHED
createdAt: 2024-06-14T20:48:37.328Z
updatedAt: 2024-06-14T20:48:38.207Z
publishedAt: 2024-06-14T20:48:38.207Z
firstPublishedAt: 2024-06-14T20:48:38.207Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: itens-devueltos-con-el-mismo-skuid-en-diferentes-arrays-uniqueid-no-es-visible-correctamente
locale: es
kiStatus: Backlog
internalReference: 1050294
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Nuestros sistemas integrados (OMS/SNO/UI) no fueron diseñados para utilizar la misma información para la correlación para mostrar la información correcta cuando un iten con el mismo SKU fue creado en diferente matriz uniqueid. Esto sucede porque algunos sistemas utilizan skuid y otros itemindex.



## Simulación


Crear un pedido con más de una cantidad de artículos, creando un pedido con más de un array de itens con el mismo skuid. Facturar el pedido y en las páginas de devolución se podrá ver que el artículo no tiene información sobre las diferencias entre cada uno.



## Workaround


No hay solución para esto.





