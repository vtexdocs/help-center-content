---
title: "La interfaz de usuario no actualiza la mejor opción de SLA en el carro"
id: 5H05jLUJA0gmSDTO6nMsPE
status: PUBLISHED
createdAt: 2022-03-26T02:30:36.692Z
updatedAt: 2024-02-16T20:26:13.531Z
publishedAt: 2024-02-16T20:26:13.531Z
firstPublishedAt: 2022-03-26T02:30:37.014Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: la-interfaz-de-usuario-no-actualiza-la-mejor-opcion-de-sla-en-el-carro
locale: es
kiStatus: No Fix
internalReference: 550201
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando tenemos dos SKUs en el carrito cuyo SLAID de los artículos tiene una intersección, este es el SLA que se ofrecerá en el carrito con leanShipping activo;
Sin embargo, si se elimina uno de estos SKUs y el mejor slaid del SKU que queda en el carrito es otro que el elegido anteriormente, la UI no recalcula para mostrarlo como opción para el usuario, la UI seguirá mostrando el SLA elegido cuando todavía había otros artículos en el carrito;



## Simulación


Para simular este escenario, es necesario que tengamos dos SKU en un carro;
Estas dos SKUs deben tener al menos un SLA que sea la intersección entre ellas;
Una de estas SKUs debe tener dos SLAs, uno con mejores condiciones y precios además del SLA que comparte con la otra SKU;

Al colocarlos en el carro se puede ver que el carro lo mostrará como una opción porque es el valor de intersección de los dos;
Al eliminar la SKU que tiene un solo ANS, el sistema no volverá a seleccionar el mejor ANS, manteniendo la elección anterior



## Workaround


N/A

