---
title: 'La entrega programada puede mostrar un precio incorrecto al cambiar entre entrega y programada'
id: 1Jue9hi3G4ryML88dqWz4E
status: PUBLISHED
createdAt: 2023-03-13T20:40:19.424Z
updatedAt: 2023-03-13T20:40:20.098Z
publishedAt: 2023-03-13T20:40:20.098Z
firstPublishedAt: 2023-03-13T20:40:20.098Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: la-entrega-programada-puede-mostrar-un-precio-incorrecto-al-cambiar-entre-entrega-y-programada
kiStatus: Backlog
internalReference: 770250
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando se configura una promoción de valor máximo de envío, si empieza a cambiar entre entrega estándar y entrega programada varias veces, puede haber un precio de entrega programada diferente en la interfaz de usuario.


##

## Simulación



- Cree una promoción de valor máximo de envío;
- Arme un carrito que tenga entrega estándar y programada;
- Seleccione la entrega estándar;
- Seleccione la entrega programada;
- Siga alternándolo y, en algún momento, el precio de la entrega programada puede ser diferente del de la API


##

## Workaround


N/A



