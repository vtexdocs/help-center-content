---
title: "XML - No se aplica la moneda a plazos"
id: 7kPbxbGnpqeqU8XCD576hZ
status: PUBLISHED
createdAt: 2024-02-02T19:16:59.053Z
updatedAt: 2024-07-01T18:49:23.913Z
publishedAt: 2024-07-01T18:49:23.913Z
firstPublishedAt: 2024-02-02T19:16:59.992Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: xml-no-se-aplica-la-moneda-a-plazos
locale: es
kiStatus: No Fix
internalReference: 976295
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando se configura una moneda en un XML, se aplica a todos los campos excepto al campo "Cuota".

El campo "Cuota" siempre muestra la moneda como "R$", independientemente de la moneda configurada.



## Simulación



1. Cree/Actualice un XML con una moneda diferente a "R$" y habilite el campo Cuota.
2. 2. Compruebe que todos los campos de precio en el XML devuelven correctamente la moneda, excepto la cuota.



## Workaround


N/A





