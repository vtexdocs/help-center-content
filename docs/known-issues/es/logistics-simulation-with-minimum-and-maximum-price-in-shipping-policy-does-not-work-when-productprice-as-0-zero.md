---
title: 'La simulación logística con el precio mínimo y máximo en la política de envío no funciona cuando ProductPrice es 0 (CERO)'
id: 5gsBLbPMIZjZvkl5QHudVY
status: PUBLISHED
createdAt: 2022-03-30T20:10:30.205Z
updatedAt: 2024-02-16T20:26:15.370Z
publishedAt: 2024-02-16T20:26:15.370Z
firstPublishedAt: 2022-05-17T14:23:38.006Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: la-simulacion-logistica-con-el-precio-minimo-y-maximo-en-la-politica-de-envio-no-funciona-cuando-productprice-es-0-cero
locale: es
kiStatus: No Fix
internalReference: 553080
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



La simulación en el módulo de logística no considera el precio del producto que coincide con el valor mínimo y máximo en la política de envío para proporcionar las políticas de envío disponibles cuando el precio del producto es CERO.
Esto significa que si la simulación no tiene el precio del producto, la simulación proporciona políticas de envío que no pueden estar realmente disponibles debido al valor mínimo y máximo.



## Simulación



Debe tener una política de envío con el valor mínimo y máximo configurado. Luego simularlo con el producto sin precio.

Ejemplo:
Configure el Mínimo como $10 y el valor Máximo como $100 en la Política de Envío.
Después de eso, en la simulación no ponga el precio del producto.
Verá la Política de Envío como disponible para entregar.

Pero el resultado esperado es que no se muestre esa Política de Envío porque solo los productos entre $10 y $100 deben ser entregados.



## Workaround


Ejecutar la simulación con el precio del producto.

