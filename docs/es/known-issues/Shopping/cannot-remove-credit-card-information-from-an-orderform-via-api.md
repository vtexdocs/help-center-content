---
title: 'No se puede eliminar la información de la tarjeta de crédito de un orderForm vía API'
id: 2EEKXZk35YE9nb0L3A8TUF
status: PUBLISHED
createdAt: 2021-09-13T23:41:59.223Z
updatedAt: 2022-12-22T20:41:11.317Z
publishedAt: 2022-12-22T20:41:11.317Z
firstPublishedAt: 2021-09-13T23:45:57.194Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: no-se-puede-eliminar-la-informacion-de-la-tarjeta-de-credito-de-un-orderform-via-api
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

No es posible eliminar la información de la tarjeta de crédito de un [`orderForm`](https://developers.vtex.com/vtex-rest-api/reference/checkout-api-overview) a través de la ruta `/api/checkout/pub/orderForm/{orderFormId}/paymentAccount/{accountId}/remove` si se utiliza `appKey`/`appToken` como credenciales.

Cuando una `appKey` que tiene los [permisos](https://help.vtex.com/pt/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#) adecuados realiza una solicitud para esta ruta, la API devuelve un error con el `status 500`:
«Attempted to perform an unauthorized operation.»

Observe que no se trata de un error con `status 403`, como es habitual en las fallas de autorización.

## Simulación

1. [Cree un orderForm;](https://developers.vtex.com/vtex-rest-api/reference/shopping-cart#newshoppingcart)
2. [Ingrese el email de un cliente](https://developers.vtex.com/vtex-rest-api/reference/cart-attachments#addclientprofile) que tenga una tarjeta de crédito guardada en su perfil;
3. Intente eliminar la información de la tarjeta de crédito utilizando la ruta de API mencionada, autenticando la solicitud con el `appKey`/`appToken`;
4. Observe el mensaje de error y compruebe que la información de la tarjeta no ha sido eliminada.

## Workaround

No hay ningún workaround para este escenario.

