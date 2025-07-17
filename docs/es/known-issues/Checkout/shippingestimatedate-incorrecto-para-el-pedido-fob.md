---
title: "ShippingEstimateDate incorrecto para el pedido FOB"
id: 3WLcrdw0tEdOvlMCYx9uyd
status: PUBLISHED
createdAt: 2023-01-05T20:26:07.074Z
updatedAt: 2024-02-16T20:23:32.848Z
publishedAt: 2024-02-16T20:23:32.848Z
firstPublishedAt: 2023-01-05T20:26:07.500Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shippingestimatedate-incorrecto-para-el-pedido-fob
locale: es
kiStatus: No Fix
internalReference: 269104
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



## Simulación



- Crear un pedido vía API enviando el parámetro `"isFOB": true` en los "shippingData"
- Hacer un Get Order y comprobar que el parámetro "ShippingEstimateDate" no está considerando el "shippingEstimate" enviado por el marketplace


##

## Workaround


N/A




