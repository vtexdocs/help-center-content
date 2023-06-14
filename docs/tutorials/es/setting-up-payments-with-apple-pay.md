---
title: 'Configurar pagos con Apple Pay'
id: 5L3NWMgvdKswWQa6eIc008
status: PUBLISHED
createdAt: 2018-04-12T20:38:42.521Z
updatedAt: 2023-03-26T21:54:30.284Z
publishedAt: 2023-03-26T21:54:30.284Z
firstPublishedAt: 2018-05-23T19:26:11.000Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-pagos-con-apple-pay
legacySlug: configurar-pagos-con-apple-pay
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Sus clientes pueden comprar con Apple Pay, la [cartera digital](/es/faq/que-es-una-cartera-digital) de Apple. Para ello, usted necesita cumplir algunos requisitos:

- Tener cuenta en `developer.apple.com`.
- Tener contrato con un gateway que procese pagos con Apple Pay.

<div class="alert alert-warning">
  Actualmente, Apple Pay solo funciona en los sistemas operativos MacOs e IOS, y en el navegador Safari. Para obtener más información, vaya a <a href="https://support.apple.com/es-es/HT208531">Dispositivos compatibles con Apple Pay</a>.
</div>

Con los requisitos cumplidos, basta con seguir los pasos abajo para ofrecer esta condición de pago en su tienda:

## Configurar la afiliación de gateway
Ofrecer condiciones de pago a los clientes de su tienda depende de afiliaciones de gateway capaces de procesarlas. En la plataforma VTEX, las afiliaciones actualmente compatibles con el __Apple Pay__ son la __ERedeREST__ (integración de la adquirente Rede), __Adyen__ y __Stripe__.

Estos artículos muestran cómo configurar [ERedeREST](/es/tutorial/configurar-adquirente-rede-con-erederest), [Adyen](/es/tutorial/como-configurar-el-gateway-adyen-en-vtex) y [Stripe](https://help.vtex.com/es/tutorial/configuring-stripe-gateway-affiliation--fwF2wk2FQKrODrWWkvSLO).   

Pero recuerde: es fundamental [registrar el Merchant ID en Apple Pay](https://developers.vtex.com/vtex-rest-api/docs/setting-up-merchant-id-in-apple-pay) antes de configurar la afiliación de gateway.

## Descargar e instalar la aplicación de VTEX App Store
1. En el menú lateral del Admin, haga clic en __Apps__.
2. Acceda al enlace __VTEX App Store__ o utilice la URL `https://apps.vtex.com/?an={{AccountName}}` directo en el navegador, cambiando `{{AccountName}}` por el nombre de la tienda en que desea ofrecer el Apple Pay.
3. Busque la aplicación __Apple Pay__ y haga clic en __Get__.
4. Se dirigirá a una pantalla de revisión de pedido. Compruebe los datos y haga clic en el botón __Confirm order and begin installation__.
5. Usted llegará a la pantalla de instalación. Allí, puede revisar los permisos de la aplicación e iniciar la descarga (haciendo clic en __Instalar__).
6. La aplicación se instalará en su workspace, pero usted tendrá que rellenar el __Merchant ID__ (en el campo __Merchant Identifier__) para aplicar en su tienda.
7. Haga clic en __Guardar__.

## Configurar la condición de pago de Apple Pay
1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. Haga clic en la pestaña __Planes de pago__ y, a continuación, en el botón __+__.
3. Seleccione el medio de pago __Apple Pay__.
4. Haga clic en el botón __Status__ para activar esta condición de pago.
5. En el campo __Procesar con la afiliación__, seleccione la opción que se va a utilizar para procesar los pagos.
6. Si hay un antifraude configurado en su tienda, usted puede activarlo para esta condición de pago marcando la casilla __Usar Antifraude__.
7. Elija si desea que los pagos se realicen en efectivo o parcelados.
8. Si lo desea, también puede optar por una [condición especial de pago](/es/tutorial/condiciones-especiales).
9. Haga clic en __Guardar__.

Después de seguir los pasos indicados, __Apple Pay__ aparecerá en el checkout de su tienda como una opción de pago para sus clientes.

### Artículos relacionados
- [Configurar adquirente Rede con ERedeRest](/es/tutorial/configurar-adquirente-rede-con-erederest)
- [Configurar el gateway Adyen en VTEX](/es/tutorial/como-configurar-el-gateway-adyen-en-vtex)
- [Configurar Merchant ID en Apple Pay](https://developers.vtex.com/vtex-rest-api/docs/setting-up-merchant-id-in-apple-pay)
- [Configurar condiciones especiales de pago](/es/tutorial/condiciones-especiales)
- [¿Qué es una cartera digital (e-wallet)?](/es/faq/que-es-una-cartera-digital)
