---
title: "Error con returnCode 355 en el proceso de cancelación con ERedeRest y E-Rede V2"
id: 5lNLTmKp1xRfewx9OyhcNk
status: PUBLISHED
createdAt: 2023-01-26T18:29:35.310Z
updatedAt: 2024-11-26T19:47:30.712Z
publishedAt: 2024-11-26T19:47:30.712Z
firstPublishedAt: 2023-01-26T18:29:36.467Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: error-con-returncode-355-en-el-proceso-de-cancelacion-con-erederest-y-erede-v2
locale: es
kiStatus: Backlog
internalReference: 740084
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Los conectores heredados, ERedeRest y E-Rede V2, inician las cancelaciones enviando una petición al proveedor y esperan un "returnCode": "359" indicando una cancelación exitosa. Cualquier otro código es interpretado por nuestra pasarela como un estado indefinido, provocando que la transacción se quede atascada en un estado de cancelación. Aunque en algunos casos, la solicitud de reembolso/cancelación se realiza correctamente. Esto provocaba repetidos intentos de cancelación, incluso cuando la cancelación ya había sido procesada por el proveedor.


##

## Simulación


No se puede simular ya que dependemos de la respuesta del proveedor.



## Workaround


Si el pago por parte del proveedor ya está cancelado

    {"returnCode": "355", "returnMessage": "Transacción ya cancelada."}

El equipo de soporte del producto tiene la opción de utilizar una API interna, `force-cancel-status`, para actualizar el estado del pago y de la transacción a `cancelado`.

Esto puede no funcionar en transacciones con múltiples pagos, dependiendo de la consistencia del estado de sus liquidaciones.




