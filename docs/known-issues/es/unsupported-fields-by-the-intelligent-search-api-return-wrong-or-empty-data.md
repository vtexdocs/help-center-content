---
title: 'Los campos no admitidos por la API de búsqueda inteligente devuelven datos erróneos o vacíos'
id: Jvm9oLhUM6NqCslpBqSti
status: PUBLISHED
createdAt: 2024-05-13T21:03:14.026Z
updatedAt: 2024-06-25T19:11:41.925Z
publishedAt: 2024-06-25T19:11:41.925Z
firstPublishedAt: 2024-05-13T21:03:15.346Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: los-campos-no-admitidos-por-la-api-de-busqueda-inteligente-devuelven-datos-erroneos-o-vacios
locale: es
kiStatus: Backlog
internalReference: 1032531
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


La API de búsqueda inteligente se basa principalmente en la API de búsqueda por catálogo heredada por motivos de compatibilidad, pero no todas las propiedades devuelven la misma información. En algunos casos, es diferente o está vacía.

Algunas propiedades afectadas:

- "modalType" (devuelve vacío)
- "imageText" (devuelve lo mismo que "imageLabel")
- "kitItems" (devuelve vacío)


##

## Simulación



- registrar el valor de un campo afectado en el módulo Catálogo
- comparar la respuesta para el campo específico entre las API de búsqueda en el catálogo y de búsqueda inteligente



## Workaround


N/A




