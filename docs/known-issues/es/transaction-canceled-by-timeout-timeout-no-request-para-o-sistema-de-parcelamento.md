---
title: Transacción cancelada por tiempo de espera: "Timeout no request para o Sistema de Parcelamento"
id: 68L2ka1QJ3yEHTsId1arF7
status: PUBLISHED
createdAt: 2022-03-02T12:15:17.495Z
updatedAt: 2022-11-25T22:05:34.933Z
publishedAt: 2022-11-25T22:05:34.933Z
firstPublishedAt: 2022-03-02T12:15:18.179Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: transaccion-cancelada-por-tiempo-de-espera-timeout-no-request-para-o-sistema-de-parcelamento
kiStatus: Backlog
internalReference: 533844
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Transacción cancelada por timeout, revisando los logs en Splunk se puede ver el siguiente mensaje:

    exception_type=Vtex.Commerce.Checkout.Exceptions.CheckoutException exception_message="Timeout no request para o Sistema de Parcelamento" account_id="xxxxxxxxxxxxxxxxxxxx" message="Timeout no request para o Sistema de Parcelamento"


En los registros de transacciones se puede ver el siguiente mensaje:

    Una aplicación externa llamó para cancelar esta transacción Id = xxxxxxxxxxxxxxxxxxxx con Valor xxxx RequestId = xxxx-xxTxx:xx:xx-xxxx. Prioridad: por defecto. Autor: vtexappkey-appvtex.




## Simulación


No se puede simular.



## Workaround


No hay ninguna solución, la transacción se cancela inmediatamente cuando esto sucede.

