---
title: 'El botón "Volver al sitio" lleva a gatewayCallback//Success en lugar de a la página placeOrder'
id: 7Hp6yYCblhbhrN3jHHigUC
status: PUBLISHED
createdAt: 2023-04-10T15:18:58.986Z
updatedAt: 2023-04-10T15:18:59.672Z
publishedAt: 2023-04-10T15:18:59.672Z
firstPublishedAt: 2023-04-10T15:18:59.672Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: el-boton-volver-al-sitio-lleva-a-gatewaycallbacksuccess-en-lugar-de-a-la-pagina-placeorder
locale: es
kiStatus: Backlog
internalReference: 786685
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando el cliente cierra una compra utilizando una tarjeta regalo y la app de pago MercadoPago, el botón "volver al sitio" no le lleva a la página de realizar pedido, sino a `/gatewayCallback//Success`.


##

## Simulación



1. Poner el GC de cualquier valor
2. Seleccione el método de pago "mercadoPago"
3. Dentro de la app de pago, realiza una compra con Efectivo => OXXO
4. Pulsa en "Volver a la web"



## Workaround


No hay solución




