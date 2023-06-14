---
title: 'Valor de pedido divergente entre el mercado y el vendedor al utilizar anulación de precios y promociones'
id: 4OsDOEqVDpDTen3BFyHSYf
status: PUBLISHED
createdAt: 2023-02-17T18:37:04.409Z
updatedAt: 2023-02-17T18:37:05.327Z
publishedAt: 2023-02-17T18:37:05.327Z
firstPublishedAt: 2023-02-17T18:37:05.327Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: valor-de-pedido-divergente-entre-el-mercado-y-el-vendedor-al-utilizar-anulacion-de-precios-y-promociones
locale: es
kiStatus: Backlog
internalReference: 756629
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando el precio del artículo del vendedor _menos_ los descuentos del marketplace tiene un valor negativo, no se puede aplicar al artículo (no pueden tener un precio negativo), por lo que se considerará como cero y se estropeará con otros cálculos. Esto ocurre cuando el mercado está utilizando la función de anulación de precio del vendedor, generando valores más altos que la propia cuenta del vendedor, y luego combinando con una promoción.


##

## Simulación



- En el marketplace, configurar para sobrescribir el precio del vendedor y definir un precio superior;
- Crear una promoción en el mercado con un valor superior al precio del vendedor;
- Realice un pedido;
- Verá la diferencia en el valor del pedido entre el mercado y el vendedor.



## Workaround


Defina el precio del vendedor igual o superior al valor de los descuentos del mercado.



