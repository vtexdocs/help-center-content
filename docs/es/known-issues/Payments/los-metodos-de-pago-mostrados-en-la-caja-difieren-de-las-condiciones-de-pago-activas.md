---
title: 'Los métodos de pago mostrados en la caja difieren de las condiciones de pago activas.'
id: 1cpVNspn5G6je4EZKzvCF9
status: PUBLISHED
createdAt: 2022-09-27T16:32:55.806Z
updatedAt: 2024-06-07T21:23:28.431Z
publishedAt: 2024-06-07T21:23:28.431Z
firstPublishedAt: 2023-04-10T15:11:01.389Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: payment-methods-displayed-at-checkout-differ-from-active-payment-conditions
locale: es
kiStatus: Backlog
internalReference: 666469
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Este KI se manifiesta de dos maneras en la caja:

1. Los métodos de pago **no** aparecen en la página de pago, incluso cuando la condición de pago asociada está activa durante más de 10 minutos.
2. 2. Los métodos de pago **permanecen** en la página de pago incluso cuando la condición de pago asociada está desactivada durante más de 10 minutos.

Se trata de un problema intermitente y no se sabe cómo reproducir este comportamiento. Hay una mayor incidencia en los métodos de pago personalizados.


##

## Simulación


N/A



## Workaround



1. Guardando de nuevo la regla.
2. Reindexar todos los sistemas de pago en la caja a través de la API.

