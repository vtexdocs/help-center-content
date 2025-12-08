---
title: 'Configurar pago con Credimarcas'
id: 78855lTT6A1vX2wFURmxV
status: PUBLISHED
createdAt: 2023-12-18T13:12:50.542Z
updatedAt: 2023-12-18T14:09:15.538Z
publishedAt: 2023-12-18T14:09:15.538Z
firstPublishedAt: 2023-12-18T14:09:15.538Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-credimarcas
legacySlug: configurar-pago-con-credimarcas
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Credimarcas. Con este conector, tu tienda puede realizar ventas a través de pagarés y tarjetas private labels.

Para configurar la afiliación Credimarcas, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Proveedores**, o escribe **Proveedores** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre **credimarcas** en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Rellene los campos de registro __Clave de aplicación__ y __Token de aplicación__ con los datos proporcionados por Credimarcas.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor Belluno Digital Bank en la pantalla VTEX Admin, ingrese la información en el campo **Nombre** en **Información general**.
6. En **Control de pago**, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en **Activar modo de prueba**.
7. En **Liquidación automática**, seleccione una de las siguientes opciones:
- **Utiliza comportamiento recomendado por el procesador de pagos**: a captura no es automática, sino programada de acuerdo con el plazo especificado por el adquirente que, además de indicar si el pago ha sido autorizado, puede especificar o recomendar un número de días para la captura en el momento de la respuesta a la autorización de pago (este es el comportamiento predeterminado de la plataforma).
- **Liquidación automática inmediatamente después de la autorización del pago**: la captura es automática y se produce inmediatamente después de la autorización, incluso si la transacción tiene un análisis antifraude.
- **Liquidación automática inmediatamente después del análisis antifraude**: la captura es automática y se realiza inmediatamente después de la autorización y el análisis antifraude (si seleccionas este comportamiento y no tienes análisis antifraude, la captura de pago se realizará de la misma manera que en el comportamiento "Liquidación automática inmediatamente después de la autorización del pago").
- **Desactivado**: la captura se realiza solo cuando se factura el pedido. Si se opta por este comportamiento de captura, es importante estar atento al tiempo de facturación, ya que puede exceder el tiempo de captura acordado con el proveedor de pagos y provocar la cancelación de la transacción.

8. En **Type Payment**, seleccione si el pago se realizará a través de "Payment App" o "Redirect".
9. Si aparece un mensaje de alerta que indica la necesidad de instalar la aplicación, haga clic en el botón **Instalar aplicación** y siga las instrucciones de instalación.
10. Haga clic en `Guardar`.

## Configurar Pagaré

> ⚠️ Si aún no has configurado el pagaré como método de pago en otros conectores de tu tienda, accede a [Configurar pagos con Pagaré](/es/tutorial/configurar-pagos-con-pagare--5pW7avTwtyQcMu4uiW8quQ).

Para utilizar Credimarcas con pagarés, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestana **Condiciones de pago**, haga clic en el botón `+`.
3. En **Pago personalizado**, haga clic en el botón correspondiente al nombre utilizado para el método de pago del pagaré previamente configurado.
4. Active la condición en el campo **Status**.
5. En **Procesar con proveedor**, seleccione **confepartnerco-credimarcas-v0**.
6. Si lo desea, también puede configurar [condiciones especiales de pago](/es/tutorial/condiciones-especiales--tutorials_456).
7. Haga clic en `Guardar`.

## Configurar Private label

Para utilizar Credimarcas con tarjetas private labels, acceda a [Configurar pagos con Private Label](/es/tutorial/configurar-pagos-con-private-label--428FgVdSGQUeAOoogkaIw4).

Después de seguir los pasos indicados, Credimarcas puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
