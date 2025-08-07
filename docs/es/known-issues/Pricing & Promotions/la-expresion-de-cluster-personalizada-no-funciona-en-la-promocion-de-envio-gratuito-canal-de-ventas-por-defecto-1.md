---
title: "La expresión de cluster personalizada no funciona en la promoción de envío gratuito + canal de ventas por defecto (1)"
id: 27QJfNVhuPNiRxqQiXPRt2
status: PUBLISHED
createdAt: 2022-03-16T19:36:36.102Z
updatedAt: 2024-02-16T20:29:37.996Z
publishedAt: 2024-02-16T20:29:37.996Z
firstPublishedAt: 2022-03-16T19:36:36.504Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: la-expresion-de-cluster-personalizada-no-funciona-en-la-promocion-de-envio-gratuito-canal-de-ventas-por-defecto-1
locale: es
kiStatus: No Fix
internalReference: 334027
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente las expresiones de cluster personalizadas no funcionan en las promociones de tipo envío gratuito.








## Simulación


1) Crear una expresión de cluster personalizada en MasterData

2) Cree una promoción de cluster (https://help.vtex.com/pt/tutorial/criando-promocao-para-um-cluster-de-clientes--tutorials_342) en la que el tipo de promoción sea un beneficio de envío gratuito.

3) La promoción debe utilizar una SC que no sea la predeterminada de la tienda.

4) Intente registrarse con un usuario que sea válido para este cluster y añada un producto válido para él en el carrito (el beneficio no se aplicará).






## Workaround


Utilizar una expresión de cluster por defecto en la configuración de las promociones, como isCorportate.

