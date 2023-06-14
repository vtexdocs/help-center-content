---
title: 'Las etiquetas title y description se omiten en template estátio'
id: 2ElYglcUPOQieoUUG6akqo
status: PUBLISHED
createdAt: 2017-09-05T20:55:36.892Z
updatedAt: 2022-12-22T20:43:24.475Z
publishedAt: 2022-12-22T20:43:24.475Z
firstPublishedAt: 2017-09-05T21:21:03.197Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog,Portal (CMS)
slug: las-etiquetas-title-y-description-se-omiten-en-template-estatio
kiStatus: Backlog
internalReference: 
---

## Sumario

En templates estáticos que no son de producto, departamento, categoría o marca las tags title y description - cuando insertadas directamente en el template - son ignoradas por el sistema.

El título default es el nombre de la carpeta de mayor nivel más el nombre del sitio web.

Ejemplo:

Website: `TiendaOnline`

Carpetas:
- `Institucional`
- `dudas-frecuentes`
           
La página `dudas-frecuentes` se quedará con el título "Institucional - TiendaOnline".

## Simulación

1. Crear una carpeta de primer nivel o inferior.
2. Colocar dentro del `<head>` las tags `<title>` y `<description>`

## Workaround

1. Cree un [control personalizado](/es/faq/para-que-serve-o-controle-customizado) de tipo HTML e inserte las tags `<title>` y `<description>`.
2. Inserte el control personalizado en el `<head>` del template estático. 

