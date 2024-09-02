---
title: 'Configurar pagos con Apple Pay'
id: 5L3NWMgvdKswWQa6eIc008
status: PUBLISHED
createdAt: 2018-04-12T20:38:42.521Z
updatedAt: 2024-06-25T21:20:56.252Z
publishedAt: 2024-06-25T21:20:56.252Z
firstPublishedAt: 2018-05-23T19:26:11.000Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-pagos-con-apple-pay
locale: es
legacySlug: configurar-pagos-con-apple-pay
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Sus clientes pueden comprar con Apple Pay, la [cartera digital](/es/faq/que-es-una-cartera-digital) de Apple. Para ello, usted necesita cumplir algunos requisitos:

- Tener cuenta en `developer.apple.com`.
- Tener contrato con un gateway que procese pagos con Apple Pay.

<div class="alert alert-warning">
  Actualmente, Apple Pay solo funciona en los sistemas operativos MacOs e IOS, y en el navegador Safari. Para obtener más información, vaya a <a href="https://support.apple.com/es-es/HT208531">Dispositivos compatibles con Apple Pay</a>.
</div>

## Configurar proveedor de pago

En primer lugar, debes configurar un proveedor en el Admin de tu tienda que procese transacciones con Apple Pay, como [Adyen](https://help.vtex.com/es/tutorial/configurar-pagos-con-adyenv3--7xAz67E2Eg63LWCQNjVdwv) y [Stripe](https://help.vtex.com/es/tutorial/configurar-la-afiliacion-stripe--fwF2wk2FQKrODrWWkvSLO).

Para consultar todas las opciones de proveedores disponibles para este método de pago, acceda a la lista como se describe en el Paso 5 de la sección [Configurar el pago con Apple Pay](#configurar-el-pago-con-apple-pay).

<div class="alerta alerta-advertencia">
  Antes de comenzar a configurar el proveedor, debe <a href="register your Merchant ID with Apple Pay">registrar su Merchant ID con Apple Pay</a>.
</div>

## Configurar el pago con Apple Pay

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. Haga clic en la pestaña __Planes de pago__ y, a continuación, en el botón __+__.
3. Seleccione el medio de pago __Apple Pay__.
4. Haga clic en el botón `Status` para activar esta condición de pago.
5. En el campo __Procesar con proveedor__, seleccione el proveedor que se va a utilizar para procesar los pagos.
6. Si hay un antifraude configurado en su tienda, usted puede activarlo para esta condición de pago marcando la casilla __Utilizar antifraude__.
7. Elija si desea que los pagos se realicen en efectivo o parcelados.
8. Si lo desea, también puede optar por una [condición especial de pago](/es/tutorial/condiciones-especiales).
9. Haga clic en `Guardar`.

Después de seguir los pasos indicados, Apple Pay puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.

### Artículos relacionados

- [Configurar Merchant ID en Apple Pay](https://developers.vtex.com/vtex-rest-api/docs/setting-up-merchant-id-in-apple-pay)
- [Configurar condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456)
- [¿Qué es una cartera digital (ewallet)?](https://help.vtex.com/es/tutorial/que-es-una-cartera-digital--4v5wcOe4A0SiaimWM2cU60)
