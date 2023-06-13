---
title: Moneda incorrecta en el formulario de pago
id: 636reFJs0MeHQJO0NlQV7Z
status: PUBLISHED
createdAt: 2022-03-13T21:29:33.920Z
updatedAt: 2022-11-25T22:05:48.750Z
publishedAt: 2022-11-25T22:05:48.750Z
firstPublishedAt: 2022-03-13T21:29:34.493Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: moneda-incorrecta-en-el-formulario-de-pago
kiStatus: Backlog
internalReference: 449286
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



El formulario de pedido muestra una moneda incorrecta (BRL en lugar de USD) cuando tenemos dos reglas diferentes para dos políticas comerciales (Brasil y Estados Unidos) con el conector de PayPal. Los clientes no pueden cambiar a la moneda correcta. Por lo tanto, al realizar el pedido, aunque la regla correcta coincida, obtenemos un error:

(400) Solicitud incorrecta, detalle: _
Mensaje": "La moneda de la captura debe ser la misma que la moneda de la autorización"...}_



## Simulación



N/A



## Workaround



N/A

