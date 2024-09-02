---
title: 'Valor de pago diferente cuando se mezclan los tipos de vendedores para el mismo vendedor en un carro.'
id: 7txlcqRF5XLB014Z31pXaL
status: PUBLISHED
createdAt: 2023-05-08T22:25:15.897Z
updatedAt: 2023-05-08T22:25:16.585Z
publishedAt: 2023-05-08T22:25:16.585Z
firstPublishedAt: 2023-05-08T22:25:16.585Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: valor-de-pago-diferente-cuando-se-mezclan-los-tipos-de-vendedores-para-el-mismo-vendedor-en-un-carro
locale: es
kiStatus: Backlog
internalReference: 821741
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En los casos en los que un vendedor actúe como vendedor de marca blanca y como vendedor habitual para distintos artículos del mismo carrito, el importe del pago será con el valor del envío duplicado.


##

## Simulación



- Añadir un artículo realizado por la marca blanca de un vendedor en el carro;
- Añada otro artículo del mismo vendedor pero como vendedor habitual;
- Realice el pedido; verá valores diferentes en el pedido y en la transacción.



## Workaround


Absténgase de mezclar los tipos de vendedores para el mismo vendedor.




