---
title: 'Configurar pagos personalizados utilizando MercadoPago (América Latina)'
id: oqLVXpxZ4GqgosA8QQYEs
status: PUBLISHED
createdAt: 2018-03-15T13:13:15.893Z
updatedAt: 2023-03-29T01:05:12.789Z
publishedAt: 2023-03-29T01:05:12.789Z
firstPublishedAt: 2018-03-15T21:36:39.268Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-customized-payments-using-mercadopago-latin-america
legacySlug: configurar-pagos-personalizados-utilizando-mercadopago-latam
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

<div class=alert alert-warning">
Este artículo se ocupa de las configuraciones aplicables en las tiendas que actúan en los siguientes países de América Latina: **Argentina**, **Chile**, **Colombia** y **Uruguay**.
</div>

Usted puede utilizar Mercado Pago para ofrecer pagos personalizados (usando tarjetas de crédito locales) en su tienda. Para ello, primero debe registrar la afiliación de gateway [MercadoPagoV1](/es/tutorial/configurar-el-subadquirente-mercadopagov1). Después, basta con seguir los pasos abajo:

## Configurar pago personalizado (tarjetas locales de América Latina)
1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Pagos personalizados__, haga clic en uno de los botones __Configurar__ debajo de __Cobrands__.
3. Rellene los datos del formulario de acuerdo con la tarjeta elegida (consulte la información de las tarjetas de [Argentina](/es/faq/informacion-de-pagos-personalizados-de-argentina), [Chile](/es/faq/informacion-de-los-pagos-personalizados-de-chile), [Colombia](/es/faq/informacion-de-los-pagos-personalizados-de-colombia) y [Uruguay](/es/faq/informacion-de-los-pagos-personalizados-de-uruguay)).
4. Haga clic en __Guardar__.

## Configurar la condición de pago
1. Después de hacer clic en __Guardar__, se le redirige a la pantalla de configuración de la condición de pago.
2. Haga clic en el botón __Status__ para activar esta condición de pago.
3. En __Procesar con la afiliación__, elija __MercadoPagoV1__.
4. Si hay un antifraude configurado en su tienda, puede activarlo para esta condición de pago marcando la casilla __Usar Antifraude__.
5. Cambie el nombre de la condición de pago para facilitar su identificación. Recomendamos que lo haga, sobre todo si su tienda utiliza más de una.
6. Seleccione la opción __Automático__.
7. Haga clic en __Guardar__.

Al completar las dos etapas, el checkout de su tienda pasará a ofrecer el pago personalizado que usted registró.

### Artículos relacionados
- [Configurar el subadquirente MercadoPagoV1](/es/tutorial/configurar-el-subadquirente-mercadopagov1)
