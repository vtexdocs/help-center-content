---
title: 'Error en el mensaje de error de la compra'
id: 7jCEQoDRPvNwYCJmAt78im
status: PUBLISHED
createdAt: 2022-03-25T14:46:49.548Z
updatedAt: 2022-11-25T22:07:18.470Z
publishedAt: 2022-11-25T22:07:18.470Z
firstPublishedAt: 2022-03-25T15:30:16.292Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: error-en-el-mensaje-de-error-de-la-compra
kiStatus: Backlog
internalReference: 409895
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando se produce un error en el flujo de pago de afiliación de MercadoPagov2 en la página de pago, los detalles del mensaje se muestran sin formato para acentos y caracteres especiales.



## Simulación



1. Configurar la afiliación al Gateway de MercadoPagoV2
2. Configurar una condición de pago con tarjeta de crédito para procesar con MercadoPagoV2
3. Ir a la caja y comprar un artículo al azar usando una tarjeta falsa
4. El checkout devolverá el error con caracteres erróneos entre las letras del mensaje



## Workaround


N/A

