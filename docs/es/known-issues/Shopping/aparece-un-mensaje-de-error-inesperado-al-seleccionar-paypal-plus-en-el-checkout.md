---
title: 'Aparece un mensaje de error inesperado al seleccionar PayPal Plus en el checkout'
id: 5ZxTkuVCHrFXCnpf4Q5Nb7
status: PUBLISHED
createdAt: 2019-03-20T17:56:18.673Z
updatedAt: 2022-12-22T20:49:08.399Z
publishedAt: 2022-12-22T20:49:08.399Z
firstPublishedAt: 2019-03-20T18:01:36.821Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: unexpected-error-message-is-displayed-when-selecting-paypal-plus-at-checkout
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

En el momento del checkout, si el cliente selecciona el __PayPal Plus__ como condición de pago, el mensaje _erro inesperado_ ("error inesperado") puede aparecer en la pantalla. Este es un evento raro e intermitente, pero aún así puede causar trastornos a sus clientes en un momento clave de la experiencia de compra.

La ocurrencia del error está íntimamente vinculada a los mecanismos de seguridad de los navegadores, que incluyen políticas más estrictas en relación al uso de cookies. Esto es debido a que [PayPal Plus (transparente)](/es/tutorial/configurar-paypal-plus-paypal-transparente) hace llamadas en la API del checkout (en el momento en que es elegido por el usuario) que dependen del envío de cookies, proceso que acaba bloqueado por los navegadores. Esto es lo que lleva al mensaje de "error inesperado".

## Simulación

1. En la configuración de su navegador, deshabilite la opción que permite el acceso de otros sitios a los cookies.
2. Siga el flujo normal de compra y, en el checkout de su tienda, intente realizar el pago con __PayPal Plus__.
3. Dado que el comportamiento es intermitente, es posible que usted tenga que repetir estos pasos algunas veces antes de poder ver el mensaje de error.

## Workaround

Por el momento, la única forma de resolver el problema es el propio usuario editar la configuración del navegador que está usando. Debe habilitar la opción que permite a otros sitios acceder a los cookies de la tienda en la que está realizando la compra.

Recomendamos que, en caso de que algún cliente entre en contacto con su tienda informando de este tipo de comportamiento, le indique el ajuste de las configuraciones de cookies del navegador.

