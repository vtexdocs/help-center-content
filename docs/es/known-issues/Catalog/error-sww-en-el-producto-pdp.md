---
title: 'Error SWW en el producto PDP'
id: 3DhuWocQwqiWxuAffdwYkg
status: PUBLISHED
createdAt: 2023-01-23T12:38:30.711Z
updatedAt: 2023-09-19T19:15:13.868Z
publishedAt: 2023-09-19T19:15:13.868Z
firstPublishedAt: 2023-01-23T12:38:31.382Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: error-sww-on-product-pdp
locale: es
kiStatus: Backlog
internalReference: 738108
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


En algunas ocasiones, al abrir la PDP del producto a través de la página de administración (o del dominio final) aparece en pantalla un error Algo ha ido mal.
Este comportamiento puede ocurrir debido a movimientos previos de la categoría en el árbol de categorías provocando una validación errónea de las especificaciones del producto/sku en el sistema de catálogos.


##

## Simulación


Abrir el enlace PDP del producto
Obtener un Algo salió mal en el frente



## Workaround


Para corregir este comportamiento, la especificación que causa el error no debe tener un valor en el producto.
O
Cualquier especificación SKU debe rellenarse porque puede considerarse erróneamente obligatoria
(compruebe si hay una SKU que tiene una especificación sin rellenar, pero las demás SKU del producto están rellenas)





