---
title: Configurar gateway PagarMeV2
id: 5TugxXNMOs0Ocyg4uqussM
status: PUBLISHED
createdAt: 2018-04-10T18:50:48.932Z
updatedAt: 2023-03-26T21:04:07.182Z
publishedAt: 2023-03-26T21:04:07.182Z
firstPublishedAt: 2018-04-11T21:51:25.333Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-gateway-pagarmev2
legacySlug: configurar-gateway-pagarmev2
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

PagarMeV2 es la versión más reciente de la [afiliación de gateway](https://help.vtex.com/es/tutorial/o-que-e-um-gateway-de-pagamentos) Pagar.me. Para configurarla, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En Afiliaciones, haga clic en el botón verde «__+__».
3. Busque y haga clic en __Pagarmev2__.
4. Rellene los campos indicados con la siguiente información:<br>
<ul>
<li><b>Application Key</b> e <b>Application Token</b>: ingrese la información proporcionada por Pagar.me.</li>
<li><b>Captura de pago automática:</b>: seleccione una de las opciones a continuación:<br><br>
    <ul>
    	<li><b>Utilizar el comportamiento recomendado del procesador de pagos</b>: la captura no es automática, sino programada de acuerdo con el plazo especificado por el adquirente que, además de indicar si el pago ha sido autorizado, puede especificar o recomendar un número de días para la captura en el momento de la respuesta a la autorización de pago (este es el comportamiento predeterminado de la plataforma).</li>
    	<li><b>Inmediatamente: captura automática al autorizar el pago</b>: la captura es automática y se produce inmediatamente después de la autorización, incluso si la transacción tiene un análisis antifraude.</li>
   		<li><b>Inmediatamente: captura automática al aprobar el análisis de riesgo de fraude</b>:  la captura es automática y se realiza inmediatamente después de la autorización y el análisis antifraude (si selecciona este comportamiento y no tiene análisis antifraude, la captura de pago se realizará de la misma manera que en el comportamiento «Inmediatamente: captura automática al autorizar el pago»).</li>
   		<li><b>Desactivado: no se captura automáticamente</b>:  la captura se realiza solo cuando se factura el pedido. Debe tener cuidado al elegir este comportamiento de captura, ya que el retraso en la facturación puede exceder el tiempo de captura acordado con el proveedor de pago y provocar la pérdida del pago.</li>
    </ul>
  </li>
</ul>

5. __Nombre en la factura:__ ingrese el nombre que identificará su tienda en la factura del consumidor.
6. __¿Activar split y enviar receptores?:__ si desea utilizar la solución de split de pagos, seleccione __Sí__ y rellene la información solicitada de acuerdo con lo que se negoció con Pagar.me. <br><br>
<ul>
  <li><b>Responsabilidad por las tarifas de pago</b>: puede escoger entre «Marketplace», «Marketplace + Sellers» o «Sellers».</li>
  <li><b>Responsabilidad por los chargebacks (contracargos):</b>:  puede escoger entre «Marketplace», «Marketplace + Sellers» o «Sellers».</li>
</ul>
7. Haga clic en __Salvar__ para guardar los cambios.

## Configurar condiciones de pago

Después de completar los pasos indicados, PagarMeV2 quedará configurado en su tienda. 

Si desea asociarlo a una condición de pago compatible con PagarMeV2, siga el artículo [Configurar condiciones de pago](https://help.vtex.com/es/tutorial/condicoes-de-pagamento).
