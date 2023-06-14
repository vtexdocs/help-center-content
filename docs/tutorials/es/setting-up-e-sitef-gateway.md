---
title: 'Configurar gateway e-Sitef'
id: 6UEi0QAlU6BXz5RgWj34Ac
status: PUBLISHED
createdAt: 2021-12-06T14:51:20.250Z
updatedAt: 2023-03-23T15:04:33.914Z
publishedAt: 2023-03-23T15:04:33.914Z
firstPublishedAt: 2021-12-06T17:37:55.667Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-gateway-e-sitef
legacySlug: configurar-gateway-e-sitef
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX, puede utilizar el gateway e-Sitef para recibir pagos mediante tarjetas de crédito, débito y PIX. Para configurar este gateway, siga los pasos a continuación:

## Configurar la afiliación de gateway e-SiTef
1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
4. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
5. Haga clic en el conector __ESITEF__.
6. Rellene los campos de registro __Application Key__ y __Application Token__ con los datos proporcionados por el e-SiTef.
7. En el campo __Captura automática de pago__, seleccione una de las siguientes opciones:
<br>
<ul>
<br>
    	<li><b>Utiliza El Comportamiento Recomendado Por El Procesador de Pagos</b>: a captura no es automática, sino programada de acuerdo con el plazo especificado por el adquirente que, además de indicar si el pago ha sido autorizado, puede especificar o recomendar un número de días para la captura en el momento de la respuesta a la autorización de pago (este es el comportamiento predeterminado de la plataforma).</li>
    	<li><b>Imediatamente: Captura Automática Al Autorizar El Pago</b>: la captura es automática y se produce inmediatamente después de la autorización, incluso si la transacción tiene un análisis antifraude.</li>
   		<li><b>Imediatamente: Captura Automática Al Pasar El Análisis De Riesgo De Fraude</b>: la captura es automática y se realiza inmediatamente después de la autorización y el análisis antifraude (si seleccionas este comportamiento y no tienes análisis antifraude, la captura de pago se realizará de la misma manera que en el comportamiento "Captura automática al autorizar el pago").</li>
   		<li><b>Programado: Establece Cuándo Se Realizará La Captura Automática</b>: al seleccionar esta opción, se mostrará el campo <b>Periodo de tiempo programado en horas para la captura automática</b>, que deberá rellenarse con el periodo en el que se realizará la captura automática. Este periodo debe respetar los límites permitidos por el proveedor de pagos.</li>        
   		<li><b>Desactivado: No Capturado Automáticamente</b>: la captura se realiza solo cuando se factura el pedido. Si se opta por este comportamiento de captura, es importante estar atento al tiempo de facturación, ya que puede exceder el tiempo de captura acordado con el proveedor de pagos y provocar la cancelación de la transacción.</li>
</ul>
8. En el campo __Captura antecipada (em horas)__, elija cuánto tiempo desea que se realice la captura (después de que se apruebe la transacción). También puede desactivar la función.
9. En __Alterar tempo máximo para captura automática (em dias)__, complete el período máximo de días en los que debe tener lugar la captura automática.
10. En __Soft Descriptor__, puede ingresar una string personalizada (caracteres) que se imprimirá en la factura del cliente.
11. En __Habilitar Pré-autorização__, seleccione si desea que las compras realizadas con tarjeta de crédito tengan el monto reservado (captura preautorizada después de la aprobación de la transacción).
12. En el campo __Captura antecipada após anti-fraude (em horas)__, elija durante cuánto tiempo desea que se lleve a cabo la captura (después del análisis contra el fraude). También puede desactivar la función.
13. Haga clic en __Salvar__.

## Configurar condición de pago
Después de seguir los pasos indicados, e-SiTef estará configurado en su tienda. Así, cuando vaya a registrar una condición de pago, va a estar disponible en el campo __Procesar con la afiliación__ (desde que el medio de pago sea compatible con e-SiTef).

Para saber cómo definir condiciones de pago, acceda a [Configurar condiciones de pago](/es/tutorial/condicoes-de-pagamento).
