---
title: 'La ordenación de los campos de los productos y las SKU no se guarda'
id: 5UsBchV9uWw0eWn6G1d7AN
status: DRAFT
createdAt: 2022-02-15T18:20:03.680Z
updatedAt: 2023-02-14T16:24:45.180Z
publishedAt: 
firstPublishedAt: 2022-02-15T18:20:04.148Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: la-ordenacion-de-los-campos-de-los-productos-y-las-sku-no-se-guarda1
kiStatus: Backlog
internalReference: 
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando se cambia la ordenación de los campos de productos o SKUs en una categoría que no es la principal, después de hacer clic en el botón de ordenación los cambios no se guardan y los campos modificados no aparecen después de recargar la página.



## Simulación



1. En el menú lateral, haga clic en Catálogo.
2. Haga clic en Categorías.
3. Haga clic en una categoría que tenga campos de producto registrados que no hayan sido heredados de otra categoría.
4. Acceda a Acciones > Campo (Producto) o Campo (SKU).
5. En el cuadro que contiene el número de orden, cambie el orden de algunas categorías.
6. 6. Haga clic en Ordenar.




## Workaround


Actualmente la única solución es realizar la ordenación de los campos mediante una personalización de Javascript en el front-end.

