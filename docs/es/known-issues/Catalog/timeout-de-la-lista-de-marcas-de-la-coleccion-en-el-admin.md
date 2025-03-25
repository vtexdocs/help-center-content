---
title: 'Timeout de la lista de marcas de la colección en el Admin'
id: 4de4lqAIhr9mU77EPAbvq1
status: PUBLISHED
createdAt: 2022-08-17T15:58:26.950Z
updatedAt: 2024-07-01T18:48:37.335Z
publishedAt: 2024-07-01T18:48:37.335Z
firstPublishedAt: 2022-08-17T15:58:27.573Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: admin-collection-brand-list-timeout
locale: es
kiStatus: No Fix
internalReference: 639905
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Actualmente, para las tiendas que tienen más de 4000 marcas en su catálogo, el siguiente listado de marcas no carga ninguna marca cuando se intenta crear una nueva colección:

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Catalog/timeout-de-la-lista-de-marcas-de-la-coleccion-en-el-admin_1.png)

Esto ocurre debido a un tiempo de espera (se puede ver que hay un largo tiempo de carga y luego se muestra como "sin marcas").






## Simulación


1 - Vaya al nuevo módulo de administración de colecciones en una tienda con más de 4000 marcas. ej: mystore.vtex.com/admin/collections.

2- Haga clic en el botón + crear colecciones

3 - Se mostrará un spinner para ~50s y luego un mensaje de "no hay marcas", lo cual es incorrecto.





## Workaround


n/a

