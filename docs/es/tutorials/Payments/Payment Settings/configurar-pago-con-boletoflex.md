---
title: 'Configurar pago con BoletoFlex'
id: 3ikLbJGXMI6bkAm6YiglOx
status: ARCHIVED
createdAt: 2022-01-10T17:36:39.512Z
updatedAt: 2024-09-19T19:52:21.494Z
publishedAt: 
firstPublishedAt: 2022-01-10T20:19:23.317Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-boletoflex
locale: es
legacySlug: configurar-pago-con-boletoflex
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

BoletoFlex es un medio de pago donde los usuarios pueden pagar sus compras en cuotas utilizando el boleto, con tasas de interés predeterminadas y sin necesidad de utilizar una tarjeta de crédito.

## Configurar afiliación de gateway BoletoFlex

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __BoletoFlex__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Rellene los campos de registro __Application Key__ y __Application Token__ con los datos proporcionados por BoletoFlex.
5. Haga clic en __Guardar__.

## Configurar condición de pago
1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Condiciones de pago__, haga clic en el botón __+__.
3. Elige la condición de pago __BoletoFlex__.
4. Rellene el campo __Nombre de la regla__ con un nombre de su elección para su identificación.
5. Active la condición en el campo __Status__.
6. Si desea utilizar un sistema antifraude, seleccione la opción __Utilizar antifraude__.
7. Elige si los pagos será con o sin cuotas.
8. Si desea, puede [configurar condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
9. Haga clic en __Guardar__.

Después de seguir los pasos indicados, BoletoFlex puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
