---
title: 'El sitemap no se genera'
id: 1tJ4XHtbnFsfS30JWXwxb0
status: PUBLISHED
createdAt: 2023-05-17T13:58:46.443Z
updatedAt: 2023-05-17T13:58:47.102Z
publishedAt: 2023-05-17T13:58:47.102Z
firstPublishedAt: 2023-05-17T13:58:47.102Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: el-sitemap-no-se-genera
locale: es
kiStatus: Backlog
internalReference: 827104
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Hay dos escenarios en los que no se está generando el mapa del sitio:
1 - Cuando tenemos un producto no encontrado o con algún tipo de problema en el catálogo no se genera el sitemap. Puede buscar los logs en OpenSearch, en este caso, para comprobar qué producto tiene un problema;
2 - Cuando la cuenta tiene la aplicación `search.resolver@1.x` el mapa del sitio puede tener errores cuando:
          - una categoría tiene su primer producto procedente de una categoría similar;
          - la página de búsqueda/marca/categoría no tiene productos, en este caso, la página no se indexa en el sitemap, y su generación se bloquea


##

## Simulación


Intente generar el mapa del sitio para una cuenta que tenga uno de los escenarios descritos anteriormente y se bloqueará



## Workaround


 - Crear un nuevo espacio de trabajo
 - Instale el `search-resolver@0.x`
 - Generar el nuevo mapa del sitio
 - Promoverlo a maestro
 Pero eventualmente, necesitará arreglar el escenario que impide que se genere el mapa del sitio




