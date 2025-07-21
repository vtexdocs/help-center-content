---
title: "El cambio de sinónimos de unidireccional a bidireccional no funciona"
id: 2r4Bpw3WEk6BaaJOJb1WxM
status: PUBLISHED
createdAt: 2024-12-11T15:03:46.398Z
updatedAt: 2024-12-11T15:03:47.251Z
publishedAt: 2024-12-11T15:03:47.251Z
firstPublishedAt: 2024-12-11T15:03:47.251Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: el-cambio-de-sinonimos-de-unidireccional-a-bidireccional-no-funciona
locale: es
kiStatus: Backlog
internalReference: 1149205
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cambiar el tipo de sinónimo de unidireccional a bidireccional no funciona. Después de guardar el cambio, volverá al tipo anterior.


##

## Simulación



- Crea un sinónimo unidireccional con términos en ambos campos y guarda.
- Edita el tipo de sinónimo a bidireccional y guarda.
- Vuelve a editar el sinónimo y observa que sigue siendo unidireccional pero con los términos del segundo campo copiados en el primero.



## Workaround


Borra manualmente el segundo campo ("_Lo que la búsqueda devuelve además_") antes de cambiar el tipo a unidireccional.





