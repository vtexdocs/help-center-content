---
title: 'Precio indexado de un producto considerando la SKU con el precio más alto en lugar del más bajo.'
id: 333mavl9dvgO4Jrgv8ECE6
status: PUBLISHED
createdAt: 2023-05-09T14:39:56.338Z
updatedAt: 2023-08-18T17:24:09.314Z
publishedAt: 2023-08-18T17:24:09.314Z
firstPublishedAt: 2023-05-09T14:39:56.771Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: precio-indexado-de-un-producto-considerando-la-sku-con-el-precio-mas-alto-en-lugar-del-mas-bajo
locale: es
kiStatus: Fixed
internalReference: 822120
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El precio indexado, que es un valor único para todo el producto (junto con sus SKUs), y se utiliza para ordenar y filtrar los productos en la Búsqueda Inteligente, está considerando el precio más alto entre los SKUs, mientras que lo esperado es considerar el SKU con el precio más bajo - junto con reglas adicionales sobre la política comercial y los vendedores de los SKUs.


##

## Simulación



- tener un artículo con múltiples SKUs con diferentes precios
- aplicar un filtro por precio, normalmente a través del filtro "rango de precios
- observe que se basará en la SKU más cara en lugar de en la más barata



## Workaround


N/A




