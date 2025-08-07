---
title: 'Cómo configurar Mercado Pago Pro como medio de pago'
id: 520AthtalgojtTUKw0La9S
status: PUBLISHED
createdAt: 2020-11-17T17:45:31.552Z
updatedAt: 2023-03-26T21:46:46.072Z
publishedAt: 2023-03-26T21:46:46.072Z
firstPublishedAt: 2020-11-17T19:19:23.749Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slugEN: how-to-configure-mercado-pago-pro-as-a-payment-method
locale: es
legacySlug: configurar-mercado-pago-pro-como-medio-de-pago
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Mercado Pago Pro es una solución de pago de la [cartera digital](/es/tutorial/que-es-una-cartera-digital--4v5wcOe4A0SiaimWM2cU60) Mercado Pago.

Para ofrecerlo como medio de pago en SmartCheckout a sus consumidores, primero debe registrar una afiliación de Gateway y, posteriormente, configurar Mercado Pago Pro como un medio de pago.

Antes de configurar la condición de pago como tal, debe asegurarse de que los subadquirentes MercadoPagoV1 o MercadoPagoV2 ya estan registrados en su tienda.

Si es necesario, acceda a los enlaces a continuación para registrar a los subadquirentes:

- [MercadoPagoV1](/es/tutorial/configurar-el-subadquirente-mercadopagov1--6wTlR3UTJe6YMAsEuquO26)
- [MercadoPagoV2](/es/tutorial/configurar-el-subadquirente-mercadopagov2--1y6k8lCSzJYfPs2yObNFo4)

## Configuración del medio de pago Mercado Pago Pro

Ahora que el subadquirente está debidamente registrado, puede realizar la configuración de Mercado Pago Pro.

Realice los siguientes pasos:

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. Asegúrese de que está en la pestaña __Condiciones de pago__.
3. Al lado de la barra de búsqueda, haga clic en el __botón verde «+»__.
4. En la sección «Otro», haga clic en la opción __MercadoPagoPro__.
5. En la parte superior de la página, complete el campo __Nombre de la Regla__.
6. Debajo, haga clic en el botón __Status__ para activar la regla.
7. En «Proceso con la afiliación», seleccione la opción __MercadoPagoV1__ o __MercadoPagoV2__.
8. Si es necesario, haga clic en la casilla de selección __«Usando Antifraude»__.

Al lado derecho de la pantalla, es posible configurar las [condiciones especiales de pago](/es/tutorial/condiciones-especiales--tutorials_456).

Sin embargo, esa etapa es opcional. Usted puede hacer clic directamente en el __botón azul «Salvar»__ para finalizar la configuración del medio de pago.

<div class="alert alert-warning">
<strong>Recuerde:</strong> las nuevas condiciones de pago pueden llevar hasta 10 minutos para ser mostrados en SmartCheckout.
</div>
