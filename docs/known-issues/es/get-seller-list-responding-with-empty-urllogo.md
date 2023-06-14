---
title: Get seller List respondiendo con un UrlLogo vacío
id: 1kKsre07DDa56hsEgXnYCz
status: PUBLISHED
createdAt: 2022-02-25T13:28:50.337Z
updatedAt: 2022-11-25T21:42:53.617Z
publishedAt: 2022-11-25T21:42:53.617Z
firstPublishedAt: 2022-02-25T13:28:50.846Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: get-seller-list-respondiendo-con-un-urllogo-vacio
kiStatus: Fixed
internalReference: 387508
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente, la ruta `/api/catalog_system/pvt/seller/list` responde con una propiedad UrlLogo vacía para todos los vendedores, independientemente de que tengan un archivo de logotipo válido o no.




## Simulación


1) En un vendedor, intente insertar un archivo de logotipo a través de la API: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-seller#catalog-api-put-seller

2) Compruebe la respuesta de, concretamente la API getSellerList https://developers.vtex.com/vtex-rest-api/reference/catalog-api-seller#catalog-api-get-seller-list.

La propiedad del logotipo de la URL no se actualizará, a pesar de los datos enviados en la carga útil. (La API get seller, para obtener los datos de un vendedor individual, sigue funcionando como es debido: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-seller#catalog-api-get-seller)






## Workaround


Recuperar los datos de los vendedores individuales (obtener el vendedor por el ID: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-seller#catalog-api-get-seller ).

