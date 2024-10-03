---
title: 'La página de nuevas colecciones no se carga'
id: 4sANd9Oah8a90vkgGmCddj
status: PUBLISHED
createdAt: 2022-11-01T09:33:20.028Z
updatedAt: 2022-11-25T21:42:19.038Z
publishedAt: 2022-11-25T21:42:19.038Z
firstPublishedAt: 2022-11-01T09:33:20.722Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: new-collections-page-not-loading
locale: es
kiStatus: Backlog
internalReference: 419729
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


La cuenta no ha podido cargar la página de la aplicación de colecciones, la petición `api/catalog_system/pvt/collection/search/?an=&page=1&pageSize=10&orderByAsc=false` ha devuelto 500, debido al tiempo de espera:


    "Execution Timeout Expired. El período de tiempo de espera transcurrió antes de la finalización de la operación o el servidor no responde".




## Simulación


- Ir a `/admin/collections`



## Workaround


- Gestionar las colecciones mediante un CMS heredado o utilizando la API.

