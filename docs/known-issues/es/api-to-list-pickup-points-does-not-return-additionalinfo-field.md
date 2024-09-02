---
title: 'La API para listar los puntos de recogida no devuelve el campo additionalInfo'
id: 5YY5srSA2ZRiOSZiMY9UF9
status: PUBLISHED
createdAt: 2022-09-02T12:09:09.980Z
updatedAt: 2024-02-16T20:24:50.684Z
publishedAt: 2024-02-16T20:24:50.684Z
firstPublishedAt: 2022-09-02T12:09:10.777Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: la-api-para-listar-los-puntos-de-recogida-no-devuelve-el-campo-additionalinfo
locale: es
kiStatus: No Fix
internalReference: 650714
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Nuestra API para listar los puntos de recogida por ubicación siempre devuelve `null` en el campo `additionalInfo`. Sin embargo, como estos datos normalmente provienen de la API de logística, estos datos están presentes en el orderForm cuando se realiza un pedido en la caja.



## Simulación


En primer lugar, cree un punto de recogida en el administrador de la tienda y rellene el campo de información adicional (instrucciones de recogida y etiquetas). Después de eso, realiza una llamada a nuestra API que enumera los puntos de recogida por ubicación y allí puedes ver este campo con `null`.



## Workaround


No hay solución disponible.

