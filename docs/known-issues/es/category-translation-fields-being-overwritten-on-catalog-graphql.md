---
title: 'Los campos de traducción de categorías se sobrescriben en el catálogo graphql'
id: 2nZlEN8Tlt7oKfF77u63ch
status: PUBLISHED
createdAt: 2023-03-22T15:48:59.725Z
updatedAt: 2023-03-22T15:49:00.550Z
publishedAt: 2023-03-22T15:49:00.550Z
firstPublishedAt: 2023-03-22T15:49:00.550Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: los-campos-de-traduccion-de-categorias-se-sobrescriben-en-el-catalogo-graphql
locale: es
kiStatus: Backlog
internalReference: 654896
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Al traducir contenido utilizando la aplicación catalog-graphql o la traducción de catálogos, los campos como nombre, título o descripción se sobrescriben. Este comportamiento sólo ocurre si uno de estos campos (nombre, título, descripción) es igual en el registro del catálogo.


##

## Simulación



- Compruebe la configuración de la categoría en el admin
- Compruebe los campos "Nombre", "Categoría Título de la página (Tag Title)", "Categoría Descripción (Meta Tag Description)", al menos dos de ellos deben ser iguales
- Siga la documentación: https://developers.vtex.com/vtex-developer-docs/docs/catalog-internationalization#category



## Workaround


Al registrar la categoría, los campos nombre, título y descripción deben ser diferentes



