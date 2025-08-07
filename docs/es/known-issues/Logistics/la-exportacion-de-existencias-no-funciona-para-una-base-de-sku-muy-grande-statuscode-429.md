---
title: "La exportación de existencias no funciona para una base de sku muy grande (StatusCode: 429)"
id: 6izOV1uXucJACuFH1Ehj57
status: PUBLISHED
createdAt: 2025-02-13T13:22:42.390Z
updatedAt: 2025-06-06T16:40:50.019Z
publishedAt: 2025-06-06T16:40:50.019Z
firstPublishedAt: 2025-02-13T13:22:43.550Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: la-exportacion-de-existencias-no-funciona-para-una-base-de-sku-muy-grande-statuscode-429
locale: es
kiStatus: Backlog
internalReference: 1178575
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Para los clientes que tienen una enorme base de SKUs, igual, 500k +, la exportación de inventario no funcionará. Durante el proceso de exportación, comenzará a generar `StatusCode: 429 Mensaje: Too Many Requests` en nuestros registros internos, y el correo electrónico con la hoja de cálculo nunca llegará.



##

## Simulación


En cualquier cuenta que tenga más de 500k+ SKUs, la hoja de cálculo de inventario nunca llegará al e-mail.




## Workaround



Una posible alternativa para evitar este problema es utilizar nuestras API de inventario para configurar un corredor:

Por almacén:
https://developers.vtex.com/docs/api-reference/logistics-api#get-/api/logistics/pvt/inventory/items/-skuId-/warehouses/-warehouseId-

Por SKU (Con todos los almacenes):
https://developers.vtex.com/docs/api-reference/logistics-api#get-/api/logistics/pvt/inventory/skus/-skuId-

Tenga en cuenta que este proceso a través de la API lleva mucho tiempo y lo más probable es que genere un informe de inventario obsoleto.




