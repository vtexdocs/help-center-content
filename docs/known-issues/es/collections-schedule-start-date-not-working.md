---
title: 'La fecha de inicio de las Colecciones no funciona'
id: 3G6rD1JIm5BaZhFkFrdvok
status: PUBLISHED
createdAt: 2022-10-28T18:07:53.326Z
updatedAt: 2022-11-25T21:42:47.113Z
publishedAt: 2022-11-25T21:42:47.113Z
firstPublishedAt: 2022-10-28T18:07:54.025Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: la-fecha-de-inicio-de-las-colecciones-no-funciona
locale: es
kiStatus: Fixed
internalReference: 667328
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente, cuando se alcanza la fecha de inicio de una colección programada, el proceso de reindexación de los productos en ella no se activa, es decir, la programación de la fecha de inicio no funciona en su totalidad. En consecuencia, los productos no se indexan en la colección en la fecha configurada.



## Simulación


1) Cree una nueva colección a través del nuevo módulo de administración de colecciones o de las colecciones del antiguo CMS

2) Establezca una fecha de inicio para que esta colección específica se inicie unos minutos antes de la fecha actual

3) Inserte más de 1 producto en esta colección y guárdela

4) El producto no será reindexado y por lo tanto no se añadirá a la colección dada.




## Workaround


Vuelva a indexar manualmente los productos o acceda a la colección desde el CMS heredado y guarde de nuevo el grupo de inclusión y la colección.

