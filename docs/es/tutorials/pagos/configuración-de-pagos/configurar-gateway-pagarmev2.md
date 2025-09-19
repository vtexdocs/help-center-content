---
title: 'Configurar gateway PagarMeV2'
id: 5TugxXNMOs0Ocyg4uqussM
status: PUBLISHED
createdAt: 2018-04-10T18:50:48.932Z
updatedAt: 2024-01-23T19:19:58.174Z
publishedAt: 2024-01-23T19:19:58.174Z
firstPublishedAt: 2018-04-11T21:51:25.333Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-pagarmev2-gateway
legacySlug: configurar-gateway-pagarmev2
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible procesar pagos con el proveedor PagarMe a través de integraciones V2 y V3.

> ⚠️ Si quieres configurar la versión V3 de Pagarme en tu tienda, accede a [Configurar pago con PagarMeV3](/es/tutorial/configurar-pago-con-pagarmev3--5PMavdamrVijwIrHas9ndE).

Para configurar PagarMeV2, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __PagarMeV2__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Rellene los campos indicados con la siguiente información:<br>
<ul>
<li>**Clave de aplicación** y <b>Token de aplicación
</b>: ingrese la información proporcionada por Pagar.me.</li>
<li>**Captura de pago automática:**: seleccione una de las opciones a continuación:<br><br>
    <ul>
    	<li>**Utilizar el comportamiento recomendado del procesador de pagos**: la captura no es automática, sino programada de acuerdo con el plazo especificado por el adquirente que, además de indicar si el pago ha sido autorizado, puede especificar o recomendar un número de días para la captura en el momento de la respuesta a la autorización de pago (este es el comportamiento predeterminado de la plataforma).</li>
    	<li>**Inmediatamente: captura automática al autorizar el pago**: la captura es automática y se produce inmediatamente después de la autorización, incluso si la transacción tiene un análisis antifraude.</li>
   		<li>**Inmediatamente: captura automática al aprobar el análisis de riesgo de fraude**:  la captura es automática y se realiza inmediatamente después de la autorización y el análisis antifraude (si selecciona este comportamiento y no tiene análisis antifraude, la captura de pago se realizará de la misma manera que en el comportamiento «Inmediatamente: captura automática al autorizar el pago»).</li>
   		<li>**Desactivado: no se captura automáticamente**:  la captura se realiza solo cuando se factura el pedido. Debe tener cuidado al elegir este comportamiento de captura, ya que el retraso en la facturación puede exceder el tiempo de captura acordado con el proveedor de pago y provocar la pérdida del pago.</li>
    </ul>
  </li>
</ul>

5. __Nombre en la factura:__ ingrese el nombre que identificará su tienda en la factura del consumidor.
6. __¿Activar split y enviar receptores?:__ si desea utilizar la solución de split de pagos, seleccione __Sí__ y rellene la información solicitada de acuerdo con lo que se negoció con Pagar.me. <br><br>
<ul>
  <li>**Responsabilidad por las tarifas de pago**: puede escoger entre «Marketplace», «Marketplace + Sellers» o «Sellers».</li>
  <li>**Responsabilidad por los chargebacks (contracargos):**:  puede escoger entre «Marketplace», «Marketplace + Sellers» o «Sellers».</li>
</ul>
7. Haga clic en __Salvar__ para guardar los cambios.

## Configurar condiciones de pago

Después de completar los pasos indicados, PagarMeV2 quedará configurado en su tienda. 

Si desea asociarlo a una condición de pago compatible con PagarMeV2, siga el artículo [Configurar condiciones de pago](/es/tutorial/condicoes-de-pagamento).
