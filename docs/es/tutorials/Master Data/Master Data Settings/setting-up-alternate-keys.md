---
title: 'Configurar claves alternativas'
id: 3Sa78TnD9SSS6aI44QY6eE
status: ARCHIVED
createdAt: 2017-12-04T18:55:27.299Z
updatedAt: 2022-08-04T22:35:33.916Z
publishedAt: 
firstPublishedAt: 2017-12-06T18:46:01.372Z
contentType: tutorial
productTeam: Master Data
author: authors_64
slug: configurar-claves-alternativas
locale: es
legacySlug: configurar-claves-alternativas
subcategoryId: 5tSNDlvmik8gGuKw2goW4q
---

Con Master Data, usted puede configurar una clave alternativa, que es cross JSON Schema.

Hay dos tipos de claves alternativas:
- Single
- Multiple

El tipo `Single` define el valor del campo como único en la entidad de datos, mientras que con el tipo `Multiple` otros documentos pueden tener ese mismo valor.
Para obtener un documento utilizando una clave alternativa, simplemente agregue la siguiente consulta en la API de búsqueda:

`/search?fieldName=fieldValue`

En este escenario, Master Data no intentará obtener el documento en el indizador. Es un proceso más rápido que obtener un solo documento en el indizador.

El tipo `Multiple` debe ser usado en el caso de low events. Profile System utiliza este índice `Multiple` para obtener las direcciones del cliente.

El número de direcciones de un cliente es inferior a 100. Por lo tanto, este es un buen caso de uso. Si su clave alternativa es más grande que 100, usted debe definir el campo como indizado y paginar sus búsquedas.
