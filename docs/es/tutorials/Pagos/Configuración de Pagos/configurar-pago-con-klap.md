---
title: 'Configurar pago con Klap'
id: 7B4TwOrNX4R1AIpHpekdGH
status: PUBLISHED
createdAt: 2024-12-09T14:45:46.693Z
updatedAt: 2024-12-09T16:54:46.681Z
publishedAt: 2024-12-09T16:54:46.681Z
firstPublishedAt: 2024-12-09T15:18:39.203Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-klap
legacySlug: configurar-pago-con-klap
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Klap.

Con este proveedor, su tienda puede realizar ventas a través de Klap.

Para configurar Klap, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Proveedores**, o escribe **Proveedores** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre **klap** en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En **Autorización del proveedor**, rellene los campos de registro **Clave de aplicación** y **Token de aplicación** con los datos proporcionados por su cuenta klap.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor Klap en la pantalla VTEX Admin, ingrese la información en el campo **Nombre** en **Información general**.
6. En **Control de pago**, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en **Activar modo de prueba**.
7. En __Liquidación automática__, seleccione una de las siguientes opciones:
<br>
<ul>
<br>
    	<li><b>Utiliza comportamiento recomendado por el procesador de pagos</b>: a captura no es automática, sino programada de acuerdo con el plazo especificado por el adquirente que, además de indicar si el pago ha sido autorizado, puede especificar o recomendar un número de días para la captura en el momento de la respuesta a la autorización de pago (este es el comportamiento predeterminado de la plataforma).</li>
    	<li><b>Liquidación automática inmediatamente después de la autorización del pago</b>: la captura es automática y se produce inmediatamente después de la autorización, incluso si la transacción tiene un análisis antifraude.</li>
   		<li><b>Liquidación automática inmediatamente después del análisis antifraude</b>: la captura es automática y se realiza inmediatamente después de la autorización y el análisis antifraude (si seleccionas este comportamiento y no tienes análisis antifraude, la captura de pago se realizará de la misma manera que en el comportamiento "Liquidación automática inmediatamente después de la autorización del pago").</li>
   		<li><b>Desactivado</b>: la captura se realiza solo cuando se factura el pedido. Si se opta por este comportamiento de captura, es importante estar atento al tiempo de facturación, ya que puede exceder el tiempo de captura acordado con el proveedor de pagos y provocar la cancelación de la transacción.</li>
</ul>
8. En **Campos del Proveedor**, seleccione o complete los campos **Modo**, **Api key** y **URL Tienda** según las instrucciones del proveedor.
9. Haga clic en `Guardar`.

## Configurar condición de pago

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla **Condiciones de pago**, haga clic en el botón `+`.
3. Haga clic en **Klap**.
4. Active la condición en el campo **Status**.
5. Si desea utilizar un sistema antifraude, seleccione la opción **Utilizar antifraude**.
6. Si desea, puede [configurar condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Haga clic en `Guardar`.

Después de seguir los pasos indicados, klap puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.

