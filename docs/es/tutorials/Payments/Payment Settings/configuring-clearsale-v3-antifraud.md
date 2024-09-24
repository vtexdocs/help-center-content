---
title: 'Configurar antifraude ClearSale v3'
id: 2pPORygesIqQOa6cIG6agg
status: CHANGED
createdAt: 2017-10-30T14:10:20.822Z
updatedAt: 2024-04-24T18:52:20.944Z
publishedAt: 2024-04-24T18:49:44.223Z
firstPublishedAt: 2017-10-30T14:26:53.089Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: configurar-antifraude-clearsale-v3
locale: es
legacySlug: configurar-antifraude-clearsale-v3
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible integrarse con el [antifraude](https://help.vtex.com/es/tutorial/como-configurar-antifraude--tutorials_446) ClearSaleV3. A través de este sistema es posible aumentar el nivel de seguridad en las transacciones de pago realizadas en tu tienda mediante análisis de riesgos que identifican posibles fraudes.

Para configurar ClearSaleV3 siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __ClearSaleV3__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Si desea modificar el nombre de identificación que se mostrará para el proveedor PagoEfectivoV2 en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
5. En __Control de pago__, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en __Activar modo de prueba__.
6. Complete la siguiente información de acuerdo con su configuración de ClearSale:
<br>
<ul>
<br>
  <li><b>Login</b>: login.</li>
  <li><b>Password</b>: contraseña.</li>
  <li><b>SLA personalizado en minutos (opcional)</b>: período en el que ClearSale tendrá que procesar el análisis de fraude.</li>
  <li><b>Producto (opcional)</b>: valor numérico. Corresponde al ID del producto contratado en ClearSale.</li>
  <li><b>Transaction currency</b>: moneda en la que se realiza la transacción.</li>
  <li><b>Observation (opcional)</b>: texto abierto para enviar a ClearSale como nota.</li>
  <li><b>¿Enviar transacciones autenticadas?</b>: indica si las transacciones de pago deben autenticarse con una contraseña en el programa 3DSecure.</li>
</ul>
7. Haga clic en `Guardar`.

>ℹ️ Si tiene una aplicación móvil que utiliza API de VTEX en el momento del pago, es necesario implementar la recolección de datos de huellas dactilares para enviarlos a Clearsale, según la plataforma utilizada por la aplicación. Obtenga más información en [Clearsale Behavior Analytics](https://api.clearsale.com.br/docs/behavior-analytics" target="_blank).
>
> Con la implementación del SDK es necesario recolectar el valor de <span class="bg-muted-4">sessionId</span> y enviarlo en el <span class="bg-muted-4">deviceFingerprint</span> a través de la [API al momento de crear el pago](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments).

## Creación de la etiqueta de Google Tag Manager

La configuración del antifraude ClearSale v3 requiere la creación de una etiqueta en Google Tag Manager, como se muestra a continuación:

1. Acceder a tu cuenta del [Google Tag Manager](https://tagmanager.google.com/).
2. Hacer clic en la opción __Tag__ y luego en __Nuevo__.
3. Elegir el producto __Tag HTML Personalizada__.
4. Insertar el siguiente script, sustituyendo `seu-app` por tu identificador enviado por ClearSale (entre comillas simples):

  ```
    var deviceFingerprintIdCSV4 = 10000000 + Math.floor(Math.random() * 99999999);
    (function (a, b, c, d, e, f, g) {
    a['CsdpObject'] = e; a[e] = a[e] || function () {
    (a[e].q = a[e].q || []).push(arguments)
    }, a[e].l = 1 * new Date(); f = b.createElement(c),
    g = b.getElementsByTagName(c)[0]; f.async = 1; f.src = d; g.parentNode.insertBefore(f, g)
    })(window, document, 'script', '//device.clearsale.com.br/p/fp.js', 'csdp');
    csdp('app', 'seu-app');
    csdp('sessionid', deviceFingerprintIdCSV4);
    window.vtex.deviceFingerprint = deviceFingerprintIdCSV4;
  ```

5. Marcar la opción __Soporte para document.write__.
6. En __Dispara En__, seleccionar la opción __Más__ y hacer clic en __Nuevo__. 
7. Insertar un nombre para este accionador y elegir el evento tipo __Evento Personalizado__.
8. En __Disparar En__, establezca el nombre del evento como __payment__. 
9. Guardar el accionador.
10. Hacer clic en el botón __Crear Tag__, insertar un nombre para esta tag y guardar.
11. En la esquina superior derecha, hacer clic en __Publicar__.

![Pasted image at 2017 10 20 01 11 PM](//images.contentful.com/alneenqid6w5/2kdI4xh9IYwKI2mSiU20yW/b850c070cc8de2ec09e690ffe6cc9c15/Pasted_image_at_2017_10_20_01_11_PM.png)

## Detalles del campo customSLA

El valor definido en el campo **Custom SLA en minutos** de la configuración del antifraude es uno de los tres valores posibles para el campo `customSLA` de la transacción. Si el carrito está vacío, el valor de `customSLA` será el valor de `shippingEstimate` del carrito de la transacción. Si el carrito tiene al menos un ítem, el valor de `customSLA` será el menor entre el valor de `deliverySlaInMinutes` del primer ítem del carrito y el valor de **Custom SLA en minutos** utilizado en la configuración del antifraude.

Los valores de `shippingEstimate` y `deliverySlaInMinutes` corresponden al tiempo de entrega y se generan en el checkout a partir de la información del módulo de Logística. El cálculo del tiempo de entrega se explica en el artículo Cómo se calcula el plazo de entrega del pedido.

El valor de `shippingEstimate` se obtiene a partir de un cálculo realizado por el módulo de Logística. El valor va acompañado de una letra, que representa la unidad de tiempo utilizada. Las letras de unidad de tiempo son las siguientes:

- `d` para días consecutivos o `bd` para días hábiles si el tiempo es cero o al menos 24 horas.
- `h` para horas si el tiempo es inferior a 24 horas y al menos 2 horas.
- `m` para minutos si el tiempo es inferior a 2 horas.

El `shippingEstimate` puede obtenerse en los ítems de `shippingData.logisticsInfo[]` en la respuesta del endpoint <a href="https://developers.vtex.com/vtex-rest-api/reference/orders#getorder" target="_blank">Get Order</a>.

El valor de `deliverySlaInMinutes` es la conversión de `shippingEstimate` en minutos. Si la unidad es `m` (minutos) será el mismo valor, si la unidad es `h` (horas) el valor se multiplica por 60 y si la unidad es `d` (días consecutivos) o `bd` (días hábiles) el valor se multiplica por 1440. Por ejemplo, tres días consecutivos o `3d` se representa como `4320`. El `deliverySlaInMinutes` se utiliza en cada ítem del `minicart` en el cuerpo de la solicitud de los endpoints <a href="https://developers.vtex.com/vtex-rest-api/reference/antifraud-flow#sendantifraudpreanalysisdata" target="_blank">Send Antifraud Pre-Analysis Data</a> y <a href="https://developers.vtex.com/vtex-rest-api/reference/antifraud-flow#sendantifrauddata" target="_blank">Send Antifraud Data</a>.

>ℹ️ Aunque la conversión del tiempo en días consecutivos (`d`) y días hábiles (`bd`) a minutos es igual en el campo `deliverySlaInMinutes`, la fecha de entrega puede ser diferente en función del calendario (cuando hay fines de semana y feriados en el periodo de entrega).
