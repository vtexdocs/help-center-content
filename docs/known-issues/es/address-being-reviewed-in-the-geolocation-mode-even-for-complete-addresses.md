---
title: Dirección que se revisa en el modo de geolocalización incluso para direcciones completas
id: 6eHvTDvNlIiBGmlUJAAsNU
status: PUBLISHED
createdAt: 2022-08-11T18:40:54.009Z
updatedAt: 2022-11-25T21:50:49.555Z
publishedAt: 2022-11-25T21:50:49.555Z
firstPublishedAt: 2022-08-11T18:40:54.667Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: direccion-que-se-revisa-en-el-modo-de-geolocalizacion-incluso-para-direcciones-completas
kiStatus: Backlog
internalReference: 618724
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El botón "calcular envío", utilizado para la validación de la dirección en el modo de geolocalización (dirección insertada a través de Google Maps), se está mostrando incluso para direcciones completas. Debería mostrarse solo para las direcciones editadas -por cambio de información o por direcciones que estaban incompletas en un primer momento- para asegurar que son válidas, pero no para las direcciones completas.



## Simulación


En una tienda que esté utilizando el modo de geolocalización, inserte una dirección. Asegúrese de que sea una dirección completa que devuelva la calle, el barrio y sobre todo el número. El botón "calcular el envío" no debería aparecer.

Puede que no aparezca para todos los países.



## Workaround


N/A

