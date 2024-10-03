---
title: 'El indexador de catálogos genera documentos de traducción no válidos'
id: 3pbXOA3DQILdu05tAwjlVM
status: PUBLISHED
createdAt: 2024-02-29T18:02:38.600Z
updatedAt: 2024-07-01T18:49:27.852Z
publishedAt: 2024-07-01T18:49:27.852Z
firstPublishedAt: 2024-02-29T18:02:39.430Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-indexer-generating-invalid-translation-documents
locale: es
kiStatus: No Fix
internalReference: 991494
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Al indexar un producto con información traducida se solicitan los mensajes de la aplicación. Se supone que estas solicitudes son menos de 3s y cuando toman más de que la indexación falla y genera un documento de traducción no válida.



##

## Simulación


No hay una manera fácil de reproducir este escenario, pero las cuentas con muchos idiomas o muchos campos para traducir son más susceptibles a este escenario.



## Workaround


N/A





