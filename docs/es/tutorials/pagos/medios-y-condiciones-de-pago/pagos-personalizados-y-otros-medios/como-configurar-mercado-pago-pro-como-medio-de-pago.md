---
title: 'Cómo configurar Mercado Pago Pro como medio de pago'
id: 520AthtalgojtTUKw0La9S
status: PUBLISHED
createdAt: 2020-11-17T17:45:31.552Z
updatedAt: 2025-11-25T00:00:00.000Z
publishedAt: 2023-03-26T21:46:46.072Z
firstPublishedAt: 2020-11-17T19:19:23.749Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slugEN: how-to-configure-mercado-pago-pro-as-a-payment-method
legacySlug: configurar-mercado-pago-pro-como-medio-de-pago
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Mercado Pago Pro es una solución de pago de la [cartera digital](https://help.vtex.com/es/docs/tutorials/que-es-una-cartera-digital) Mercado Pago. Antes de configurar la condición de pago como tal, debe asegurarse de que el subadquirente [MercadoPagoV2](https://help.vtex.com/es/docs/tutorials/configurar-el-subadquirente-mercadopagov2) esté registrado en su tienda.

## Configuración del medio de pago Mercado Pago Pro

Ahora que el subadquirente está debidamente registrado, puede realizar la configuración de Mercado Pago Pro.

Realice los siguientes pasos:

1. En [VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-install), ejecuta el comando `vtex login nombredelacuenta` para iniciar sesión.
2. Instala la aplicación __Mercado Pago Pro__ ingresando el comando `vtex install mercadopago.mercadopago-app`.
3. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o escribe __Configuración__ en la barra de búsqueda en la parte superior de la página.
4. En la pestaña __Condiciones de pago__, haz clic en el botón `+`.
5. Haz clic en la opción __MercadoPagoPro__.
6. En la pantalla de configuración, activa la condición haciendo clic en __Status__.
7. En __Proceso con proveedor__, seleccione la opción __MercadoPagoV2__.
8. Si deseas utilizar un sistema antifraude, selecciona la opción __Utilizar antifraude__.
9. Si lo deseas, también puedes [configurar condiciones de pago especiales](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456).
10. Haz clic en `Guardar`.

Después de seguir los pasos indicados, Mercado Pago Pro puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
