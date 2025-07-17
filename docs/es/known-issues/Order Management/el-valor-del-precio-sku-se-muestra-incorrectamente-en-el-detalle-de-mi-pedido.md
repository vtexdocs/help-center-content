---
title: "El valor del precio SKU se muestra incorrectamente en el detalle de Mi pedido"
id: 5uIRAUjAIYGSdQeKtx24Pf
status: PUBLISHED
createdAt: 2025-01-30T20:23:43.683Z
updatedAt: 2025-01-30T20:23:44.248Z
publishedAt: 2025-01-30T20:23:44.248Z
firstPublishedAt: 2025-01-30T20:23:44.248Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: el-valor-del-precio-sku-se-muestra-incorrectamente-en-el-detalle-de-mi-pedido
locale: es
kiStatus: Backlog
internalReference: 1171863
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La lista de artículos del área de detalle de Mis Pedidos se genera fusionando la información devuelta por dos rutas internas. Aunque estas rutas proporcionan datos similares, no son idénticas. Cuando hay dos SKUs del mismo artículo en el pedido, el proceso de fusión puede asignar el mismo precio a ambos, resultando en una visualización incorrecta del valor total en la interfaz, divergiendo del valor real registrado en el pedido.


##

## Simulación


Cree un pedido con dos SKU diferentes del mismo artículo, pero con precios diferentes.
Acceda al área de detalles del pedido en Mis Pedidos.
Compare los precios mostrados con los valores reales del pedido.
Si se produce el problema, ambas SKUs aparecerán con el mismo precio, provocando que el total mostrado difiera.



## Workaround


No hay ninguna solución disponible.





