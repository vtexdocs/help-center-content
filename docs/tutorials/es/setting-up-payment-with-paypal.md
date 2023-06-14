---
title: 'Configurar pago con PayPal'
id: 4p3sD9u1moq2Aya2oc684w
status: PUBLISHED
createdAt: 2018-02-21T17:15:53.516Z
updatedAt: 2023-03-21T20:46:52.481Z
publishedAt: 2023-03-21T20:46:52.481Z
firstPublishedAt: 2018-02-21T17:54:19.079Z
contentType: tutorial
productTeam: Financial
author: authors_59
slug: configurar-pago-con-paypal
locale: es
legacySlug: configurar-pago-con-paypal
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

En el gateway de VTEX, usted puede configurar el subadquirente de PayPal para recibir sus pagos. En esta modalidad, su cliente elige el pago de PayPal y realiza su autenticación en el ambiente de PayPal.

Para realizar la configuración, siga los pasos abajo:

## Configurar la afiliación de gateway PayPal

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
3. Haga clic en el conector __PayPal__.

Rellene los campos de registro con los datos proporcionados por PayPal, como abajo.
- El *API username* debe ingresarse en el campo __Nombre de usuario de API__.
- La *API password* debe ingresarse en el campo __Contraseña de API__.
- Se debe ingresar la *Signature* en el campo __Firma__.

Para obtener esta información, puede acceder a su [PayPal Dashboard](https://developer.paypal.com/dashboard/) o ponerse en contacto con el [soporte de PayPal](https://www.paypal.com/es/smarthelp/contact-us).

En __Moneda__, elija la moneda de la transacción, y en __Local__, seleccione la ubicación de la transacción.

Haga clic en __Guardar__.

## Configurar la condición de pago PayPal

1. Dentro de la sección de __Configuración__ del módulo Pagos, haga clic en la pestaña __Planes de pago__.
2. Haga clic en el botón __+__.
3. Haga clic en el medio de pago __PayPal__.
4. Haga clic en el botón __Status__ para activar esta condición de pago.
5. Si lo desea, marque la casilla __Usar Antifraude__ para activar el antifraude básico.
6. Si lo desea, también puede configurar [condiciones especiales de pago](/es/tutorial/condiciones-especiales).
7. Después de realizar la configuración, haga clic en __Guardar__.

Listo! Ahora se muestra en el checkout la opción de pago utilizando PayPal. Después de finalizar compra, su cliente será redirigido al ambiente de PayPal para realizar su autenticación y rellenar los datos de la tarjeta de crédito.

<div class="alert alert-warning" role="alert">
  <strong>Nota:</strong> Pagamento parcelado no está disponible para este pago.
</div>
