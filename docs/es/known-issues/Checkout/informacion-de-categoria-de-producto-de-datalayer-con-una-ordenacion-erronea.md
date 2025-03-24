---
title: 'Información de categoría de producto de dataLayer con una ordenación errónea'
id: 5M84UlbbxXG6msTBUYiksT
status: PUBLISHED
createdAt: 2022-12-13T18:02:07.567Z
updatedAt: 2023-02-27T21:49:22.058Z
publishedAt: 2023-02-27T21:49:22.058Z
firstPublishedAt: 2022-12-13T18:02:08.275Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: product-category-information-from-datalayer-with-a-wrong-sorting
locale: es
kiStatus: Fixed
internalReference: 328415
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


La información de la categoría del producto en el dataLayer en las páginas de pago se muestra en el orden incorrecto. Esto está representado por la propiedad "categoryTree".

Seguirán sus IDs, ordenados de menor a mayor, lo que puede no representar la jerarquía esperada para esta información.


##

## Simulación


Añade un producto al carrito y compara las propiedades "productCategoryIds" y "productCategories" del orderForm con la propiedad "categoryTree" del dataLayer.



## Workaround


La misma información puede ser recuperada de la API de orderForm en lugar de la dataLayer.




