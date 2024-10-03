---
title: 'La API de la lista de ofertas coincidentes no funciona correctamente'
id: 7mxrjTDYB8yLeKmQkB5D9h
status: PUBLISHED
createdAt: 2022-03-31T13:49:41.374Z
updatedAt: 2024-07-01T18:48:12.526Z
publishedAt: 2024-07-01T18:48:12.526Z
firstPublishedAt: 2022-03-31T13:49:42.277Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: get-matched-offers-list-api-not-working-properly
locale: es
kiStatus: No Fix
internalReference: 553456
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


La API Get Matched Offers List , documentada aquí: https://developers.vtex.com/vtex-rest-api/reference/getofferslist, no funciona correctamente cuando el usuario intenta insertar los parámetros de consulta sugeridos.

El resultado trae sólo un producto.



## Simulación



1. Utilice la API sin ningún parámetro: GET https://{accountName}.{environment}.com.br/api/offer-manager/pvt/offers
2. El resultado traerá sólo 1 producto como se esperaba.
3. Utilice el parámetro de consulta "rows": GET https://{accountName}.{environment}.com.br/api/offer-manager/pvt/offers?rows=20
4. El resultado no cambiará



## Workaround


Utilice APIs similares para obtener la información de un producto a la vez:
https://developers.vtex.com/vtex-rest-api/reference/getproductoffers

