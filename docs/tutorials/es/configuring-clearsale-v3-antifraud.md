---
title: 'Configurar antifraude ClearSale v3'
id: 2pPORygesIqQOa6cIG6agg
status: PUBLISHED
createdAt: 2017-10-30T14:10:20.822Z
updatedAt: 2021-12-15T21:23:21.984Z
publishedAt: 2021-12-15T21:23:21.984Z
firstPublishedAt: 2017-10-30T14:26:53.089Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: configurar-antifraude-clearsale-v3
locale: es
legacySlug: configurar-antifraude-clearsale-v3
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Para habilitar el antifraude ClearSale v3, debes [añadir la afiliación de gateway](https://help.vtex.com/es/tutorial/afiliaciones-de-gateway--tutorials_444) en la sección de Pagos eligiendo la opción **ClearSaleV3**. La configuración de la afiliación de ClearSale v3 contiene los siguientes campos:

- **Login**: Login.
- **Password**: Contraseña.
- **Custom SLA en minutos** (opcional):  Número de minutos que ClearSale tendrá para procesar el análisis de fraude.
- **Producto** (opcional): Valor numérico. Corresponde al ID del producto contratado en la clearsale.
- **Transaction currency**: Moneda.
- **Observation** (opcional): Texto abierto para enviar a ClearSale como nota.
- **Enviar transacciones autenticadas?**: Tiene las opciones **Sí** y **No**. Las transacciones autenticadas son aquellas con pagos verificados con una contraseña usando el programa 3DSecure.

<div class = "alert alert-info">
La documentación de ClearSale acerca de <a href="https://api.clearsale.com.br/docs/finger-print" target="_blank"> FingerPrint </a> explica en detalle el script de abajo.
</div>

<div class="alert alert-warning">
Si desea configurar el antifraude <strong>ClearSale T</strong>, siga este <a href="http://help.vtex.com/es/tutorial/como-configurar-antifraude">paso a paso</a>.
</div>

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

<div class="alert alert-info">
Aunque la conversión del tiempo en días consecutivos (<code>d</code>) y días hábiles (<code>bd</code>) a minutos es igual en el campo <code>deliverySlaInMinutes</code>, la fecha de entrega puede ser diferente en función del calendario (cuando hay fines de semana y feriados en el periodo de entrega).
</div>
