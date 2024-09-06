---
title: 'Programación de la fecha de finalización de las Colecciones no funciona'
id: mhO5z0twpTunMeEsPKl0q
status: PUBLISHED
createdAt: 2022-03-17T21:32:13.982Z
updatedAt: 2022-11-25T21:43:27.334Z
publishedAt: 2022-11-25T21:43:27.334Z
firstPublishedAt: 2022-03-17T21:32:14.700Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: programacion-de-la-fecha-de-finalizacion-de-las-colecciones-no-funciona
locale: es
kiStatus: Fixed
internalReference: 497880
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Actualmente, cuando se alcanza la fecha de finalización de una colección programada, no se desencadena el proceso de reindexación de los productos que contiene, lo que hace que la programación de la fecha de finalización no sea funcional en su conjunto.



## Simulación





1) Cree una nueva colección, ya sea a través del nuevo módulo de administración de colecciones o de las colecciones del antiguo CMS.

2) Establezca una fecha de finalización para que esta colección específica expire unos minutos antes de la fecha actual:

3) Inserte 1+ productos en esta colección y guárdela.

4) El producto insertado debería ser reindexado

5) Espere a la fecha de finalización programada

6) El producto no será reindexado y por lo tanto no será eliminado de la colección dada.



## Workaround


Reindexar manualmente los productos

