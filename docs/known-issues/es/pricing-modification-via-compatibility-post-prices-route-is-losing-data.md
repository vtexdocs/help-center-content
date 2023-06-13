---
title: La modificación de los precios a través de la ruta de los precios de los puestos de compatibilidad está perdiendo datos
id: 4VqqNOUcRIGiZhxyVU4Ite
status: PUBLISHED
createdAt: 2022-03-29T19:12:47.179Z
updatedAt: 2022-11-25T22:12:44.964Z
publishedAt: 2022-11-25T22:12:44.964Z
firstPublishedAt: 2022-03-29T19:12:47.781Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: la-modificacion-de-los-precios-a-traves-de-la-ruta-de-los-precios-de-los-puestos-de-compatibilidad-esta-perdiendo-datos
kiStatus: No Fix
internalReference: 487698
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Hemos identificado un problema en la ruta de los precios de los puestos de compatibilidad cuando se envían demasiadas solicitudes en una ventana pequeña no estamos utilizando el precio más actualizado

Recomendamos encarecidamente que todas las cuentas dejen de utilizar nuestros apis de precios v1.



## Simulación


Enviar un lote de actualizaciones de precios y seguir los registros de splunk



## Workaround


1- recomendamos el uso de las apis de precios v2
2- distribuir mejor las peticiones, esperar como 30s entre ellas.

