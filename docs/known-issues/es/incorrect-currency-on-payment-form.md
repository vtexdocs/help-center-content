---
title: 'Moneda incorrecta en el formulario de pago'
id: 636reFJs0MeHQJO0NlQV7Z
status: PUBLISHED
createdAt: 2022-03-13T21:29:33.920Z
updatedAt: 2024-02-16T20:27:07.481Z
publishedAt: 2024-02-16T20:27:07.481Z
firstPublishedAt: 2022-03-13T21:29:34.493Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: moneda-incorrecta-en-el-formulario-de-pago
locale: es
kiStatus: No Fix
internalReference: 449286
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



El formulario de pedido muestra una moneda incorrecta (BRL en lugar de USD) cuando tenemos dos reglas diferentes para dos políticas comerciales (Brasil y Estados Unidos) con el conector de PayPal. Los clientes no pueden cambiar a la moneda correcta. Por lo tanto, al realizar el pedido, aunque la regla correcta coincida, obtenemos un error:

(400) Solicitud incorrecta, detalle: _
Mensaje": "La moneda de la captura debe ser la misma que la moneda de la autorización"...}_



## Simulación



N/A



## Workaround



N/A

