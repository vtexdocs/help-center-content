---
title: 'Órdenes divididas compartiendo transacción con Vendedor de cambios el flujo de estado está roto'
id: 7mWWQxEPrb6c4xDnZVakK5
status: PUBLISHED
createdAt: 2024-08-15T21:15:41.792Z
updatedAt: 2024-08-15T21:15:42.663Z
publishedAt: 2024-08-15T21:15:42.663Z
firstPublishedAt: 2024-08-15T21:15:42.663Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: split-orders-sharing-transaction-with-change-seller-the-status-flow-is-broken
locale: es
kiStatus: Backlog
internalReference: 1082298
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



Los pedidos divididos que comparten la transacción con vendedores de cambio no pueden avanzar a facturados. Aunque todos los pedidos de los vendedores intermedios pasan a cancelado correctamente y el último vendedor pasa a facturado. Aún así, el pedido del mercado no puede completar todo el flujo y avanzar a facturado. Y posiblemente tras el tiempo de espera acaba pasando a cancelado.
Esto ocurre porque la pasarela con el conector utilizado no puede simplemente "liquidar" la parte del pago correspondiente al vendedor que se adelantó y liquidar el pago completo del pedido.
Cuando el otro pedido realiza un cambio de vendedor, intenta realizar un paso que se comunica con la pasarela para informar de este cambio de vendedor (asociado al minicarrito) ya que para la pasarela el pago ya ha sido capturado en su totalidad debido al error en esta llamada, y el pedido no puede ser procesado y avanzar en Workflow.


##

## Simulación


Órdenes divididas que comparten la transacción y una de esas órdenes necesita más de un vendedor de cambios.
Una vez que la transacción es liquidada el valor total será liquidado.
Así que al final de todo el progreso del mercado original de la orden dividida con el vendedor de cambio no se mueven a facturado. Y se cancelará después del tiempo de espera del flujo de trabajo.



## Workaround


Desafortunadamente, actualmente no hay solución para este escenario.





