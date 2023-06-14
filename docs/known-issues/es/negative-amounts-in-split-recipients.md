---
title: 'Importes negativos en los beneficiarios de la división'
id: 7j3wwcjbTt1LFBD3TM9Bus
status: PUBLISHED
createdAt: 2022-03-03T18:40:21.910Z
updatedAt: 2022-11-25T22:04:28.548Z
publishedAt: 2022-11-25T22:04:28.548Z
firstPublishedAt: 2022-03-03T18:40:22.178Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: importes-negativos-en-los-beneficiarios-de-la-division
kiStatus: Backlog
internalReference: 388580
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En un escenario de Mercado con división de pagos cuando el mercado no tiene comisión en la transacción, redondear cualquiera de los valores de referencia (buyTotal o totalSellers) puede resultar en una cantidad negativa para el mercado.


Estamos enviando un importe negativo a los destinatarios en la carga útil de **Enviar solicitud de liquidación** para el conector.
Entonces, recibimos el mensaje de una solicitud errónea del conector, informando: **Valor de división no válido,** después de algunas horas de enviar la solicitud, recibimos el callback, la transacción sigue el flujo normal, hasta ahora no hemos experimentado ningún otro comportamiento para la transacción




## Simulación


Poner en el carrito dos SKU idénticos que tienen descuentos. Para calcular el valor del artículo individualmente, el sistema suma los descuentos y luego los divide por el total de artículos, lo que provoca una diferencia entre el totalSellers y buyTotal.



## Workaround


Por el momento no tenemos una solución.

