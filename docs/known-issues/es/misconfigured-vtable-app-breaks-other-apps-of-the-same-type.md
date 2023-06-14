---
title: 'App de VTable mal configurada rompe otras aplicaciones del mismo tipo'
id: cxsyuFBHRmG2mweiiC66Y
status: PUBLISHED
createdAt: 2019-01-03T21:10:51.083Z
updatedAt: 2022-12-22T20:45:09.551Z
publishedAt: 2022-12-22T20:45:09.551Z
firstPublishedAt: 2019-01-04T15:33:52.071Z
contentType: knownIssue
productTeam: Master Data
author: 2mXZkbi0oi061KicTExNjo
tag: Master Data
slug: app-de-vtable-mal-configurada-rompe-otras-aplicaciones-del-mismo-tipo
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Una app rota (en rojo) impide que otras aplicaciones funcionen correctamente.

Principales causas de una aplicación mal configurada:
1. JSON Schema inexistente (campo "Model" en el JSON de la aplicación);
2. Apps con el mismo nombre;
3. Discrepancia entre el JSON Schema de la entidad y los campos en el JSON de la app.

## Simulación

En el caso de un JSON Schema inexistente, coloque en el campo `model` el nombre correcto del JSON Schema.

Por ejemplo: ![Screen Shot 2019-01-03 at 19.31.53](https://images.ctfassets.net/alneenqid6w5/EVwmyhWMmGmcs2Y8wEQiw/ddbf9f821818f2c061a5f262ee43e675/Screen_Shot_2019-01-03_at_19.31.53.png)

Observe cómo el borde de la aplicación se vuelve rojo y el mensaje de error en la consola indica el error "Error to get jsonschema by name": ![Screen Shot 2019-01-03 at 19.24.22](https://images.ctfassets.net/alneenqid6w5/62I23QUXPauQGGcUcoCucK/b484536ae3e462823b7715ff52a737ea/Screen_Shot_2019-01-03_at_19.24.22.png)


## Workaround

La aplicación rota va a estar en rojo. Para resolverlo, basta con borrarla.

