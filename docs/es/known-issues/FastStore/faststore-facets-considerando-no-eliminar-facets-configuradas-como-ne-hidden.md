---
title: 'Faststore facets considerando no eliminar facets configuradas como ne hidden'
id: 4EElvOEvMzcu52fhNOVJGM
status: PUBLISHED
createdAt: 2024-05-08T18:35:17.015Z
updatedAt: 2024-05-08T18:36:15.922Z
publishedAt: 2024-05-08T18:36:15.922Z
firstPublishedAt: 2024-05-08T18:35:18.742Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: faststore-facets-considering-not-removing-facets-set-to-ne-hidden
locale: es
kiStatus: Backlog
internalReference: 1029837
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



El comportamiento esperado en la API de facetas IS es no traer facetas con hidden true, pero, hay algunas excepciones para eso, por ejemplo cuando la faceta es seleccionada en la consulta, la API trae la faceta en los resultados con la prop hidden como true, y no estamos considerando esta información



## Simulación



Filtro para una consulta con la faceta oculta, como por ejemplo:

https://storeframework.vtex.app/new-collection?productclusternames=new-collection&fuzzy=0&operator=and&facets=productclusternames%2Cfuzzy%2Coperator&sort=score_desc&page=0

En este caso, productClusterNames está oculto pero, como se está filtrando, aparece en el navegador de filtros



## Workaround


N/A




