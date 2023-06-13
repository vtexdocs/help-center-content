---
title: Los pagos de débito que utilizan el conector Firstdata no pueden liquidarse debido a un error en el campo TransactionState
id: 6imTj4PTpJGGFqyhSLTPu9
status: PUBLISHED
createdAt: 2022-03-03T21:59:55.119Z
updatedAt: 2022-11-25T22:05:01.885Z
publishedAt: 2022-11-25T22:05:01.885Z
firstPublishedAt: 2022-03-03T21:59:55.506Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: los-pagos-de-debito-que-utilizan-el-conector-firstdata-no-pueden-liquidarse-debido-a-un-error-en-el-campo-transactionstate
kiStatus: Backlog
internalReference: 461095
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al utilizar el conector Firstdata para procesar pagos de débito, nuestro código espera que el campo `TransactionState` sea "CAPTURED". Sin embargo, el proveedor envía tanto "CAPTURED" como "SETTLED", lo que provoca un error:

Mensaje: Unknown Error on AutoSettleHay un error en el documento XML (1, 745).
&
Error en la ejecución de la operación de liquidación. Por favor, vea la excepción interna. Conector = Firstdata. Mensaje = La cadena de entrada no estaba en un formato correcto.

No he podido encontrar en la documentación de firstdata cuál es el correcto, pero hay ejemplos para ambos.



## Simulación



A veces, cuando se cancela una transacción utilizando este conector es posible observar este comportamiento.



## Workaround


No hay ninguna solución disponible.

