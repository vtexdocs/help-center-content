---
title: La posición de la imagen seleccionada en la PDP no se restablece al cambiar de producto
id: btvmr3xSpxnJnxbahLefT
status: PUBLISHED
createdAt: 2022-06-14T14:04:04.519Z
updatedAt: 2022-11-25T22:13:45.813Z
publishedAt: 2022-11-25T22:13:45.813Z
firstPublishedAt: 2022-06-14T14:04:04.957Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: la-posicion-de-la-imagen-seleccionada-en-la-pdp-no-se-restablece-al-cambiar-de-producto
kiStatus: Backlog
internalReference: 595434
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al seleccionar cualquier imagen en la PDP de un producto, si se pasa de esta PDP directamente a otra PDP, la posición de la imagen no se borrará - si estaba viendo la tercera imagen, verá directamente la tercera imagen en la nueva PDP.



## Simulación


Vaya a un PLP y seleccione cualquier imagen que no sea la primera (por ejemplo, la imagen número 2). Ahora busque un producto y selecciónelo en las sugerencias de la searchBar (no vaya al PLP de esta búsqueda). Notará que la imagen que se seleccionará en este nuevo PDP estará en la misma posición (imagen número 2), aunque sea un PDP diferente.



## Workaround


Actualiza la página y estará en la primera imagen.

