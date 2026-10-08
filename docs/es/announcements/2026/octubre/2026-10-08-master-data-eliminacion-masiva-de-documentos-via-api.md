---
title: 'Master Data: eliminación en masa de documentos por API'
createdAt: 2026-10-08T00:00:00.000Z
updatedAt: 2026-10-08T00:00:00.000Z
contentType: updates
productTeam: Master Data
slugEN: 2026-10-08-master-data-bulk-document-deletion-via-api
locale: es
announcementSynopsisES: 'En beta abierta, es posible eliminar en masa todos los documentos de una entidad de datos de Master Data que coincidan con un filtro, lo que reduce el volumen facturado de almacenamiento.'
tags:
  - Nueva funcionalidad
  - Master Data
---

Las tiendas VTEX ahora cuentan con la eliminación en masa de documentos de [Master Data](/es/docs/tutorials/master-data) por API. Esta función está en beta abierta. Con el nuevo recurso, puedes remover de una sola vez todos los documentos de una [entidad de datos](/es/docs/tutorials/data-entity) que cumplan con un filtro.

## ¿Qué cambió?

Antes, la única forma de eliminar documentos era recorrer la entidad de datos y borrar un documento a la vez, lo que hacía que la limpieza de grandes volúmenes fuera lenta y propensa a errores. Ahora, una única solicitud de API inicia un proceso asíncrono que elimina todos los documentos que coinciden con el filtro indicado. Este recurso se encuentra disponible para entidades de datos de Master Data v1 y v2.

> ❗ La eliminación en masa es permanente y los documentos eliminados no se pueden recuperar. Antes de iniciar la eliminación, consulta cuántos documentos selecciona tu filtro.

## ¿Por qué cambió?

El uso de [entidades de datos personalizadas](/es/docs/tutorials/master-data#entidades-de-datos-personalizadas) se factura mensualmente, en rangos que varían según el volumen total de documentos almacenados. Eliminar los documentos por API es la única forma de reducir ese volumen, ya que borrar una entidad de datos desde la interfaz de Master Data v1 no elimina los documentos ya almacenados.

## ¿Qué se necesita hacer?

No es necesaria ninguna acción. Cuando necesites reducir el volumen de documentos almacenados en tu tienda, el equipo de desarrollo responsable de tu operación puede ejecutar la eliminación en masa mediante la API.

## Más información

* [Deleting documents in bulk in Master Data](https://developers.vtex.com/docs/guides/deleting-documents-in-bulk-in-master-data)
* [Master Data](/es/docs/tutorials/master-data)
* [Consultar el uso de Master Data en el Admin VTEX](/es/docs/tutorials/checking-master-data-usage-in-the-vtex-admin)
* [La facturación de Master Data no disminuyó después de eliminar una entidad de datos](/es/docs/tutorials/master-data-billing-did-not-decrease-after-deleting-a-data-entity)
