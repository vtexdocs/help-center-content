---
title: 'Timeout al cambiar las palabras clave de la categoría con muchos productos'
id: 14rC5XqGCOj1THVdYwbudS
status: PUBLISHED
createdAt: 2022-02-25T11:40:37.024Z
updatedAt: 2024-02-16T20:26:33.631Z
publishedAt: 2024-02-16T20:26:33.631Z
firstPublishedAt: 2022-02-25T11:40:37.550Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: timeout-al-cambiar-las-palabras-clave-de-la-categoria-con-muchos-productos
locale: es
kiStatus: No Fix
internalReference: 497335
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

No se puede cambiar las palabras clave de una categoría con muchos productos, ya que se devuelve un timeout en el proceso, ya sea por el administrador o por la API


## Simulación


Mediante el administrador o la API, cambie las palabras clave de una categoría con muchos productos (al menos más de 40.000)
Espere unos segundos y recibirá un timeout


## Workaround


Eliminar productos de la categoría, cambiar palabras clave, devolver productos

