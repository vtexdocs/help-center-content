---
title: 'Configurar pagos con Private Label (bandera propia)'
id: 428FgVdSGQUeAOoogkaIw4
status: PUBLISHED
createdAt: 2018-06-28T21:20:09.875Z
updatedAt: 2023-03-26T21:19:26.897Z
publishedAt: 2023-03-26T21:19:26.897Z
firstPublishedAt: 2018-07-02T18:04:41.389Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-private-label-payments
legacySlug: configurar-pagos-con-private-label
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX, su tienda puede recibir pagos con __private label (bandera propia)__. Para ello, necesitará primero registrar una [afiliación de gateway](https://help.vtex.com/es/tutorial/afiliacoes-de-gateway--tutorials_444#) capaz de procesar este medio de pago. 

A continuación, se deben realizar dos pasos de configuración.

## Configuración de private label (bandera propia)

Con una de las afiliaciones de gateway arriba registrada con éxito, usted deberá configurar el pago personalizado __private label (bandera propia)__.

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla principal, acceda a la pestaña __Pagos personalizados__.
3. Cada tipo de pago personalizado permite hasta 5 configuraciones diferentes. En la parte reservada al __private label (bandera propia)__, haga clic en uno de los cuadros de configuración.
4. Usted será redirigido a un formulario. En el campo __Nombre__, rellene el nombre de la tarjeta.
5. En __Descripción__, escriba el texto que dará más detalles sobre la condición de pago.
6. En el campo __Pistas de Bin__, introduzca los códigos BIN de las tarjetas para que sean validados por el sistema. Usted puede insertar una pista de BIN (insertando el primer y el último código de secuencia, separados por guión) o varias (separando cada pista por coma y sin espacios).
7. En __Código de pago del adquirente__, indique el código para ser enviado y procesado por el adquirente contratado por usted.
8. En el campo __Utilizar el nombre del portador__, defina si el usuario necesitará indicar el nombre que está impreso en la tarjeta en el momento de la compra.
9. En __Cantidad de dígitos del CVV__, diga cuántos números del CVV el usuario necesitará llenar en el momento de la compra (en Brasil, lo más común son códigos con 3 dígitos). Usted también puede elegir no pedir esa información.
10. En el campo __Utilizar la fecha de caducidad de la tarjeta?__, informe si el usuario necesitará llenar la fecha de caducidad de la tarjeta en el momento de la compra (el formato de relleno es MM/AA).
11. En __Utilizar la dirección de facturación?__, defina si el usuario necesitará llenar una dirección de facturación en el momento de la compra.
12. En el campo __Máscara de la tarjeta__, seleccione los símbolos que van a representar los 16 dígitos de la tarjeta en el momento de la compra. Esta es una configuración para proteger el número de tarjeta de su cliente. Usted puede elegir los caracteres que prefiera, separándolos en cuatro grupos de cuatro y utilizando espacios.
13. En __Fecha de vencimiento del pago__, informar el plazo máximo (número de días) que se puede realizar el pago. Pasado este tiempo, si no se realiza el pago, el pedido será cancelado.
14. En el campo __Autorizar automáticamente__, informe si desea autorizar los pagos de forma automática.
15. En el campo __Activar split de pago (si el proveedor de procesamiento de pagos permite esta función)__, informe si desea activar la solución de partición de cuentas por cobrar. Si es así confirmado, cuando la venta implique pedidos con varios comerciantes, las cuentas por cobrar se dividirán entre los vendedores y el marketplace. Para más información, ver [Split de Pagos](https://help.vtex.com/es/tutorial/split-de-pagamento).
16. Haga clic en __Guardar__.

## Configurar la condición de pago
Después de hacer clic en el botón __Guardar__, se le redirige a la página de configuración de la condición de pago.

1. Haga clic en el botón __Status__ para activar esta condición de pago.
2. En __Procesar con la afiliación__, elija el conector que va a procesar los pagos con private label (una de las afiliaciones de gateway registradas en el primer paso de este tutorial).
3. Si hay un antifraude configurado en su tienda, usted puede activarlo para esta condición de pago marcando la casilla __Usar Antifraude__.
4. Seleccione si los pagos van a ser en efectivo o parcelados.
5. También es posible configurar [condiciones especiales de pago](/es/tutorial/condiciones-especiales).
5. Haga clic en __Guardar__.

Después de seguir los pasos indicados arriba, el private label (bandera propia) aparecerá en el checkout de su tienda como una opción de pago.
