---
title: 'El peso registrado en el kit vía API no es visible en la interfaz'
id: 3pXAznG51YoUquomEmaeUi
status: PUBLISHED
createdAt: 2018-08-06T22:31:30.571Z
updatedAt: 2022-12-22T20:45:12.639Z
publishedAt: 2022-12-22T20:45:12.639Z
firstPublishedAt: 2018-08-06T23:18:13.408Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: el-peso-registrado-en-el-kit-via-api-no-es-visible-en-la-interfaz
kiStatus: Backlog
internalReference: 
---

## Sumario

Aunque la API (webservice) permite el registro de cualquier valor como peso final de un kit, la interfaz de registro de SKU muestra siempre la suma del peso total de los componentes.

Al guardar el SKU por el Admin, el valor allí mostrado sobrescribirá lo que fue registrado por la API.

Esto puede generar dos tipos de escenarios no deseados: el valor registrado por la API no tiene visibilidad facilitada (divergente de la UI) o un valor por allí registrado puede ser perdido sin la intención (al guardarse otros cambios en la UI).

Por último, es necesario tener en cuenta que el checkout y el cálculo de envío se basan siempre en el valor del peso registrado para el kit, independiente de los componentes.

## Simulación

- Registrar un peso cualquiera por el método `StockKeepingUnitInsertUpdate` del Webservice en un SKU del tipo kit;
- Observar la pantalla de edición del mismo SKU, que presentará como peso la suma del valor total de los componentes.

## Workaround

El registro de un valor diferente de la suma de sus componentes es inadecuado. En una implementación de integración, siempre es necesario buscar sincronizar este peso con sus componentes.

Si no existe una integración que altere los SKUs, no hay riesgo de falta de sincronización, de modo que la interfaz administrativa garantizará el peso final del kit correctamente administrado.

