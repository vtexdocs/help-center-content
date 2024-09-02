---
title: 'La primera dirección de la lista de direcciones incompleta no rellena los datos de perfil/envío en el pago'
id: 2AqDZb1AGBjmeMOBU0JkLQ
status: PUBLISHED
createdAt: 2024-01-03T20:44:07.692Z
updatedAt: 2024-01-03T20:49:41.249Z
publishedAt: 2024-01-03T20:49:41.249Z
firstPublishedAt: 2024-01-03T20:44:11.604Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: la-primera-direccion-de-la-lista-de-direcciones-incompleta-no-rellena-los-datos-de-perfilenvio-en-el-pago
locale: es
kiStatus: Backlog
internalReference: 366975
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando un usuario tiene más de una dirección en su perfil y la primera dirección de la lista de direcciones está incompleta, independientemente de que las demás sean válidas, la caja no rellena automáticamente sus datos de perfil/envío después de añadir su correo electrónico.


##

## Simulación



- Añadir 2 direcciones a un perfil, donde la 1ª está incompleta;
- Montar un carrito, y añadir el email;
- No se rellena ningún dato del perfil/dirección.



## Workaround


Elimine la dirección incompleta del perfil a través de Datos maestros




