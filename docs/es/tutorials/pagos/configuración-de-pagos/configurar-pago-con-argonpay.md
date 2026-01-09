---
title: 'Configurar pago con argonPAY'
id: 6Pktml6MJpdc7dNvJ4zwzI
status: PUBLISHED
createdAt: 2023-12-18T14:51:00.261Z
updatedAt: 2023-12-18T15:02:08.524Z
publishedAt: 2023-12-18T15:02:08.524Z
firstPublishedAt: 2023-12-18T15:02:08.524Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-argonpay
legacySlug: configurar-pago-con-argonpay
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos argonPAY. Con este conector, su tienda puede realizar ventas a través de diferentes de argonPAY.

Para configurar el proveedor argonPAY, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Proveedores**, o escribe **Proveedores** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre **ArgonPay** en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Rellene los campos de registro **Clave de aplicación** y **Token de aplicación** con los datos proporcionados por su cuenta argonPAY.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor argonPAY en la pantalla VTEX Admin, ingrese la información en el campo **Nombre** en **Información general**.
6. En **Control de pago**, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en **Activar modo de prueba**.
7. En el campo **Liquidación automática**, seleccione una de las siguientes opciones:
- **Utiliza El Comportamiento Recomendado Por El Procesador de Pagos**: a captura no es automática, sino programada de acuerdo con el plazo especificado por el adquirente que, además de indicar si el pago ha sido autorizado, puede especificar o recomendar un número de días para la captura en el momento de la respuesta a la autorización de pago (este es el comportamiento predeterminado de la plataforma).
- **Imediatamente: Captura Automática Al Autorizar El Pago**: la captura es automática y se produce inmediatamente después de la autorización, incluso si la transacción tiene un análisis antifraude.
- **Imediatamente: Captura Automática Al Pasar El Análisis De Riesgo De Fraude**: la captura es automática y se realiza inmediatamente después de la autorización y el análisis antifraude (si seleccionas este comportamiento y no tienes análisis antifraude, la captura de pago se realizará de la misma manera que en el comportamiento "Captura automática al autorizar el pago").
- **Programado: Establece Cuándo Se Realizará La Captura Automática**: al seleccionar esta opción, se mostrará el campo **Periodo de tiempo programado en horas para la captura automática**, que deberá rellenarse con el periodo en el que se realizará la captura automática. Este periodo debe respetar los límites permitidos por el proveedor de pagos.
- **Desactivado: No Capturado Automáticamente**: la captura se realiza solo cuando se factura el pedido. Si se opta por este comportamiento de captura, es importante estar atento al tiempo de facturación, ya que puede exceder el tiempo de captura acordado con el proveedor de pagos y provocar la cancelación de la transacción.

8. Si desea utilizar Split de pagos en su tienda, seleccione la opción **Activar split de cobros y enviar destinatarios de pago** e indique el **Responsable de cargos de procesamiento de pagos** y el **Responsable de contracargos** (marketplace, sellers o marketplace y sellers).
9. Haga clic en `Guardar`.

## Configurar condición de pago

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestana **Condiciones de pago**, haga clic en el botón `+`.
3. Haga clic en **ArgonPay**.
4. Active la condición en el campo **Status**.
6. Si desea, puede [configurar condiciones especiales de pago](/es/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Haga clic en `Guardar`.

Después de seguir los pasos indicados, argonPAY puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
