---
title: 'Configurar pagos con Tarjeta de Tienda (cobranded)'
id: jrkLK41IjuquUmyKUi86Q
status: PUBLISHED
createdAt: 2018-06-25T15:48:13.031Z
updatedAt: 2023-09-22T21:25:38.666Z
publishedAt: 2023-09-22T21:25:38.666Z
firstPublishedAt: 2018-06-27T20:17:05.882Z
contentType: tutorial
productTeam: Post-purchase
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-payments-with-store-card-cobranded
locale: es
legacySlug: configurar-pagos-con-tarjeta-de-tienda-cobranded
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX, su tienda puede recibir pagos a través de una __tarjeta de tienda (cobranded)__. Para esto, debe haber registrado una afiliación de gateway capaz de procesar este medio de pago y realizar dos etapas de configuración.

## Configurar Tarjeta de Tienda (cobranded)

El primer paso de configuración será la creación del pago personalizado  __tarjeta de tienda (cobranded)__.

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. Haga clic en la pestaña __Pagos Personalizados__. 
3. En __tarjetas de tienda (cobranded)__, haga clic en una de las 5 cajas de configuración de pago.
4. En __Nombre__, rellene el nombre de la tarjeta.
5. En __Descripción__, escriba el texto que dará más detalles sobre la condición de pago.
6. En __Red de la tarjeta__, escoja la franquicia a la cual la tarjeta de su tienda está vinculada. Actualmente, las franquicias posibles son: American Express, Cabal, Diners, Elo, Mastercard y Visa.
7. En __Rangos de Bin (opcional)__, puedes ingresar un rango de BIN (ingresando el primer y último código de la secuencia, separados por un guión) o varios (separando cada rango por una coma y sin espacios).

>⚠️ Cuando el cliente ingresa un número de contenedor fuera del rango especificado en este campo, se mostrará el siguiente mensaje "Verifique los dígitos impresos en su tarjeta. No pudimos confirmar si el número de la tarjeta es correcto". Si no hay ningún error en el número ingresado, podrán hacer clic en "SÍ, EL NÚMERO DE LA TARJETA ES CORRECTO" para continuar completando el pedido.

<blockquote><ui>8. En el campo <b>Código de pago del adquiriente (opcional)</b>, indique el código a ser enviado y procesado por el adquiriente contratado por usted.</ui>

<blockquote><ui>9. En <b>Activar split de pago</b>, si eliges usar esta opción, cuando la venta se produzca en tiendas del marketplace, el pagaré se dividirá entre los sellers y el marketplace.</ui>

<blockquote><ui>10. Haga clic en __Guardar__.</ui>

## Configurar condición de pago
Después de configurar la tarjeta, deberá configurar la condición de pago.

>⚠️ Si el conector para ser elegido (en el **Paso 8.**)no está registrado en su tienda, se mostrará el mensage "(Configurar)" después del nombre del conector. En esta situación, elija otro conector disponible o regístrelo. Para obtener más información, acceda [Registrar afiliaciones de gateway](https://help.vtex.com/es/tutorial/afiliacoes-de-gateway--tutorials_444?&utm_source=autocomplete#).

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Condiciones de pago__, haga clic en el botón __“+”__.
3. En __Pago Personalizado__, seleccione el pago personalizado (co-branded) configurado previamente.
4. Describa la identificación de la condición de pago en __Nombre de la Regra__. 
5. Haga clic en el botón __Status__ para activar esta condición de pago.
6. En __Proceso con la afiliación__, escoja el conector que va a procesar los pagos con tarjeta de tienda cobrands. Solo los conectores que admitan este medio de pago estarán disponibles para su selección.
7. Si hay un antifraude configurado en su tienda, usted puede activarlo para esta condición de pago seleccionado la casilla __Usar Antifraude__.
8. Escoja si los pagos serán al contado o en cuotas.
9. Usted también puede configurar [condiciones especiales de pago](/es/tutorial/condiciones-especiales).
10. Haga clic en __Salva__.

Después de seguir los pasos indicados, la __tarjeta de tienda (cobranded)__ va a aparecer en el checkout de su tienda como una opción de pago.

