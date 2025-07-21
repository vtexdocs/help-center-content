---
title: 'El botón "Volver al sitio" lleva a gatewayCallback//Success en lugar de a la página placeOrder'
id: 7Hp6yYCblhbhrN3jHHigUC
status: PUBLISHED
createdAt: 2023-04-10T15:18:58.986Z
updatedAt: 2024-12-30T17:56:05.604Z
publishedAt: 2024-12-30T17:56:05.604Z
firstPublishedAt: 2023-04-10T15:18:59.672Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: el-boton-volver-al-sitio-lleva-a-gatewaycallbacksuccess-en-lugar-de-a-la-pagina-placeorder
locale: es
kiStatus: Backlog
internalReference: 786685
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando el cliente cierra una compra utilizando una tarjeta regalo y una app de pago, el botón "volver al sitio" o el flujo para volver al sitio no le lleva a la página de realizar pedido, sino a `/gatewayCallback//Success`.


##

## Simulación



1. Poner el GC de cualquier valor
2. Selecciona el método de pago app
3. Dentro de la app de pago, realiza una compra
4. Vuelve al entorno VTEX.



## Workaround


No hay solución




