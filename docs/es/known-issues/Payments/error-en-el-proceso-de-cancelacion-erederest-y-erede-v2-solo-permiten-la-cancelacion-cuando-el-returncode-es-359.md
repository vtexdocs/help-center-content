---
title: 'Error en el proceso de cancelación. ERedeRest y E-Rede V2 sólo permiten la cancelación cuando el returnCode es 359'
id: 5lNLTmKp1xRfewx9OyhcNk
status: PUBLISHED
createdAt: 2023-01-26T18:29:35.310Z
updatedAt: 2023-12-01T16:41:01.605Z
publishedAt: 2023-12-01T16:41:01.605Z
firstPublishedAt: 2023-01-26T18:29:36.467Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: error-in-the-cancellation-process-erederest-and-erede-v2-only-allows-cancelation-when-the-returncode-is-359
locale: es
kiStatus: Backlog
internalReference: 740084
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Los conectores heredados, ERedeRest y E-Rede V2, inician las cancelaciones enviando una petición al proveedor y esperan un "returnCode": "359" indicando una cancelación exitosa. Cualquier otro código es interpretado por nuestra pasarela como un estado indefinido, provocando que la transacción se quede atascada en un estado de cancelación. Aunque en algunos casos, la solicitud de reembolso/cancelación se realiza correctamente. Esto provocaba repetidos intentos de cancelación, incluso cuando la cancelación ya había sido procesada por el proveedor.


##

## Simulación


No se puede simular ya que dependemos de la respuesta del proveedor.



## Workaround


Si el pago por parte del proveedor ya está cancelado

    {"returnCode": "355", "returnMessage": "Transacción ya cancelada."}

El equipo de soporte del producto tiene la opción de utilizar una API interna, `force-cancel-status`, para actualizar el estado del pago y de la transacción a `cancelado`.




