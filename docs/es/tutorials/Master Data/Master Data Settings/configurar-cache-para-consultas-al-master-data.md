---
title: 'Configurar caché para consultas al Master Data'
id: SmOSkCybOCa02Ssakca28
status: ARCHIVED
createdAt: 2018-03-01T20:30:33.229Z
updatedAt: 2020-09-28T18:43:34.113Z
publishedAt: 
firstPublishedAt: 2018-03-01T20:59:50.024Z
contentType: tutorial
productTeam: Master Data
author: authors_24
slugEN: setting-up-cache-for-queries-to-master-data
locale: es
legacySlug: configurar-cache-para-consultas-al-master-data
subcategoryId: 5tSNDlvmik8gGuKw2goW4q
---

En las configuraciones de la entidad de datos, usted puede configurar una capa de caché - ubicada en el propio Master Data - para consultas a esa entidad.

Siempre que se repita la misma consulta a esa entidad - utilizando los mismos parámetros, como filtros y campos - dentro del período definido, se entregarán los datos en caché.

Esto es importante principalmente para las entidades que se exponen a una cantidad elevada de requisiciones.

Para configurar esta capa de caché, siga los pasos abajo:
1. Entre en __Master Data__.
2. Haga clic en __Novo__ para crear una nueva entidad o en el icono de lápiz de una entidad existente si desea editarla.
3. Haga clic en la casilla de verificación __Tempo de cache para consultas paginadas__ ("Tiempo de caché para consultas paginadas") y elija el tiempo de caché para la entidad.

![cacheMD](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.jpg)

Las opciones de tiempo de caché son:
- 5 horas
- 10 horas
- 1 día
- 7 días
- 30 días
