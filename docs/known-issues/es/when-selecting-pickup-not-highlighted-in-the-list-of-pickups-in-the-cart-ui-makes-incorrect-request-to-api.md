---
title: 'Cuando se selecciona una recogida que no está resaltada en la lista de recogidas del carrito, la interfaz de usuario hace una petición incorrecta a la API'
id: 42NRIpmVxU7XgOMGHlO6zI
status: PUBLISHED
createdAt: 2022-02-22T18:21:47.541Z
updatedAt: 2022-11-25T21:49:25.969Z
publishedAt: 2022-11-25T21:49:25.969Z
firstPublishedAt: 2022-02-22T18:21:48.067Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: cuando-se-selecciona-una-recogida-que-no-esta-resaltada-en-la-lista-de-recogidas-del-carrito-la-interfaz-de-usuario-hace-una-peticion-incorrecta-a-la-api
kiStatus: Fixed
internalReference: 529850
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando se selecciona una opción de recogida que no está resaltada, la interfaz de usuario realiza una solicitud incorrecta a la API, y con ello, la solicitud recibe un error y no actualiza los datos de esta recogida seleccionada.

Nota: esto sólo ocurre en el carrito; en la caja, las peticiones son correctas.



## Simulación


Utiliza una tienda que tenga muchas opciones de recogida (tienes que seleccionar una que no esté resaltada); en el carrito, elige ésta y verás que la petición que va a hacer es `api/checkout/pub/orderForms/simulation?sc=undefined&rnbBehavior=0` recibiendo un mensaje de error con `Message: "Se ha producido un error".

##


## Workaround


N/A

