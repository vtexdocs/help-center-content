---
title: 'Transacción bloqueada en aprobado con conector NPS debido a psp_ResponseCod en la respuesta de liquidación.'
id: 1hRLO1HqsaSkvpu58eNYK2
status: PUBLISHED
createdAt: 2022-04-06T14:07:03.848Z
updatedAt: 2023-05-12T22:38:01.160Z
publishedAt: 2023-05-12T22:38:01.160Z
firstPublishedAt: 2022-04-06T14:07:04.301Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: transaccion-bloqueada-en-aprobado-con-conector-nps-debido-a-pspresponsecod-en-la-respuesta-de-liquidacion
locale: es
kiStatus: Backlog
internalReference: 557051
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Después de enviar la Solicitud de Captura al conector NPS, recibimos su respuesta. Sin embargo, actualmente no disponemos de ninguna acción para cuando el campo `psp_ResponseCod` devuelve un valor distinto de 2. Esto provoca que la operación de captura falle, impidiendo que el pago se capture correctamente.



## Simulación


No es posible simular el comportamiento ya que dependemos de la respuesta del proveedor.



## Workaround


N/A

