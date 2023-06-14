---
title: 'Configurar el PagSeguro V3'
id: 5Noi1mUbBQ6CyqdeDQtWfw
status: PUBLISHED
createdAt: 2021-12-02T12:14:58.698Z
updatedAt: 2023-03-23T15:40:31.170Z
publishedAt: 2023-03-23T15:40:31.170Z
firstPublishedAt: 2021-12-02T19:18:21.251Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-el-pagseguro-v3
locale: es
legacySlug: configurar-el-pagseguro-v3
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Si tiene una cuenta PagSeguro, puede configurar PagSeguroV3 en el gateway de VTEX para recibir pagos mediante: boleto, PIX, tarjetas de débito y crédito.

## Configurar afiliación de gateway PagseguroV3

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Afiliaciones__, haga clic en el __botón “+”__.
3. Haga clic en el conector __PagSeguroV3__.
4. En __Click to authorize VTEX to make payments__, haga clic en __Autorizar__. En este momento, será redirigido a la página de PagSeguro, donde deberá acceder a sua cuenta, y autorizar la conexión de VTEX en su cuenta de PagSeguro.
5. Después de autorizar, regresará automáticamente al Admin VTEX, y los campos __Application Key__, __Application Token__ y __Application Id__ fya estarán completados.
6. Haga clic en __Salva__.

## Configurar condición de pago
Después de seguir los pasos indicados, PagSeguroV3 estará configurado en su tienda. Así, cuando vaya a registrar una condición de pago, va a estar disponible en el campo __Procesar con la afiliación__ (desde que el medio de pago sea compatible con PagSeguroV3).

Para saber cómo definir condiciones de pago, acceda a [Configurar condiciones de pago](https://help.vtex.com/es/tutorial/condicoes-de-pagamento#).
