---
title: "Deslizar la imagen del producto después de hacer zoom no revierte el zoom, lo que causa problemas de visualización."
id: 41UVOcLabjyv29Buupj1MO
status: PUBLISHED
createdAt: 2024-01-29T18:05:22.470Z
updatedAt: 2024-01-29T18:05:23.035Z
publishedAt: 2024-01-29T18:05:23.035Z
firstPublishedAt: 2024-01-29T18:05:23.035Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: deslizar-la-imagen-del-producto-despues-de-hacer-zoom-no-revierte-el-zoom-lo-que-causa-problemas-de-visualizacion
locale: es
kiStatus: Backlog
internalReference: 491180
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando se utiliza el vtex.store-components product-image, al deslizar una imagen hacia un lado después de hacer clic en ella para el zoom, la primera imagen se mantendrá ampliada, causando problemas de renderización cuando el usuario desliza de nuevo a ella.


##

## Simulación


En una PDP que utiliza vtex.store-components product-image, accede a la versión móvil de un producto con al menos dos imágenes.
Haz clic para hacer zoom en la primera imagen, y pasa a la siguiente.
Haz clic para ampliar la segunda imagen y vuelve a la primera.
Hacerlo una y otra vez puede causar problemas de visualización en la imagen ampliada.
Si vuelves a hacer clic en la imagen para alejarla, volverá a la normalidad.



## Workaround


Utiliza flechas para navegar entre las imágenes y reducir la posibilidad de que los usuarios opten por deslizarlas.

Establezca la propiedad "zoomMode": "hover" o "zoomMode": "open-modal". Evita el deslizamiento cuando la imagen está ampliada, pero cambia ligeramente el comportamiento.

