---
title: "Las PDP Faststore no están regionalizadas"
id: 17wHyAFHm5u2tyaxJ9mXNm
status: PUBLISHED
createdAt: 2024-08-28T19:48:35.858Z
updatedAt: 2025-03-31T14:46:09.620Z
publishedAt: 2025-03-31T14:46:09.620Z
firstPublishedAt: 2024-08-28T19:48:36.848Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: las-pdp-faststore-no-estan-regionalizadas
locale: es
kiStatus: Fixed
internalReference: 1088656
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Fastsore utiliza la búsqueda inteligente para cargar el PDP, pero no utiliza el regionID para cargarlo en tiendas regionalizadas. Esto lleva a problemas con la disponibilidad de los artículos. Además, utilizamos la propiedad `hideUnavailableItems=true` en la consulta para cargar el PDP. Esto puede provocar incoherencias entre el PLP (que está regionalizado) y el PDP.


##

## Simulación


Intente buscar un producto que tenga existencias en el regionID en el que está regionalizado. Si este producto no tiene stock en el vendedor global y sólo en vendedores específicos no relacionados con este regionID, el PLP y el PDP pueden tener información diferente.



## Workaround


Habilite "ShowIfNotAvailable" en los productos a través del Catálogo para minimizar los efectos de este problema.
Añada el vendedor como completo para que el producto sea devuelto




