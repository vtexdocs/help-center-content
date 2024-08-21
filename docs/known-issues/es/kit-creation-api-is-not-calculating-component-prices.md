---
title: 'La API de creación de kits no calcula los precios de los componentes'
id: 3yyIEv6o3CjIbUg4KoLOWT
status: PUBLISHED
createdAt: 2023-03-28T16:34:55.491Z
updatedAt: 2024-04-02T18:36:44.624Z
publishedAt: 2024-04-02T18:36:44.624Z
firstPublishedAt: 2023-03-28T16:34:55.990Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: la-api-de-creacion-de-kits-no-calcula-los-precios-de-los-componentes
locale: es
kiStatus: Backlog
internalReference: 739693
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Actualmente, la carga útil de la API de insertar KIT tiene un formato que solicita los componentes de los que consta este kit y sus cantidades y precios correspondientes.

El precio esperado de un KIT debe ser una suma ponderada de los precios de sus componentes * sus cantidades necesarias para componer el kit.

Por ejemplo, si tengo un KIT que es:

Componente (A) --> 10 $, 2 unidades
Componente (B) --> 25 $, 1 unidad

El Precio del kit debería ser: 10*2 + 25 === 45.

Esto es lo que ocurre en el KIT UI SkuKit.aspx.

Sin embargo, la API https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunitkit no realiza estas actualizaciones de precios para componentes distintos del primero que se añade.



##

## Simulación


Cree un kit utilizando la siguiente API con un componente con una cantidad de 2 o más https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunitkit y, a continuación, compruebe su precio en la interfaz de usuario del módulo de precios.






## Workaround


Introduzca el precio final del kit directamente a través de la API de precios.

