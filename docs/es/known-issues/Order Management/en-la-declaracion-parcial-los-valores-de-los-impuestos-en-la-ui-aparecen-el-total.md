---
title: 'En la declaración parcial, los valores de los impuestos en la UI aparecen el total'
id: 2I5a9hwrUo6s1htxOg8H1U
status: PUBLISHED
createdAt: 2022-04-11T13:15:06.455Z
updatedAt: 2024-02-16T20:28:35.114Z
publishedAt: 2024-02-16T20:28:35.114Z
firstPublishedAt: 2022-04-11T13:15:07.028Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: in-the-partial-return-the-tax-values-in-the-ui-appear-the-total
locale: es
kiStatus: No Fix
internalReference: 559458
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


En un pedido en el que tenemos dos artículos idénticos, y uno de los artículos es devuelto, las tarifas de ambos artículos se muestran en la interfaz de usuario, en lugar de mostrar sólo las tarifas del artículo que fue devuelto en la interfaz de usuario. Esta información sobre las tarifas es meramente informativa, ya que lo que realmente se devuelve es lo que se rellena en la nota de devolución.




## Simulación


Para simular este escenario, será necesario realizar un pedido con dos Artículos (SKU) iguales, veremos que en el pedido se sumarán las tarifas de los dos artículos y se mostrarán en la UI. Sin embargo, al devolver sólo uno de los artículos, veremos que se mostrará en la UI la devolución referida al total de tarifas, en lugar de mostrar las tarifas referidas a un solo artículo.






## Workaround


No tenemos una solución para este caso.

