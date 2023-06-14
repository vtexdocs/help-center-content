---
title: 'Precio inconsistente cuando el SKU tiene un multiplicador de unidades diferente a 1'
id: NVtFiuWgptqa2gBEVmpOC
status: PUBLISHED
createdAt: 2022-09-05T13:05:50.789Z
updatedAt: 2023-02-27T14:22:04.935Z
publishedAt: 2023-02-27T14:22:04.935Z
firstPublishedAt: 2022-09-05T13:05:51.613Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: precio-inconsistente-cuando-el-sku-tiene-un-multiplicador-de-unidades-diferente-a-1
locale: es
kiStatus: Backlog
internalReference: 651102
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando algún SKU contiene un multiplicador de unidades diferente a 1, en algunas situaciones, el precio devuelto en store-graphql puede tener inconsistencias basadas en la división del precio devuelto desde la API de simulación:

calculatedSellingPrice / (unitMultiplier * 100)

También se aplica a los valores en cuotas que no consideran el valor del multiplicador unitario y la llamada de simulación envía el valor con el multiplicador unitario que se considera

Basado en:
https://vtexhelp.zendesk.com/agent/tickets/578022



## Simulación



## Workaround



