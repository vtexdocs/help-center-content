---
title: 'El componente ProductImage no actualiza sus imágenes en función del cambio de las especificaciones SKU.'
id: 3NATd5bJRoMbzepedPaIEu
status: PUBLISHED
createdAt: 2022-09-30T22:16:54.477Z
updatedAt: 2023-05-23T18:34:55.163Z
publishedAt: 2023-05-23T18:34:55.163Z
firstPublishedAt: 2022-09-30T22:16:54.836Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: el-componente-productimage-no-actualiza-sus-imagenes-en-funcion-del-cambio-de-las-especificaciones-sku
locale: es
kiStatus: Backlog
internalReference: 669619
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



Cuando un producto tiene más de una especificación, y el usuario cambia la selección de la especificación, el componente ProductImage no cambiará sus imágenes basándose en el cambio de la selección relacionada.

El componente SKUSelector compara el itemId (cadena devuelta desde el array product.items) con el selectedImageVariationSKU (cadena devuelta desde el skuSelector que es un objeto devuelto desde el contexto) para presentar la imagen correcta tras la selección del usuario, por lo que si el skuSelector.selectedImageVariationSKU no se actualiza; el valor permanecerá con el estado anterior y no actualizará la imagen mostrada en pantalla dentro del componente ProductImage.

Esto también afecta a la imagen en SKU Selector, ya que utilizan las mismas variables. Se ha observado que tras seleccionar un SKU y cargar la página en la URL del sitio web, selectedImageVariationSKU se quedaba con el estado anterior y no actualizaba la imagen mostrada en pantalla.


##

## Simulación


Evidencia: https://youtu.be/qr4-uTRFwcY



## Workaround


N/A

