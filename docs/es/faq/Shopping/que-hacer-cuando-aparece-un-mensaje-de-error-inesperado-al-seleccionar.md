---
title: 'Qué hacer cuando aparece un mensaje de error inesperado al seleccionar PayPal Plus en el checkout'
id: 2eyMuEf6wsWuOgrjo7tzQH
status: ARCHIVED
createdAt: 2019-03-18T14:01:50.694Z
updatedAt: 2024-02-19T17:41:00.925Z
publishedAt: 
firstPublishedAt: 2019-03-18T14:10:08.064Z
contentType: frequentlyAskedQuestion
productTeam: Shopping
author: 245tA425AIeioKAk2eaiwS
slugEN: what-to-do-when-an-unexpected-error-message-appears-while-selecting-paypal-plus-at-checkout
locale: es
legacySlug: que-hacer-cuando-aparece-un-mensaje-de-error-inesperado-al-seleccionar
---

En el checkout, si el cliente selecciona el __PayPal Plus__ como condición de pago, el mensaje _erro inesperado_ ("error inesperado") puede aparecer en la pantalla. Este es un evento raro e intermitente, pero aún así puede causar trastornos a sus clientes en un momento clave de la experiencia de compra.


## ¿Por qué sucede esto?
Los navegadores están ganando cada vez más mecanismos de seguridad para proteger la información de los usuarios. Esto incluye políticas más estrictas en relación al uso de cookies.

Algunas condiciones de pago, como [PayPal Plus (transparente)](/es/tutorial/configurar-paypal-plus-paypal-transparente), hacen llamadas en la API del checkout que dependen del envío de cookies. Este envío puede ser bloqueado por la configuración de seguridad de los navegadores, lo que genera errores en la interfaz.


## Como resolver
Por el momento, la única forma de resolver el problema es el propio usuario editar la configuración del navegador que está usando. Debe habilitar la opción que permite a otros sitios acceder a los cookies de la tienda en la que está realizando la compra.

Recomendamos que, en caso de que algún cliente entre en contacto con su tienda informando de este tipo de comportamiento, le indique el ajuste de las configuraciones de cookies del navegador.
