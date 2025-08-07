---
title: "Los pagos a débito que utilizan el conector Firstdata no pueden liquidarse debido a un error en el campo TransactionState"
id: 6imTj4PTpJGGFqyhSLTPu9
status: PUBLISHED
createdAt: 2022-03-03T21:59:55.119Z
updatedAt: 2024-02-16T20:24:59.932Z
publishedAt: 2024-02-16T20:24:59.932Z
firstPublishedAt: 2022-03-03T21:59:55.506Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: los-pagos-a-debito-que-utilizan-el-conector-firstdata-no-pueden-liquidarse-debido-a-un-error-en-el-campo-transactionstate
locale: es
kiStatus: No Fix
internalReference: 461095
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al utilizar el conector Firstdata para procesar pagos de débito, nuestro código está diseñado para esperar que el campo TransactionState se establezca como "CAPTURED". Sin embargo, hemos encontrado un problema en el que el proveedor está enviando ambos valores "CAPTURED" y "SETTLED", lo que está causando un error:


    Mensaje de error: Unknown Error on AutoSettle. Hay un error en el documento XML (1, 745). & Error al ejecutar la operación de Liquidación. Consulte la excepción interna. Conector: Firstdata. Mensaje: La cadena de entrada no tenía el formato correcto.



##

## Simulación


No es posible simular ya que es un comportamiento intermitente que depende de la respuesta del proveedor de pago.



## Workaround


N/A





