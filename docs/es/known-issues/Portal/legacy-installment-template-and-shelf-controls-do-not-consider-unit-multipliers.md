---
title: 'Los controles heredados de plantillas de plazos y estanterías no tienen en cuenta los multiplicadores de unidades'
id: 1E0Co7ssCUAKAgxCzlJoVn
status: PUBLISHED
createdAt: 2024-02-08T13:39:40.663Z
updatedAt: 2024-02-08T13:48:30.740Z
publishedAt: 2024-02-08T13:48:30.740Z
firstPublishedAt: 2024-02-08T13:39:41.744Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: los-controles-heredados-de-plantillas-de-plazos-y-estanterias-no-tienen-en-cuenta-los-multiplicadores-de-unidades
locale: es
kiStatus: Backlog
internalReference: 979205
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Actualmente, para la tienda que utiliza el CMS heredado, la plantilla heredada y los controles de estantería no se ajustan si el SKU tiene un multiplicador de unidades.

Por ejemplo, si tiene un artículo con un multiplicador de unidades de 2 y un controlador de plazos, los datos mostrados en las estanterías solo mostrarán las opciones de plazos de una sola unidad, en lugar de ajustarse a esta configuración.


##

## Simulación


1 - crear una sku con un multiplicador de unidades
2 - configure las opciones de instalación
3 - configure un controlador relacionado con la cuota, como $product.InstallmentValue
4 - los datos mostrados serán relativos a una sola unidad, solamente.



## Workaround


implementar una personalización front-end para sobrescribir los datos originales que se muestran.





