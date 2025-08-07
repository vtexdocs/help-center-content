---
title: "Navegación regionalizada a la lista de vendedores seleccionados que no cumplen con el SKU asociado a un regalo."
id: K0njkHYwYPIPCpnXFM5O2
status: PUBLISHED
createdAt: 2025-01-22T13:58:43.805Z
updatedAt: 2025-01-22T13:58:44.533Z
publishedAt: 2025-01-22T13:58:44.533Z
firstPublishedAt: 2025-01-22T13:58:44.533Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: navegacion-regionalizada-a-la-lista-de-vendedores-seleccionados-que-no-cumplen-con-el-sku-asociado-a-un-regalo
locale: es
kiStatus: Backlog
internalReference: 1167349
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Para la navegación regionalizada en los casos en que hay SKUs de regalo asociados con el artículo base que no tienen disponibilidad en los mismos vendedores que el regalo, es posible que la heurística cree una lista de vendedores que resulte en que el artículo base no esté disponible en el carrito.


##

## Simulación



En una cuenta cuya navegación se basa en la región;

Cree una promoción de compre-uno-obtenga-uno-gratis, este obsequio debe ser una SKU y no estar en stock por los mismos vendedores que la SKU base.

Ahora, posiblemente cuando valide la lista de vendedores elegidos, verá que no tienen disponibilidad para el artículo base.



## Workaround


Para evitar esta situación, todo lo que tiene que hacer es asegurarse de que la SKU de regalo está disponible en los mismos vendedores que la SKU base.





