---
title: 'Especificaciones multiplicadas sobre catálogo'
id: 2d4LXPrbVibMR8atXO6o8X
status: PUBLISHED
createdAt: 2023-10-16T12:48:03.714Z
updatedAt: 2023-10-16T12:48:59.814Z
publishedAt: 2023-10-16T12:48:59.814Z
firstPublishedAt: 2023-10-16T12:48:04.717Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slug: especificaciones-multiplicadas-sobre-catalogo
locale: es
kiStatus: Backlog
internalReference: 919761
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


El mercado puede aprobar los productos enviados por los vendedores en el módulo de Skus Recibidos.

Cuando un producto tiene una especificación sku que coincide con la especificación que existe en la categoría del marketplace pero es un nuevo valor, este nuevo valor se crea en la especificación del marketplace.

Los valores multiplicados pueden ocurrir cuando más de un sku con el mismo "nuevo valor" está siendo aprobado al mismo tiempo en Skus Recibidos en la misma categoría (o árbol) en la que se creó la especificación.

Si la especificación se crea en la categoría raíz (no recomendado) este escenario podría ocurrir más fácilmente.



## Simulación



1. Cree una especificación sku en la categoría raíz;
2. 2. Elegir 2 (o más) skus para aprobar en el módulo de Skus Recibidos que tengan el mismo valor de especificación sku (el valor no puede existir previamente en el marketplace).
3. 3. Apruebe los skus (al mismo tiempo o en un pequeño intervalo) y compruebe si los valores de especificación se han multiplicado por el número de skus aprobados.



## Workaround


Apruebe los skus más lentamente y evite crear especificaciones en la categoría raíz.





