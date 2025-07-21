---
title: 'Configurar condiciones de pago offline mediante MercadoPago (América Latina)'
id: 3IVvb48DeoKeWyOAwe2OME
status: PUBLISHED
createdAt: 2018-03-14T23:34:08.473Z
updatedAt: 2023-03-29T01:20:41.392Z
publishedAt: 2023-03-29T01:20:41.392Z
firstPublishedAt: 2018-03-15T00:21:34.875Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-offline-payment-conditions-using-mercadopago
locale: es
legacySlug: configurar-condiciones-de-pago-offline-mediante-mercadopago
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

<div class="alert alert-warning">
Este artículo se ocupa de las configuraciones aplicables en las tiendas que actúan en los siguientes países de América Latina: <strong>Argentina</strong>, <strong>Chile</strong>, <strong>Colombia</strong>, <strong>México</strong>, <strong>Perú</strong>, <strong>Uruguay</strong> y <strong>Venezuela</strong>.
</div>

Usted puede utilizar el Mercado Pago para ofrecer condiciones de pago offline en su tienda. Para ello, primero usted debe registrar la afiliación de gateway [MercadoPagoV1](/es/tutorial/configurar-el-subadquirente-mercadopagov1).

Después, basta con seguir los pasos abajo:

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Planes de pago__, haga clic en el botón __+__.
3. Seleccione el medio de pago __Boleto bancario__. Esta opción es compatible con todos los medios de pago offline de su país (sepa cuáles son [aquí](/es/faq/que-condiciones-de-pago-offline-estan-disponibles-en-america-latina)).
4. Haga clic en el botón __Status__ para activar esta condición de pago.
5. Si hay un antifraude configurado en su tienda, usted puede activarlo para esta condición de pago marcando la casilla __Usar Antifraude__.
6. Cambie el nombre de la condición de pago para facilitar su identificación. Recomendamos que lo haga, sobre todo si su tienda utiliza más de una.
7. También es posible configurar [condiciones especiales de pago](/es/tutorial/condiciones-especiales).
8. Haga clic en __Salva__.

Al completar estos pasos, la condición de pago offline elegida estará disponible para sus clientes en el momento del checkout en su tienda.

### Artículos relacionados
- [Configurar el subadquirente MercadoPagoV1](/es/tutorial/configurar-el-subadquirente-mercadopagov1)
- [¿Qué condiciones de pago offline están disponibles en América Latina?](/es/faq/que-condiciones-de-pago-offline-estan-disponibles-en-america-latina)
- [Configurar condiciones especiales de pago](/es/tutorial/condiciones-especiales)
