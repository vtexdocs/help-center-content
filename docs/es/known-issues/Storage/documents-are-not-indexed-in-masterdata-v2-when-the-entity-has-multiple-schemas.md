---
title: 'Los documentos no se indexan en masterdata v2 cuando la entidad tiene varios esquemas'
id: bjjbd2AmtCBSdQGRqYz51
status: PUBLISHED
createdAt: 2024-08-08T13:44:12.920Z
updatedAt: 2024-08-08T13:44:14.192Z
publishedAt: 2024-08-08T13:44:14.192Z
firstPublishedAt: 2024-08-08T13:44:14.192Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slug: los-documentos-no-se-indexan-en-masterdata-v2-cuando-la-entidad-tiene-varios-esquemas
locale: es
kiStatus: Backlog
internalReference: 1077981
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando una entidad masterdata v2 tiene muchos esquemas, sufre problemas de indexación y algunos documentos no son devueltos en la búsqueda.


##

## Simulación



1. Compruebe si la entidad tiene varios esquemas (normalmente +50 esquemas). Cree un nuevo documento, por ejemplo, utilizando el campo email=test@test.com
2. Buscar documentos (utilizando _where=email=test@test.com)
3. Compruebe que no se devuelve este documento porque no estaba indexado.
4. Al utilizar la ruta Obtener documentos, el documento se devuelve normalmente.



## Workaround


Abra un ticket al equipo solicitando la reindexación de la entidad.





