---
title: 'La interfaz de usuario de la caja no utiliza automáticamente el "envío reducido" para los artículos sin métodos de envío comunes.'
id: 2LXp8VCAay7Ic9MBfbtirT
status: PUBLISHED
createdAt: 2024-04-02T15:27:23.003Z
updatedAt: 2024-04-02T15:27:24.004Z
publishedAt: 2024-04-02T15:27:24.004Z
firstPublishedAt: 2024-04-02T15:27:24.004Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: la-interfaz-de-usuario-de-la-caja-no-utiliza-automaticamente-el-envio-reducido-para-los-articulos-sin-metodos-de-envio-comunes
locale: es
kiStatus: Backlog
internalReference: 329846
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


La configuración de Checkout UI permite desactivar el lean shipping (optimizaciones del modo de entrega), pero esto sólo es posible si todos los artículos del carrito tienen en común los mismos métodos de entrega. De lo contrario, el lean shipping debe aparecer forzosamente en el carrito incluso con la opción desactivada.
Sin embargo, en algunos escenarios, el comportamiento reportado arriba no sucede, y todos los métodos de entrega disponibles son presentados individualmente al comprador.

Como resultado, al no haber forma de seleccionar un método de entrega diferente para cada artículo, ningún envío mostrado corresponde a una única opción de entrega para todo el carro, presentándose opciones y paquetes sin sentido.


##

## Simulación



- Desactivar las **Opciones de envío optimizadas****;**
- Montar un carrito donde no todos los artículos tengan el mismo método de entrega;
- También es necesario que la tienda tenga activado "allowMultipleDeliveries";
- El escenario reportado mostrará las opciones abiertamente en lugar de lean shipping.


##

## Workaround


N/A




