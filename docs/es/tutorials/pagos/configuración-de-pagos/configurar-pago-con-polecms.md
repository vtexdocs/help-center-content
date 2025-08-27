---
title: 'Configurar pago con PoleCMS'
id: 12Wyet40HSrq5ImonyRDRu
status: PUBLISHED
createdAt: 2025-05-30T16:44:23.741Z
updatedAt: 2025-08-18T15:10:32.788Z
publishedAt: 2025-08-18T15:10:32.788Z
firstPublishedAt: 2025-05-30T17:05:56.692Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-polecms
legacySlug: configurar-pago-con-polecms
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos PoleCMS. Con este proveedor, su tienda puede realizar ventas a través de PayZen.

Para configurar PoleCMS, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Proveedores**, o escribe **Proveedores** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre **PoleCMS** en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En **Autorización del proveedor**, rellene los campos de registro **Clave de aplicación** y **Token de aplicación** con los datos proporcionados por su cuenta PoleCMS.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor PoleCMS en la pantalla VTEX Admin, ingrese la información en el campo **Nombre** en **Información general**.
6. En **Control de pago**, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en **Activar modo de prueba**.
7. En **Liquidación automática**, seleccione una de las siguientes opciones:
<ul>
    	<li>**Utiliza comportamiento recomendado por el procesador de pagos**: a captura no es automática, sino programada de acuerdo con el plazo especificado por el adquirente que, además de indicar si el pago ha sido autorizado, puede especificar o recomendar un número de días para la captura en el momento de la respuesta a la autorización de pago (este es el comportamiento predeterminado de la plataforma).</li>
    	<li>**Liquidación automática inmediatamente después de la autorización del pago**: la captura es automática y se produce inmediatamente después de la autorización, incluso si la transacción tiene un análisis antifraude.</li>
    	<li>**Liquidación automática inmediatamente después del análisis antifraude**: la captura es automática y se realiza inmediatamente después de la autorización y el análisis antifraude (si seleccionas este comportamiento y no tienes análisis antifraude, la captura de pago se realizará de la misma manera que en el comportamiento "Liquidación automática inmediatamente después de la autorización del pago").</li>
    	<li>**Desactivado**: la captura se realiza solo cuando se factura el pedido. Si se opta por este comportamiento de captura, es importante estar atento al tiempo de facturación, ya que puede exceder el tiempo de captura acordado con el proveedor de pagos y provocar la cancelación de la transacción.</li>
</ul>

8. En **Campos del Proveedor**, seleccione o complete los campos **Clave pública**, **Clave HMAC-SHA-256**, **Pago por token**, **Modo de ingreso de datos de pago**, **Número de intentos de pago con tarjeta**, **Tema**, y **Modo compacto** según las instrucciones del proveedor.
9. Haga clic en `Guardar`.

## Configurar condición de pago

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o escribe __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Condiciones de pago__, haga clic en el botón __+__.
3. Haga clic en __PayZen__.
4. Active la condición en el campo __Status__.
5. En **Proceso con proveedor**, seleccione la opción **PoleCMS**.
6. Si desea utilizar un sistema antifraude, seleccione la opción __Utilizar antifraude__.
7. Si desea, puede [configurar condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
8. Haga clic en `Guardar`.

Después de seguir los pasos indicados, PoleCMS puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
