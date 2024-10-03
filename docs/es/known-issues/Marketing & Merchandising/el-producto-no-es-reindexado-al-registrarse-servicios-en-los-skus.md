---
title: 'El producto no es reindexado al registrarse servicios en los SKUs'
id: 3shcZ8gz2MM8QUyGiS0qUq
status: PUBLISHED
createdAt: 2018-06-28T23:47:58.354Z
updatedAt: 2022-12-22T20:45:27.132Z
publishedAt: 2022-12-22T20:45:27.132Z
firstPublishedAt: 2018-06-28T23:55:09.347Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: product-is-not-reindexed-when-registering-services-in-skus
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Al registrarse servicios en los SKUs, el trigger para que el producto se envíe a la cola de reindexación no se dispara. Por lo tanto, el servicio no se aplica a los productos en cuestión.


## Simulación

1. Acceda al catálogo
2. Navegar hasta Productos> Productos y SKU > __Registro de Productos y SKUs__
3. En la lista de productos haga clic en la flecha junto a Cambiar y después haga clic en __SKU__
4. En la lista que se carga entonces, haga clic en __Servicios__
5. Haga clic en el botón __Nuevo servicio__
6. Rellene los datos y guarde el servicio

## Workaround

Para forzar la reindexación del producto que tuvo servicios registrados en sus SKUs, basta acceder a la página del producto en el Admin, insertar un espacio en la descripción del producto y luego guardarlo.


