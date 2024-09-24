---
title: 'VBase responde 404 a vtex.pages-graphql'
id: 1uoRka5Jwkvk5EQhmffyMO
status: PUBLISHED
createdAt: 2023-05-09T13:50:40.063Z
updatedAt: 2023-06-12T14:57:55.479Z
publishedAt: 2023-06-12T14:57:55.479Z
firstPublishedAt: 2023-05-09T13:50:40.632Z
contentType: knownIssue
productTeam: Apps
author: 2mXZkbi0oi061KicTExNjo
tag: Apps
slugEN: vbase-responds-404-to-vtexpagesgraphql
locale: es
kiStatus: Backlog
internalReference: 822031
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


VBase está respondiendo 404 a la aplicación vtex.pages-graphql instalada en la cuenta, por alguna razón, la aplicación no está siendo encontrada y, como consecuencia, el comprador se verá impactado al no poder acceder a un producto o página específica en la tienda. Este error 404 se almacena en caché durante 2 horas, por lo que el problema suele cesar una vez finalizado el almacenamiento en caché. El problema es intermitente y aún no hemos podido encontrar la razón por la que se produce.

Informe de incidencia: https://io.vtex.com.br/incident-report/2023-04-04-VTEX-IO-Intermittent-Pageload-Failures.pdf


##

## Simulación


Es difícil de simular porque es intermitente y no hay una página o producto específico. Normalmente se puede reproducir cuando se navega por la tienda y de repente un producto o página al azar no se carga completamente. Una vez que recargues la página el problema se resolverá solo.



## Workaround


N/A





