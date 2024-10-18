---
title: 'La API de promoción de múltiples Sku no funciona'
id: 38CLe2oIWHGNgjL4L0uIxz
status: PUBLISHED
createdAt: 2023-01-09T21:18:05.077Z
updatedAt: 2024-10-04T16:48:08.291Z
publishedAt: 2024-10-04T16:48:08.291Z
firstPublishedAt: 2023-01-09T21:18:05.807Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: multiple-sku-promotion-api-not-working
locale: es
kiStatus: No Fix
internalReference: 729990
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


A pesar de la información de retorno de éxito en las API y el correo electrónico, la promoción no se ha creado en el administrador (crear API) o actualizado (actualizar API).

Documentación de la API:
https://developers.vtex.com/docs/api-reference/promotions-and-taxes-api#post-/api/rnb/pvt/import/calculatorConfiguration
https://developers.vtex.com/docs/api-reference/promotions-and-taxes-api#put-/api/rnb/pvt/import/calculatorConfiguration/-promotionId-


##

## Simulación



1. Siguió los pasos en los documentos mencionados anteriormente para crear / actualizar múltiples sku promoción;
2. 2. Recibí un correo electrónico de confirmación sobre la creación de la promoción o un código de estado de éxito en la API, como 202.
3. 3. Comprobar en el administrador que la promoción nunca fue creada/actualizada.



## Workaround


No hay solución.




