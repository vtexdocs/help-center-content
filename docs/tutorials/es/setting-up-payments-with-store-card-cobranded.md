---
title: 'Configurar pagos con Tarjeta de Tienda (cobranded)'
id: jrkLK41IjuquUmyKUi86Q
status: PUBLISHED
createdAt: 2018-06-25T15:48:13.031Z
updatedAt: 2023-03-22T19:19:30.029Z
publishedAt: 2023-03-22T19:19:30.029Z
firstPublishedAt: 2018-06-27T20:17:05.882Z
contentType: tutorial
productTeam: Post-purchase
author: 245tA425AIeioKAk2eaiwS
slug: configurar-pagos-con-tarjeta-de-tienda-cobranded
legacySlug: configurar-pagos-con-tarjeta-de-tienda-cobranded
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX, su tienda puede recibir pagos a través de una __tarjeta de tienda (cobranded)__. Para esto, debe haber registrado una afiliación de gateway capaz de procesar este medio de pago y realizar dos etapas de configuración.

## Configurar Tarjeta de Tienda (cobranded)

El primer paso de configuración será la creación del pago personalizado  __tarjeta de tienda (cobranded)__.

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. Haga clic en la pestaña __Pagos Personalizados__. 
3. En __tarjetas de tienda (cobranded)__, haga clic en una de las 5 cajas de configuración de pago.
4. En __Nombre__, rellene el nombre de la tarjeta.
5. En __Descripción__, escriba el texto que dará más detalles sobre la condición de pago.
6. En __Bandera de la tarjeta__, escoja la franquicia a la cual la tarjeta de su tienda está vinculada. Actualmente, las franquicias posibles son: American Express, Cabal, Diners, Elo, Mastercard y Visa.
7. En __Pistas de Bin__ informe los códigos BIN de las tarjetas para que sean validados por el sistema. Usted puede ingresar un rango de BINs (ingresando el primer y último código de la secuencia, separados por un guion) o varios (separando cada rango por coma y sin espacios). Si lo prefiere, usted puede usar el validador de la tarjeta co-branded, rellenando los valores `100000-999999`.
8. En el campo __Código de pago del adquiriente (opcional)__, indique el código a ser enviado y procesado por el adquiriente contratado por usted.
9. En __Activar split de pago__, si eliges usar esta opción, cuando la venta se produzca en tiendas del marketplace, el pagaré se dividirá entre los sellers y el marketplace.
10. Haga clic en __Salva__.

## Configurar condición de pago
Después de configurar la tarjeta, deberá configurar la condición de pago.

<div class="alert alert-warning">
  Si el conector para ser elegido (en el <b>Paso 8.</b>)no está registrado en su tienda, se mostrará el mensage "(Configurar)" después del nombre del conector. En esta situación, elija otro conector disponible o regístrelo. Para obtener más información, acceda <a href="https://help.vtex.com/es/tutorial/afiliacoes-de-gateway--tutorials_444?&utm_source=autocomplete#">Registrar afiliaciones de gateway</a>.
</div>

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

