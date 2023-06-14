---
title: 'La API de creación de kits no calcula los precios de los componentes'
id: 3yyIEv6o3CjIbUg4KoLOWT
status: PUBLISHED
createdAt: 2023-03-28T16:34:55.491Z
updatedAt: 2023-03-28T16:34:55.990Z
publishedAt: 2023-03-28T16:34:55.990Z
firstPublishedAt: 2023-03-28T16:34:55.990Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: la-api-de-creacion-de-kits-no-calcula-los-precios-de-los-componentes
kiStatus: Backlog
internalReference: 739693
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente, la carga útil de la API de insertar KIT tiene un formato que solicita los componentes de los que consta este kit y sus cantidades y precios correspondientes.

El precio esperado de un KIT debe ser una suma ponderada de los precios de sus componentes * sus cantidades necesarias para componer el kit.

Por ejemplo, si tengo un KIT que es:

Componente (A) --> 10 $, 2 unidades
Componente (B) --> 25 $, 1 unidad

El Precio del kit debería ser: 10*2 + 25 === 45.

Esto es lo que ocurre en el KIT UI SkuKit.aspx.

Sin embargo, la API https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunitkit no tiene en cuenta los componentes múltiples en la suma, por lo que el precio sólo considera cada componente una vez en el cálculo (entonces, nuestro ejemplo anterior sería, incorrectamente, 10 + 25 = 35).





##

## Simulación


Crear un kit utilizando la siguiente API con un componente con una cantidad de 2 o más https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunitkit y luego comprobar su precio en la interfaz de usuario del módulo de precios.






## Workaround


Al crear un kit, vaya a la interfaz de usuario y guarde los componentes una vez más para ejecutar la lógica de cálculo de la suma ponderada mencionada.

