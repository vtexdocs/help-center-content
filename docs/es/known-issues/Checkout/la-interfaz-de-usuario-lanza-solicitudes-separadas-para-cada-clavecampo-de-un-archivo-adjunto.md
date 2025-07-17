---
title: "La interfaz de usuario lanza solicitudes separadas para cada clave/campo de un archivo adjunto."
id: 5IF3veMFTFi9dERoEokokt
status: PUBLISHED
createdAt: 2024-03-01T21:05:37.154Z
updatedAt: 2024-03-01T21:07:41.105Z
publishedAt: 2024-03-01T21:07:41.105Z
firstPublishedAt: 2024-03-01T21:05:37.941Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: la-interfaz-de-usuario-lanza-solicitudes-separadas-para-cada-clavecampo-de-un-archivo-adjunto
locale: es
kiStatus: Backlog
internalReference: 336371
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando se establece el valor de un campo de adjunto de artículo a través de la interfaz de usuario, esto desencadena una solicitud para actualizar el orderForm, incluso si todavía hay más campos restantes.
Esta solicitud será procesada, y la respuesta con el orderForm actualizado.

En los casos en los que el archivo adjunto tenga varios campos de texto abiertos, esto puede provocar que los campos posteriores se sobrescriban mientras se escriben sus valores.
Esto ocurre porque la solicitud de actualización se habrá enviado cuando este campo aún estaba en blanco, por lo que también estará en blanco en la respuesta.

En los casos en los que el artículo tiene una suscripción adjunta con múltiples claves, puede aparecer un mensaje de error como "unable to communicate with seller" / "não foi possível se comunicar com o vendedor".
Esto ocurre porque la suscripción esperará que se hayan rellenado múltiples claves, pero la primera solicitud sólo habrá enviado una.


##

## Simulación


Cree un archivo adjunto con al menos dos claves/campos.
Añada un artículo vinculado a este archivo adjunto a su cesta y, a continuación, añada el archivo adjunto.
Por último, establezca el valor de un campo, y observe el comportamiento que sigue.



## Workaround


N/A




