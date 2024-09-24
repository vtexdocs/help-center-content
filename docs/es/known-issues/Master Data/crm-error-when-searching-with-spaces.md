---
title: 'Dificultad en buscar en el CRM por campos que contienen espacios'
id: 6Rp3IesViMyuwy8ocACYGk
status: PUBLISHED
createdAt: 2018-12-26T15:12:07.010Z
updatedAt: 2022-12-22T20:45:45.425Z
publishedAt: 2022-12-22T20:45:45.425Z
firstPublishedAt: 2018-12-26T17:33:45.886Z
contentType: knownIssue
productTeam: Master Data
author: 2mXZkbi0oi061KicTExNjo
tag: Master Data
slug: dificultad-en-buscar-en-el-crm-por-campos-que-contienen-espacios
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

El usuario recibe un mensaje de error al buscar un documento con un atributo que contenga espacio [Screen Shot 2018-12-26 at 14.38.55](//images.ctfassets.net/alneenqid6w5/6kN77jtFDOKME8UiW0acW8/e3bc9a3bcb750f30067f11befdd78fcb/Screen_Shot_2018-12-26_at_14.38.55.png)
Ejemplo: Buscando/filtrando por el campo "Ciudad" con el atributo "Rio de Janeiro" producirá un mensaje de error.




## Simulación

1.  Acceda a https://{{account}}.vtexcrm.com.br
2.  Escoja la pestaña deseada
3.  Seleccione un campo del menú desplegable.
4.  Escriba el nombre de un atributo que contenga espacios




## Workaround

![Screen Shot 2018-12-26 at 14.40.03](//images.ctfassets.net/alneenqid6w5/1LUggCuWywGosGoCOgKE2g/426a9dbd86c26f15a9db06cadb88ec46/Screen_Shot_2018-12-26_at_14.40.03.png)
Felizmente hay una alternativa simple que no necesita el uso de API.
Al hacer clic en "Todos" en el menú desplegable, la misma búsqueda puede realizarse sin causar error.

