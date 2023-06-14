---
title: 'GET Category Tree API con caché interno'
id: 4HZBeY6dv2fsCQXuZJKiSg
status: PUBLISHED
createdAt: 2022-06-21T14:53:59.237Z
updatedAt: 2022-11-25T21:45:23.612Z
publishedAt: 2022-11-25T21:45:23.612Z
firstPublishedAt: 2022-06-21T14:53:59.764Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: get-category-tree-api-con-cache-interno
kiStatus: Backlog
internalReference: 480892
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La API GET Árbol de Categorías tiene una caché interna. Cuando se realiza una petición utilizando el dominio interno de VTEX y luego, se realiza la misma petición utilizando el dominio del cliente, la primera petición se almacenará en la caché y en la respuesta de la segunda petición, realizada utilizando el dominio del cliente, devolveremos las URL de las categorías con el dominio interno de VTEX.



## Simulación


- Haga la primera solicitud utilizando el dominio interno de VTEX, por ejemplo:

    curl --location -g --request GET 'https://.vtexcommercestable.com.br/api/catalog_system/pub/category/tree/3/'
    --header 'Content-Type: application/json'

- Haz la segunda petición utilizando el dominio del cliente, por ejemplo

    curl --location -g --request GET 'https://www.clientdomain.com.br/api/catalog_system/pub/category/tree/3/' \N -header 'Content-Type: application/json'.
    --header 'Content-Type: application/json'




## Workaround


- No llame a la API GET Category Tree utilizando el dominio interno de la cuenta VTEX.

