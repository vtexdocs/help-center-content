---
title: 'Error al alcanzar páginas superiores a 333 en una lista de entidades (más de 10.000 documentos)'
id: 1COJ1WZILFeFqA4XWIseYY
status: PUBLISHED
createdAt: 2023-02-27T19:29:52.721Z
updatedAt: 2023-02-27T19:29:53.278Z
publishedAt: 2023-02-27T19:29:53.278Z
firstPublishedAt: 2023-02-27T19:29:53.278Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: error-when-reaching-pages-over-333-on-a-entity-list-more-than-10000-documents
locale: es
kiStatus: Backlog
internalReference: 334407
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando la tienda tiene más de 10.000 documentos, es decir, más de 333 páginas, al intentar acceder a las últimas páginas en CRM, aparece un mensaje de error:

    VTEX - Datos Maestros: Ocorreu um erro inesperado no sistema. Por favor, inténtelo de nuevo, en caso de que el error persista mientras esté en contacto con VTEX.

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)


##

## Simulación



1. Ir a un CRM sobre una entidad con muchos datos (más de 10k documentos);
2. El error se producirá al intentar acceder a una página que recupere el documento número 10.000 o superior. Normalmente en la página 334 (10000 / 30 = 333.33 ~~ 334)



## Workaround


Si la tienda desea recuperar los datos más recientes, puede utilizar la API de desplazamiento de documentos:

- MasterData v1: https://developers.vtex.com/docs/api-reference/masterdata-api#get-/api/dataentities/-acronym-/scroll
- MasterData v2: https://developers.vtex.com/docs/api-reference/master-data-api-v2#get-/api/dataentities/-dataEntityName-/scroll

