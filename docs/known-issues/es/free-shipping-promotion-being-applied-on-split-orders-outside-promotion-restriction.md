---
title: 'La promoción de envío gratuito se está aplicando en pedidos divididos fuera de la restricción de la promoción'
id: APAIGZx8tdtIjGsQJmvgu
status: PUBLISHED
createdAt: 2023-01-12T16:19:47.878Z
updatedAt: 2023-01-12T16:19:48.479Z
publishedAt: 2023-01-12T16:19:48.479Z
firstPublishedAt: 2023-01-12T16:19:48.479Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: la-promocion-de-envio-gratuito-se-esta-aplicando-en-pedidos-divididos-fuera-de-la-restriccion-de-la-promocion
kiStatus: Backlog
internalReference: 732302
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



En la promoción de envío gratuito la cuenta puede configurar una restricción a aplicar, por ejemplo, el método de envío.

En cartlinks con productos vendidos por diferentes vendedores puede ocurrir un escenario de pedidos divididos. Que algunos productos serán entregados por un vendedor y otros por otro vendedor.

Es común en estos escenarios que los métodos de envío de los vendedores sean diferentes, lo que significa que los pedidos divididos tendrán diferentes métodos de envío.

El problema se produce cuando la promoción de envío gratuito no valida la restricción del método de envío en los pedidos divididos. El resultado es que el envío será gratuito incluso para el pedido dividido con un método de envío diferente.

El resultado esperado es que sólo los pedidos divididos con métodos de envío iguales a la restricción tendrían envío gratuito.



## Simulación



1. Crear una promoción de envío gratuito con restricción de método de envío.
2. Simule un carrito con productos vendidos por diferentes vendedores (pueden ser vendedores de marca blanca) que tengan diferentes métodos de envío.
3. Asegúrese de que uno de los vendedores está utilizando un método de envío que no pertenece a la restricción de la promoción.
4. 4. Compruebe que el envío gratuito se aplica a toda la cesta.



## Workaround


No hay solución.

