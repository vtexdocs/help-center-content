---
title: 'Configurar pago con Ecart Pay'
id: 1ZkCLbvnU2HYFgrPOyYhtV
status: PUBLISHED
createdAt: 2025-02-03T21:53:31.510Z
updatedAt: 2025-02-04T12:32:20.399Z
publishedAt: 2025-02-04T12:32:20.399Z
firstPublishedAt: 2025-02-03T22:15:02.210Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-ecart-pay
legacySlug: configurar-pago-con-ecart-pay
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Ecart Pay. Con este proveedor, su tienda puede realizar ventas a través de Ecart Pay.

Para configurar Ecart Pay, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Proveedores**, o escribe **Proveedores** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre **Ecartpay** en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En **Autorización del proveedor**, rellene los campos de registro **Clave de aplicación** y **Token de aplicación** con los datos proporcionados por su cuenta Ecart Pay.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor Ecart Pay en la pantalla VTEX Admin, ingrese la información en el campo **Nombre** en **Información general**.
6. En **Control de pago**, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en **Activar modo de prueba**.
7. En **Liquidación automática**, seleccione una de las siguientes opciones:
<ul>
    	<li>**Utiliza comportamiento recomendado por el procesador de pagos**: a captura no es automática, sino programada de acuerdo con el plazo especificado por el adquirente que, además de indicar si el pago ha sido autorizado, puede especificar o recomendar un número de días para la captura en el momento de la respuesta a la autorización de pago (este es el comportamiento predeterminado de la plataforma).</li>
    	<li>**Liquidación automática inmediatamente después de la autorización del pago**: la captura es automática y se produce inmediatamente después de la autorización, incluso si la transacción tiene un análisis antifraude.</li>
    	<li>**Liquidación automática inmediatamente después del análisis antifraude**: la captura es automática y se realiza inmediatamente después de la autorización y el análisis antifraude (si seleccionas este comportamiento y no tienes análisis antifraude, la captura de pago se realizará de la misma manera que en el comportamiento "Liquidación automática inmediatamente después de la autorización del pago").</li>
    	<li>**Desactivado**: la captura se realiza solo cuando se factura el pedido. Si se opta por este comportamiento de captura, es importante estar atento al tiempo de facturación, ya que puede exceder el tiempo de captura acordado con el proveedor de pagos y provocar la cancelación de la transacción.</li>
</ul>

8. Si desea utilizar [split de pagos](/es/docs/tutorials/split-de-pagos)  en su tienda, seleccione la opción **Activar split de cobros y enviar destinatarios de pago** e indique el **Responsable de cargos de procesamiento de pagos** y el **Responsable de contracargos** (marketplace, sellers o marketplace y sellers).
9. Haga clic en `Guardar`.

## Configurar la condición de pago

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestana **Condiciones de pago**, haga clic en el botón `+`.
3. Haga clic en **Ecart Pay**.
4. Active la condición en el campo **Status**.
5. Si desea utilizar un sistema antifraude, seleccione la opción **Utilizar antifraude**.
6. Si lo desea, también puede configurar [condiciones especiales de pago](/es/docs/tutorials/condiciones-especiales).
7. Haga clic en `Guardar`.

Después de seguir los pasos indicados, Ecart Pay puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.

