---
title: 'No es posible crear una ruta utilizando el tipo de contenido a través de UI'
id: 3jVjkZYCATrnDNhR0IKSEA
status: PUBLISHED
createdAt: 2023-10-23T13:19:09.970Z
updatedAt: 2024-07-01T18:49:16.580Z
publishedAt: 2024-07-01T18:49:16.580Z
firstPublishedAt: 2023-10-23T13:19:10.738Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: it-is-not-possible-to-create-a-path-using-content-type-via-ui
locale: es
kiStatus: No Fix
internalReference: 923619
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Si intentamos crear una ruta usando tipos de contenido a través de la UI la página no funcionará. Sólo funciona si la creamos a través del tema.


##

## Simulación



- Crea una ruta utilizando un tipo de contenido en el módulo Pages, por ejemplo, `storeTest/:test_id`.
- Guárdala
- Intenta acceder a ella desde el front
- No funcionará



## Workaround


Si añadimos la ruta usando el tipo de contenido a través del tema, la página aparecerá en la UI y funcionará





