---
title: 'La facturación de Master Data no disminuyó después de eliminar una entidad de datos'
createdAt: '2026-08-07T00:00:00.000Z'
updatedAt: '2026-08-07T00:00:00.000Z'
contentType: tutorial
productTeam: Master Data
slugEN: master-data-billing-did-not-decrease-after-deleting-a-data-entity
locale: es
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
domainFilters:
  - Master Data
  - Admin
symptomFilters:
  - Interrupción del flujo
---

Después de eliminar una [entidad de datos](/es/docs/tutorials/entidade-de-dados) mediante la interfaz de Master Data v1, esperas que el volumen facturado mensualmente disminuya, pero esto no ocurre.

Este problema ocurre porque la eliminación de una entidad de datos mediante la interfaz no elimina los documentos (registros) ya almacenados en ella. Esos documentos siguen siendo contabilizados en la facturación mensual hasta que se eliminan mediante la API.

## Solución

Para resolver este problema, sigue los pasos que se detallan a continuación:

1. [Elimina los documentos de la entidad mediante la API](#elimina-los-documentos-de-la-entidad-mediante-la-api): elimina los registros almacenados para que dejen de contabilizarse en la facturación.
2. [Confirma la reducción en el dashboard de uso de Master Data](#confirma-la-reduccion-en-el-dashboard-de-uso-de-master-data): verifica si la cantidad de documentos disminuyó después de la eliminación.

### Elimina los documentos de la entidad mediante la API

Sigue las instrucciones de la guía [Deleting documents in Master Data v1](https://developers.vtex.com/docs/guides/deleting-documents-in-master-data-v1) para eliminar los documentos almacenados en la entidad de datos. Solo esta eliminación mediante la API reduce el volumen contabilizado en la facturación mensual.

### Confirma la reducción en el dashboard de uso de Master Data

Después de eliminar los documentos, accede al dashboard [Master Data usage](/es/docs/tutorials/consultar-el-uso-de-master-data-en-el-admin-vtex) en el Admin VTEX para confirmar que la cantidad de documentos de la entidad disminuyó.

Si la facturación continúa sin cambios después de eliminar los documentos, comunícate con [Soporte](/es/docs/tutorials/como-funciona-el-soporte-de-vtex).
