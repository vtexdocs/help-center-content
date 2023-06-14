---
title: 'Métodos de integración con el catálogo por Web Service se descontinuarán'
id: 1GmJhvCNvKAYWwwIEeyOey
status: PUBLISHED
createdAt: 2018-08-21T22:22:45.403Z
updatedAt: 2019-12-31T15:13:37.967Z
publishedAt: 2019-12-31T15:13:37.967Z
contentType: updates
productTeam: Others
author: authors_24
slug: metodos-de-integracion-con-el-catalogo-por-web-service-se-descontinuaran
legacySlug: metodos-de-integracion-con-el-catalogo-por-web-service-se-descontinuaran
announcementImageID: ''
announcementSynopsisES: 'En 29/10, vamos a descontinuar algunos métodos de Web Service para integración con el catálogo.'
---

<div class = "alert alert-info">
El cambio descrito aquí sólo tiene impacto en su operación si su tienda utiliza integración por <b>Web Service</b> y esa integración utiliza alguno de los métodos listados abajo. De lo contrario, <b>no</b> es necesario tomar ninguna acción.
</div>

A partir del día __29 de octubre__, VTEX va a descontinuar los siguientes métodos de integración por Web Service, con el objetivo de mejorar el desempeño de la plataforma.

```
StockKeepingUnitGetAllFromUpdatedDate
StockKeepingUnitGetAllFromUpdatedDateAndId
IntegrationSettings
IntegrationErrorGetAllByErrorTypeAndId
IntegrationLogEvent
IntegrationLogError
IntegrationLog
IntegrationLogError
IntegrationInterfaceGetAll
IntegrationLogErrorInsertUpdate
IntegrationErrorCheckInstanceExists
```

De estos métodos, sólo los dos primeros tienen efecto actualmente:
- __StockKeepingUnitGetAllFromUpdatedDate__: toma todos los SKU ordenados por la fecha de actualización.
- __StockKeepingUnitGetAllFromUpdatedDateAndId__: toma todos los SKU ordenados por la fecha de actualización y el ID.

Los demás métodos listados arriba ya no tienen aplicación práctica alguna - o sea, para todos los efectos, ya están descontinuados.

Si su tienda utiliza alguno de estos métodos, debe evaluar el escenario y rehacer la solución mediante la integración a través de la API. Para ayudarle en esta tarea, preparamos una guía de integración del catálogo con servicios externos, cubriendo todos los posibles escenarios actualmente atendidos por los métodos que serán descontinuados: [Guía de Integración - Consumir información del catálogo para utilizar en un Servicio Externo](/es/tutorial/guia-de-integracion-consumir-informacion-del-catalogo-para-utilizar-en-un-servicio-externo).

- __Que va a suceder__: los métodos de servicio Web enumerados anteriormente se descontinuarán.
- __Cuando__: 29 de octubre de 2018.
- __Que necesito hacer__: Primero, identifique si su tienda usa alguno de estos métodos. Si lo usa, su tienda necesita reemplazarlos por soluciones vía API.
- __Cómo hago esto__: Lea nuestro [guía de integración del catálogo con servicios externos](/es/tutorial/guia-de-integracion-consumir-informacion-del-catalogo-para-utilizar-en-un-servicio-externo).
