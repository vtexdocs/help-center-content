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

En VTEX, puede configurar su tienda con el gateway Tuna para recibir pagos a través de: boleto, tarjetas de débito y crédito, PIX y Bitcoin.

> ⚠️ La integración de su tienda con Tuna se realiza a través de una **Application Key** y un **Application Token.** Los datos de acceso para obtener esta información y habilitar la configuración en VTEX se le enviarán después de crear su cuenta. Para esto, debe rellenar [este formulario](https://docs.google.com/forms/d/e/1FAIpQLScWk5fsmkIfGaW2Z6qhdGH-JJ5iU6Fv5TGghUR1Pod5dY5Z2Q/viewform) y esperar la respuesta de Tuna con más detalles.

Después de crear su cuenta y obtener la __Application Key__ y el __Application Token__, siga los pasos a continuación para configurar Tuna en su tienda:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __Tuna__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Rellene los campos de registro __Application Key__ y __Application Token__ con los datos proporcionados por Tuna.
5. En __Captura de pago automática__, seleccione una de las opciones disponibles:

    - __Utilizar el comportamiento recomendado del procesador de pagos__: la captura no es automática, sino programada de acuerdo con el plazo especificado por el adquirente que, además de indicar si el pago ha sido autorizado, puede especificar o recomendar un número de días para la captura en el momento de la respuesta a la autorización de pago (este es el comportamiento predeterminado de la plataforma).
    - __Inmediatamente: captura automática al autorizar el pago__: la captura es automática y se produce inmediatamente después de la autorización, incluso si la transacción tiene un análisis antifraude.
    - __Inmediatamente: captura automática al aprobar el análisis de riesgo de fraude__: la captura es automática y se realiza inmediatamente después de la autorización y el análisis antifraude (si selecciona este comportamiento y no tiene análisis antifraude, la captura de pago se realizará de la misma manera que en el comportamiento «Inmediatamente: captura automática al autorizar el pago»).
    - __Desactivado: no se captura automáticamente__: la captura no se autoriza automáticamente. Debe tener cuidado al elegir este comportamiento, ya que el retraso en la facturación puede exceder el tiempo de captura acordado con el proveedor y provocar la pérdida del pago.

<ui>
  6. Haga clic en **Salvar** para guardar los cambios.
  </ui>

Después de completar la configuración en VTEX, debe acceder a [Console](https://dev.tuna.uy/console?utm_medium=docs&utm_source=vtex&utm_content=console&utm_campaign=docs) de Tuna con sus datos y crear por lo menos un flujo de pago. Solo entonces podrá procesar los pagos a través de la solución.

Para más detalles sobre esta configuración, consulte la [documentación](https://dev.tuna.uy/docs/console/) de Tuna.

## Configuración de condición de pago

Cuando haya completado los pasos indicados, Tuna estará configurado en su tienda. Así, cuando registre una condición de pago, esta estará disponible en el campo __Proceso con afiliación__ (siempre y cuando el método de pago sea compatible con __Tuna__). 

Para ver cómo configurar condiciones de pago, acceda al artículo [Configurar condiciones de pago](https://help.vtex.com/es/tutorial/condicoes-de-pagamento).

