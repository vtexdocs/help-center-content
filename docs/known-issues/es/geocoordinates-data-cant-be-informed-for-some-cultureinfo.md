---
title: Los datos de GeoCoordinates no pueden ser informados para algunos cultureInfo
id: 4MjLbyrniWsPKpFBHgn8sG
status: PUBLISHED
createdAt: 2022-05-19T16:19:45.245Z
updatedAt: 2022-11-25T21:52:55.550Z
publishedAt: 2022-11-25T21:52:55.550Z
firstPublishedAt: 2022-05-19T16:19:45.749Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: los-datos-de-geocoordinates-no-pueden-ser-informados-para-algunos-cultureinfo
kiStatus: Backlog
internalReference: 582065
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Algunas opciones de "cultureInfo", como "en-ZA" (Sudáfrica) están generando problemas junto con la propiedad "geoCoordinates" del servicio de pago.
Esta información se utiliza desde el cálculo de las opciones de envío hasta la definición de un "regionId" (los vendedores que abarcan una dirección).
La información enviada será rechazada, generando errores o simplemente siendo ignorada dependiendo de la API.
Parece estar relacionado con el separador de decimales y miles para ciertos "cultureInfo" - para "en-ZA" parece estar relacionado con que el separador de miles es un espacio en blanco, aunque su separador decimal es una coma, como se usa en otros países.



## Simulación


- tener una tienda configurada con "en-ZA" como "cultureInfo" (definida en la política comercial)
- intentar calcular un regionId en su API o incluso recuperar los SLA (opciones de envío) en una solicitud de simulación



## Workaround


No hay una solución directa para utilizar el "cultureInfo" correcto, pero puede intentar encontrar opciones alternativas que se comporten como la opción esperada.
Tenga en cuenta que el "cultureInfo" define principalmente el idioma, pero también el formato de los números, las fechas y la curencia, incluida la posición del símbolo de curencia.

