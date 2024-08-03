---
title: 'Precio al contado incorrecto para artículos con UnitMultiplier superior a 1 en API de búsqueda inteligente'
id: 50Ufh8uqYt76Ddxrz0Id99
status: PUBLISHED
createdAt: 2023-11-11T00:26:08.800Z
updatedAt: 2023-11-11T00:26:09.509Z
publishedAt: 2023-11-11T00:26:09.509Z
firstPublishedAt: 2023-11-11T00:26:09.509Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: precio-al-contado-incorrecto-para-articulos-con-unitmultiplier-superior-a-1-en-api-de-busqueda-inteligente
locale: es
kiStatus: Backlog
internalReference: 934687
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



## Simulación


En la API REST o GraphQL de Intelligent Search, compruebe la propiedad para los elementos en este escenario específico.



## Workaround


El valor correcto para `spotPrice` se puede recuperar del array `Installments` dentro del mismo objeto `commertialOffer`.




