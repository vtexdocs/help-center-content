---
title: 'La integración MELI está recibiendo errores de MELI "429 demasiadas peticiones"'
id: 1e4g9nzZFyanywmLbSHq4D
status: PUBLISHED
createdAt: 2023-08-03T10:47:41.602Z
updatedAt: 2023-08-14T14:08:12.646Z
publishedAt: 2023-08-14T14:08:12.646Z
firstPublishedAt: 2023-08-03T10:47:43.214Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slug: la-integracion-meli-esta-recibiendo-errores-de-meli-429-demasiadas-peticiones
locale: es
kiStatus: Fixed
internalReference: 873998
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



Actualmente tenemos un problema con algunas cuentas en MELi que están recibiendo un error al intentar actualizar productos, stock o precio en MELI.

Esto no afecta a todas las cuentas ni a todas las SKU, sino sólo a una parte de ellas, y se debe a que se envían más solicitudes de las que MELI está preparado para recibir.


##

## Simulación



Dentro del menú de integración stock/precio/producto algunas cuentas pueden ver un error:

**Lo sentimos, no hemos podido procesar esta solicitud. Por favor, espere unos minutos y vuelva a procesarla**.

Estamos trabajando en cómo gestionar mejor las solicitudes para evitar obtener este error de MELI.



## Workaround


La única solución disponible por ahora es volver a procesar la solicitud directamente en el menú del puente.





