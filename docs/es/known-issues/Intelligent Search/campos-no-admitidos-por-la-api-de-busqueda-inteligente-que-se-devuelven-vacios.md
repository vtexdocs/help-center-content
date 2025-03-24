---
title: 'Campos no admitidos por la API de búsqueda inteligente que se devuelven vacíos'
id: Jvm9oLhUM6NqCslpBqSti
status: PUBLISHED
createdAt: 2024-05-13T21:03:14.026Z
updatedAt: 2024-10-30T16:23:41.744Z
publishedAt: 2024-10-30T16:23:41.744Z
firstPublishedAt: 2024-05-13T21:03:15.346Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: unsupported-fields-by-the-intelligent-search-api-returning-empty
locale: es
kiStatus: Backlog
internalReference: 1032531
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


La API de búsqueda inteligente se basa principalmente en la API de búsqueda por catálogo heredada por motivos de compatibilidad, pero no todas las propiedades devuelven la misma información. En algunos casos, es diferente o está vacía.

Algunas propiedades afectadas:

- ".items.attachments" (devuelve vacío)
- ".items.isKit" (siempre devuelve false)
- ".items.kitItems" (devuelve vacío)
- ".items.estimatedDateArrival" (devuelve vacío)
- ".items.modalType" (devuelve vacío)
- ".items.images.imageText" (devuelve lo mismo que "imageLabel")
- ".items.sellers.commertialOffer.PaymentOptions" (no disponible, pero versión resumida disponible en ".commertialOffer.PaymentOptions")


##

## Simulación



- registrar el valor de un campo afectado en el módulo Catálogo
- comparar la respuesta para el campo específico entre las API de búsqueda en el catálogo y de búsqueda inteligente



## Workaround


N/A




