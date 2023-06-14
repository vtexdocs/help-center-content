---
title: 'Consultas al Master Data vía ruta Scroll'
id: tutorials_4631
status: DRAFT
createdAt: 2017-04-27T21:49:43.180Z
updatedAt: 2022-10-17T20:09:11.259Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:11:18.176Z
contentType: tutorial
productTeam: Post-purchase
author: authors_64
slug: consultas-al-master-data-via-ruta-scroll
locale: es
legacySlug: consultas-al-master-data-via-ruta-scroll
subcategory: WpbGhubuRZaNZilJSXnqu
---

Para hacer consultas al Master Data, puede usarse la ruta `search`, más antigua, y `scroll`, desarrollada posteriormente. El objetivo de este artículo es explicar las principales diferencias entre las dos y detallar el funcionamiento de la ruta `scroll`.

La ruta `search` es muy utilizada para consultas paginadas. Y debe seguir así. Sin embargo, cuanto mayor sea el intervalo de documentos, más lenta será la consulta.

Para obtener una mejor performance en escenarios como éste, hay que realizar un filtro. Disminuir la cantidad de documentos del resultado final es el mejor camino para que pueda ejecutarse la consulta con más eficiencia.

- La ruta `search` es la mejor solución para los escenarios en los que necesitamos buscar una colección de documentos directamente en la tienda.
- La ruta `scroll` fue desarrollada para atender a los escenarios de integraciones externas. Si su necesidad es consultar **toda la base** del VTEX Master Data o si su colección de documentos es **mayor de 10 mil**, utilice este recurso.

### ¿Cómo funciona la ruta scroll?

Primero, usted hará una consulta en la ruta `scroll` utilizando los mismos recursos de filtración de la ruta `search`. En la respuesta a su primer request, será obtenido un token en el header `X-VTEX-MD-TOKEN`.

Utilice ese token para los próximos requests hasta que retorne una lista vacía.

### Limitaciones

1. Está permitida solamente una operación a la vez. Esto significa que cuando usted reciba un token en el primer request, necesitará terminar la consulta o esperar el tiempo de expiración del token;
2. El tiempo de expiración es de 20 minutos. Si el VTEX Master Data para de recibir requests con el token, éste expirará en 20 minutos y estará apto a recibir nuevas solicitudes del tipo `scroll`;
3. La cantidad máxima de documentos por request es de **mil**.

Para más detalles, vea nuestra [documentación de APIs del MasterData](https://developers.vtex.com/reference/master-data-api-v1-overview).
