---
title: 'Configurar pago con e-Sitef'
id: 6UEi0QAlU6BXz5RgWj34Ac
status: PUBLISHED
createdAt: 2021-12-06T14:51:20.250Z
updatedAt: 2024-03-14T16:59:21.753Z
publishedAt: 2024-03-14T16:59:21.753Z
firstPublishedAt: 2021-12-06T17:37:55.667Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-e-sitef
legacySlug: configurar-pago-con-e-sitef
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos e-Sitef. Con este proveedor, su tienda puede realizar ventas a través tarjetas de credito, debito, private y cobranded, y PIX.

Para configurar e-Sitef, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __ESITEF__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En __Autorización del proveedor__, rellene los campos de registro __Clave de aplicación__ y __Token de aplicación__ con los datos proporcionados por EVO Payments.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor EVO Payments en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
6. En __Control de pago__, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en __Activar modo de prueba__.
7. En __Liquidación automática__, seleccione una de las siguientes opciones:
<br>
<ul>
<br>
    	<li>**Utiliza comportamiento recomendado por el procesador de pagos**: a captura no es automática, sino programada de acuerdo con el plazo especificado por el adquirente que, además de indicar si el pago ha sido autorizado, puede especificar o recomendar un número de días para la captura en el momento de la respuesta a la autorización de pago (este es el comportamiento predeterminado de la plataforma).</li>
    	<li>**Liquidación automática inmediatamente después de la autorización del pago**: la captura es automática y se produce inmediatamente después de la autorización, incluso si la transacción tiene un análisis antifraude.</li>
   		<li>**Liquidación automática inmediatamente después del análisis antifraude**: la captura es automática y se realiza inmediatamente después de la autorización y el análisis antifraude (si seleccionas este comportamiento y no tienes análisis antifraude, la captura de pago se realizará de la misma manera que en el comportamiento "Liquidación automática inmediatamente después de la autorización del pago").</li>
   		<li>**Desactivado**: la captura se realiza solo cuando se factura el pedido. Si se opta por este comportamiento de captura, es importante estar atento al tiempo de facturación, ya que puede exceder el tiempo de captura acordado con el proveedor de pagos y provocar la cancelación de la transacción.</li>
</ul>
8. En el campo __Captura antecipada (em horas)__, elija cuánto tiempo desea que se realice la captura (después de que se apruebe la transacción). También puede desactivar la función.
9. En __Alterar tempo máximo para captura automática (em dias)__, complete el período máximo de días en los que debe tener lugar la captura automática.
10. En __Soft Descriptor__, puede ingresar una string personalizada (caracteres) que se imprimirá en la factura del cliente.
11. En __Habilitar Pré-autorização__, seleccione si desea que las compras realizadas con tarjeta de crédito tengan el monto reservado (captura preautorizada después de la aprobación de la transacción).
12. En el campo __Captura antecipada após anti-fraude (em horas)__, elija durante cuánto tiempo desea que se lleve a cabo la captura (después del análisis contra el fraude). También puede desactivar la función.
13. Haga clic en `Guardar`.

Para configurar los métodos de pago a procesar por e-Sitef, acceda al [Configurar Condiciones de Pago](/es/tutorial/condiciones-de-pago--tutorials_455#).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](/es/tutorial/condiciones-especiales--tutorials_456#).

Después de seguir los pasos indicados, e-Sitef puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
