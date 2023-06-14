---
title: 'Configurar PayPal Plus (PayPal Transparente)'
id: 2akxq3I92k8A4kymIYOiWy
status: PUBLISHED
createdAt: 2018-02-20T20:15:36.950Z
updatedAt: 2023-03-29T01:12:02.453Z
publishedAt: 2023-03-29T01:12:02.453Z
firstPublishedAt: 2018-02-20T22:56:13.192Z
contentType: tutorial
productTeam: Financial
author: authors_59
slug: configurar-paypal-plus-paypal-transparente
legacySlug: configurar-paypal-plus-paypal-transparente
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

En el gateway de VTEX, usted puede configurar el subadquirente PayPal Plus, el checkout transparente de PayPal. En esta modalidad, basta con que el cliente introduzca la información de __tarjeta de crédito__ y finalice la compra normalmente. El pago se realiza directamente en su sitio, sin redirigir a sus clientes.

Para realizar la configuración, siga los pasos abajo:

## Configurar la afiliación de gateway PayPal Plus

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
3. Haga clic en el conector __PayPalPlus__.

Rellene los campos de registro con los datos proporcionados por PayPal, como abajo.
- El *clientId* debe insertarse en el campo __ID de cliente__.
- El *secret* debe insertarse en el campo __Secret__.
- El *userName* debe insertarse en el campo __Nombre de usuario__.
- La *password* debe insertarse en el campo __Contraseña__.
- La *signature* debe insertarse en el campo __Firma__.

Después, siga estos pasos:
1. En el campo __Recordar tarjetas__, seleccione __Sí__ para que el cliente pueda elegir la opción de guardar la tarjeta en el momento del checkout. Si no desea habilitar esta opción, seleccione __No__.
2. En __Moneda__, elija la moneda de la transacción.
3. En __Lugar de la transacción__, seleccione la ubicación de la transacción.
4. Haga clic en __Guardar__.

## Configurar la condición de pago PayPal Plus

1. Dentro de los __Ajustes__ del módulo Pagos, haga clic en la pestaña __Planes de pago__.
2. Haga clic en el botón __+__.
3. Haga clic en el medio de pago __PayPalPlus__.
4. Haga clic en el botón __Status__ para activar esta condición de pago.
5. Si lo desea, marque la casilla __Usando Antifraude__ para activar el antifraude básico.
6. Como el pago con PayPal Plus es un pago con tarjeta de crédito, usted puede elegir [configurar la condición de pago en efectivo o parcelado](/es/tutorial/condiciones-de-pago).
7. Si lo desea, también puede configurar [condiciones especiales de pago](/es/tutorial/condiciones-especiales).
8. Después de realizar la configuración, haga clic en __Guardar__.

Listo! Ahora aparecerá en el checkout la opción de pago por __tarjeta de crédito__ utilizando [PayPal como subadquirente](/es/tutorial/que-es-un-subadquirente).
