---
title: 'El término hace que la API de búsqueda no tenga retorno'
id: 2ZmZlhMUaIEmbjLhXiDngm
status: PUBLISHED
createdAt: 2022-05-02T16:20:29.941Z
updatedAt: 2022-11-25T21:46:01.758Z
publishedAt: 2022-11-25T21:46:01.758Z
firstPublishedAt: 2022-05-02T16:20:30.689Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: el-termino-hace-que-la-api-de-busqueda-no-tenga-retorno
locale: es
kiStatus: Backlog
internalReference: 570542
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Algunas palabras son ignoradas por la búsqueda, en el caso de "é", el término debe ser convertido en "e" y luego ignorado por la búsqueda. Pero una búsqueda con ese término devolverá una búsqueda vacía.



## Simulación



- Registrar un producto con "é" en el nombre o palabra sustitutiva
- Busque el nombre del producto o la palabra sustituta.
- Verá que será redirigido a una búsqueda vacía



## Workaround


N/A

