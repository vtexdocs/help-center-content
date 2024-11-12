---
title: 'Cómo configurar campos adicionales en el carrito de inStore'
id: CDIG0jT2ak6eCOGKgOc0i
status: ARCHIVED
createdAt: 2017-08-14T23:05:34.624Z
updatedAt: 2022-09-16T17:09:43.790Z
publishedAt: 
firstPublishedAt: 2017-08-14T23:19:38.584Z
contentType: tutorial
productTeam: Shopping
author: 3uCjaRpzeMieQWwWycYAMG
slugEN: how-to-configure-extra-fields-in-instore-cart
locale: es
legacySlug: como-configurar-campos-adicionales-en-el-carrito-de-instore
subcategoryId: 4T6qfa6gNO6g4sAUIa6s2G
---

La configuración de campos extra en el carrito inStore permite utilizar las especificaciones del producto en el proceso de emisión de la factura del pedido.

Para crear los campos adicionales, siga los pasos a continuación:

1. Verifique la configuración actual de la tienda a través del request GET en el endpoint [Get orderForm configuration](https://developers.vtex.com/vtex-rest-api/reference/getorderformconfiguration). Guarde la información JSON recebida del request.

Ejemplo utilizado para la tienda "inStore":
![2017-08-14 20 12 34-Postman](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)
    2. Hacer un request POST usando el endpoint [Update orderForm configuration](https://developers.vtex.com/vtex-rest-api/reference/updateorderformconfiguration) con los mismos datos JSON guardados y agregue los campos adicionales (`fields`) con la información dentro de la propiedad `apps`.

Ejemplo de request POST:

![2017-08-14 20 11 18-Postman](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)
