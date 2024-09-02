---
title: 'La vista previa del envío muestra erróneamente un mensaje de no disponibilidad para la recogida'
id: 6ntmev0Atk04FGnEy1U3QZ
status: PUBLISHED
createdAt: 2023-03-03T19:54:08.912Z
updatedAt: 2023-03-03T19:54:48.450Z
publishedAt: 2023-03-03T19:54:48.450Z
firstPublishedAt: 2023-03-03T19:54:09.559Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: la-vista-previa-del-envio-muestra-erroneamente-un-mensaje-de-no-disponibilidad-para-la-recogida
locale: es
kiStatus: Backlog
internalReference: 764457
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando se añade "selectedSla" (debe ser una recogida) y "selectedAddresses" vía API en un carrito con promoción de regalo, la tienda está configurada para geolocalización y utiliza polígonos, la vista previa del envío mostrará un mensaje de no disponibilidad para la recogida, que fue seleccionada vía API. Este comportamiento impactará en el flujo de compra ya que no permitirá avanzar después del envío.


##

## Simulación



- Configurar geolocalización y polígonos;
- Configurar una promoción de regalo para un artículo;
- Añadir el artículo al carrito;
- Enviar el "selectedSla" como recogida y "selectedAddresses" vía API;
- Acceder al carrito en la UI, verá un mensaje de no disponibilidad aunque la API sea correcta.



## Workaround


Cambie la opción a Entrega y vuelva a Recogida




