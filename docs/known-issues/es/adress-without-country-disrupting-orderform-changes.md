---
title: Dirección sin país que interrumpe la ordenCambios de formulario
id: 3LfFmUaetyqZij8MCBJtcY
status: PUBLISHED
createdAt: 2022-05-16T19:58:42.987Z
updatedAt: 2022-11-25T21:52:11.051Z
publishedAt: 2022-11-25T21:52:11.051Z
firstPublishedAt: 2022-05-16T19:58:43.429Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: direccion-sin-pais-que-interrumpe-la-ordencambios-de-formulario
kiStatus: Backlog
internalReference: 579814
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Si se inserta una dirección incompleta sin la información del "país" en un orderForm, no se pueden añadir artículos al mismo.

Esto ocurre porque el cálculo del envío depende de ello, pero mientras no haya artículos en el carrito, este proceso no se activa, permitiendo que se registren direcciones no válidas.

Ocurre sobre todo por el uso directo de la API. En los registros internos, la excepción puede encontrarse como "El campo País es obligatorio", bajo el código de estado 400.



## Simulación



- crear un orderForm (sin artículos todavía)
- añadir una dirección a través de la API SendAttachment (shippingData), sin la propiedad country
- para intentar añadir un artículo; generará una excepción genérica



## Workaround


Es necesario asegurar que cada dirección contiene la información del "país" desde la implementación del frontend.

