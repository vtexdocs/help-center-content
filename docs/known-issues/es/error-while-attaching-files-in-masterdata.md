---
title: Error al adjuntar archivos en MasterData
id: 2NkotRVyvWA3OHdxizCYgY
status: PUBLISHED
createdAt: 2019-02-15T18:42:41.461Z
updatedAt: 2022-12-22T20:48:50.909Z
publishedAt: 2022-12-22T20:48:50.909Z
firstPublishedAt: 2019-02-15T18:44:53.354Z
contentType: knownIssue
productTeam: Master Data
author: 2mXZkbi0oi061KicTExNjo
tag: Master Data
slug: error-al-adjuntar-archivos-en-masterdata
kiStatus: Backlog
internalReference: 
---

## Sumario

El usuario recibe el mensaje de error "Ocorreu um erro e o arquivo não foi salvo" ("Se ha producido un error y el archivo no se guardó") al intentar adjuntar un archivo manualmente por el CRM que supere 5 MB en tamaño.

## Simulación

- Cree un campo de tipo `file`;
- Acceda al CRM;
- Adjunte manualmente el archivo.

## Workaround

Recomendamos el uso de otro servicio para almacenar archivos de más de 5 MB.

Recordamos que MasterData V2 no es compatible con el campo de tipo attachment.

