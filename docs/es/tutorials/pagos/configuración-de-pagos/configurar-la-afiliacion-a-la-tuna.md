---
title: 'Configurar la afiliación a la Tuna'
id: 5Db0j4pE76ma9pUvYuAhfF
status: PUBLISHED
createdAt: 2021-07-07T14:47:34.162Z
updatedAt: 2024-01-23T21:47:01.684Z
publishedAt: 2024-01-23T21:47:01.684Z
firstPublishedAt: 2021-07-07T14:57:45.358Z
contentType: tutorial
productTeam: Financial
author: 13Ue4MX9WNiX9f3SVCUZZW
slugEN: configuring-tuna-gateway-affiliation
legacySlug: configurar-la-afiliacion-a-la-tuna
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX, puede configurar su tienda con el gateway Tuna para recibir pagos a través de: boleto, tarjetas de débito y crédito, PIX, Bitcoin, Privatelabels, Google Pay, Apple Pay, OXXO y opciones Pagaleve.

> ⚠️ La integración de su tienda con Tuna se realiza a través de una **Clave de aplicación** y un **Token de aplicación**. Los datos de acceso para obtener esta información y habilitar la configuración en VTEX se le enviarán después de crear su cuenta. Para esto, debe rellenar [este formulario](https://docs.google.com/forms/d/e/1FAIpQLScWk5fsmkIfGaW2Z6qhdGH-JJ5iU6Fv5TGghUR1Pod5dY5Z2Q/viewform) y esperar la respuesta de Tuna con más detalles.

Después de crear su cuenta y obtener la **Clave de aplicación** y el **Token de aplicación** siga los pasos a continuación para configurar Tuna en su tienda:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Proveedores**, o escribe **Proveedores** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre **Tuna** en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Rellene los campos de registro **Clave de aplicación** y **Token de aplicación** con los datos proporcionados por Tuna.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor Tuna en la pantalla VTEX Admin, ingrese la información en el campo **Nombre** en **Información general**.
6. En el campo **Liquidación automática**, seleccione una de las siguientes opciones:
- **Utiliza El Comportamiento Recomendado Por El Procesador de Pagos**: a captura no es automática, sino programada de acuerdo con el plazo especificado por el adquirente que, además de indicar si el pago ha sido autorizado, puede especificar o recomendar un número de días para la captura en el momento de la respuesta a la autorización de pago (este es el comportamiento predeterminado de la plataforma).
- **Imediatamente: Captura Automática Al Autorizar El Pago:** la captura es automática y se produce inmediatamente después de la autorización, incluso si la transacción tiene un análisis antifraude.
- **Imediatamente: Captura Automática Al Pasar El Análisis De Riesgo De Fraude:** la captura es automática y se realiza inmediatamente después de la autorización y el análisis antifraude (si seleccionas este comportamiento y no tienes análisis antifraude, la captura de pago se realizará de la misma manera que en el comportamiento "Captura automática al autorizar el pago").
- **Programado: Establece Cuándo Se Realizará La Captura Automática:** al seleccionar esta opción, se mostrará el campo **Periodo de tiempo programado en horas para la captura automática**, que deberá rellenarse con el periodo en el que se realizará la captura automática. Este periodo debe respetar los límites permitidos por el proveedor de pagos.
- **Desactivado: No Capturado Automáticamente:** la captura se realiza solo cuando se factura el pedido. Si se opta por este comportamiento de captura, es importante estar atento al tiempo de facturación, ya que puede exceder el tiempo de captura acordado con el proveedor de pagos y provocar la cancelación de la transacción.

7. Si desea utilizar Split de pagos en su tienda, seleccione la opción **Activar split de cobros y enviar destinatarios de pago** e indique el **Responsable de cargos de procesamiento de pagos** y el **Responsable de contracargos** (marketplace, sellers o marketplace y sellers).
8. Haga clic en `Guardar`.

Después de completar la configuración en VTEX, debe acceder a [Console](https://dev.tuna.uy/console?utm_medium=docs&utm_source=vtex&utm_content=console&utm_campaign=docs) de Tuna con sus datos y crear por lo menos un flujo de pago. Solo entonces podrá procesar los pagos a través de la solución.

Para más detalles sobre esta configuración, consulte la [documentación](https://dev.tuna.uy/docs/console/) de Tuna.

## Configuración de condición de pago

Cuando haya completado los pasos indicados, Tuna estará configurado en su tienda. Así, cuando registre una condición de pago, esta estará disponible en el campo **Procesar con proveedor** (siempre y cuando el método de pago sea compatible con **Tuna**).

Para ver cómo configurar condiciones de pago, acceda al artículo [Configurar condiciones de pago](/es/tutorial/condicoes-de-pagamento).

