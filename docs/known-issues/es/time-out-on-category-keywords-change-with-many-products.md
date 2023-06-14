---
title: 'Timeout al cambiar las palabras clave de la categoría con muchos productos'
id: 14rC5XqGCOj1THVdYwbudS
status: PUBLISHED
createdAt: 2022-02-25T11:40:37.024Z
updatedAt: 2022-11-25T21:55:02.673Z
publishedAt: 2022-11-25T21:55:02.673Z
firstPublishedAt: 2022-02-25T11:40:37.550Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: timeout-al-cambiar-las-palabras-clave-de-la-categoria-con-muchos-productos
kiStatus: Backlog
internalReference: 497335
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>

No se puede cambiar las palabras clave de una categoría con muchos productos, ya que se devuelve un timeout en el proceso, ya sea por el administrador o por la API


## Simulación


Mediante el administrador o la API, cambie las palabras clave de una categoría con muchos productos (al menos más de 40.000)
Espere unos segundos y recibirá un timeout


## Workaround


Eliminar productos de la categoría, cambiar palabras clave, devolver productos

