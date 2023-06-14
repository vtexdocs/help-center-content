---
title: 'Error al generar la orden de suscripción ""El mismo artículo no puede tener más de un ANS seleccionado"'
id: 2aBMa8ncalkqSm2s868i1q
status: PUBLISHED
createdAt: 2022-09-29T13:31:57.984Z
updatedAt: 2022-11-25T22:01:16.295Z
publishedAt: 2022-11-25T22:01:16.295Z
firstPublishedAt: 2022-09-29T13:32:01.838Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: error-al-generar-la-orden-de-suscripcion-el-mismo-articulo-no-puede-tener-mas-de-un-ans-seleccionado
kiStatus: Backlog
internalReference: 658185
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En los escenarios de pedidos de suscripción en los que un mismo artículo de compra acaba dividido en diferentes entradas, como la compra de 10 unidades del mismo artículo que se presenta como 7 unidades (A) y 3 unidades (B), el flujo de ejecución del ciclo de suscripción puede acabar eligiendo diferentes métodos de entrega entre el artículo A y el B, aunque sean la misma SKU.
En esta situación, se generará el error "El mismo artículo no puede tener más de un ANS seleccionado".
Esta selección cruzada puede ocurrir al evaluar cuál es el método de entrega más barato para cada artículo (A y B, por separado).



## Simulación


La simulación de este escenario requiere una combinación muy compleja de variables entre los sistemas implicados en el flujo de compra.



## Workaround


N/A

