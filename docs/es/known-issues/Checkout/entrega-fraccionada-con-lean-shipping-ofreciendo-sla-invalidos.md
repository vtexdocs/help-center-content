---
title: "Entrega fraccionada con Lean Shipping ofreciendo SLA inválidos"
id: 61Yq1WhmCclFtcum3YMtXn
status: PUBLISHED
createdAt: 2024-02-27T19:21:21.615Z
updatedAt: 2024-02-27T19:26:27.513Z
publishedAt: 2024-02-27T19:26:27.513Z
firstPublishedAt: 2024-02-27T19:21:22.667Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: entrega-fraccionada-con-lean-shipping-ofreciendo-sla-invalidos
locale: es
kiStatus: Backlog
internalReference: 990155
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando un carro de la compra incluye productos de diferentes vendedores, con diferentes canales de entrega e ID de SLA entre ellos, la interfaz de usuario de Checkout activa Lean Shipping, resumiendo los SLA disponibles para mostrar sólo las opciones "más rápida" y "más barata" para cada artículo.

Sin embargo, si existe una opción de entrega programada pero no es la más rápida ni la más barata, el conmutador de programación seguirá apareciendo en la IU, aunque Lean Shipping no la seleccionará como opción viable.



## Simulación



- Montar un carro con al menos 2 vendedores diferentes, donde un artículo tiene 3 ANS, donde el programado no es ni la opción más rápida ni la más barata (y por lo tanto no se ofrecerá a través de Lean Shipping).
- Seleccione recogida en tienda.
- Utilice la interfaz de programación de la interfaz de usuario para la entrega del otro artículo.
- Observe que sigue aplicando el SLA más rápido/barato (no programado), en lugar del programado, ignorando de hecho su selección de ventana de entrega del paso anterior.



## Workaround


N/A





