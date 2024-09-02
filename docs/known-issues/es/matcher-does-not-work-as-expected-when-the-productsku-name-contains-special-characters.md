---
title: 'El comparador no funciona como se espera cuando el nombre del Producto/SKU contiene caracteres especiales'
id: 1kRjFExdSRMAJMgFgC7Bbj
status: PUBLISHED
createdAt: 2023-10-19T15:37:17.652Z
updatedAt: 2023-10-19T15:37:18.601Z
publishedAt: 2023-10-19T15:37:18.601Z
firstPublishedAt: 2023-10-19T15:37:18.601Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slug: el-comparador-no-funciona-como-se-espera-cuando-el-nombre-del-productosku-contiene-caracteres-especiales
locale: es
kiStatus: Fixed
internalReference: 736164
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al integrar productos que tienen caracteres especiales en el nombre, como `. - + # /` , Matcher da una puntuación del 50% y hace que los productos se queden en Pendiente. Con esto, los productos dependen de la aprobación manual o vía API.



##

## Simulación



1. A través de un vendedor VTEX, envía una SKU que contiene caracteres especiales en el nombre
2. En la página SKU Recibida, observa que la SKU en cuestión tendrá una puntuación del 50%, en la pestaña Pendiente



## Workaround


Para resolver el escenario se indica que el vendedor cambie el SKU/nombre del producto, eliminando los caracteres especiales. Si esto no es posible, el marketplace puede utilizar la API https://developers.vtex.com/docs/api-reference/marketplace-apis#put-/api.vtex.com/-accountName-/suggestions/matches/action/-actionName- para hacer coincidir los productos





