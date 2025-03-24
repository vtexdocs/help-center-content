---
title: 'Las especificaciones SKU tienen prioridad sobre el título de la página'
id: 2AfzLrb7Vu3E4HBqH3l9iN
status: PUBLISHED
createdAt: 2024-08-29T20:58:07.401Z
updatedAt: 2024-08-29T20:58:08.064Z
publishedAt: 2024-08-29T20:58:08.064Z
firstPublishedAt: 2024-08-29T20:58:08.064Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: sku-specifications-taking-priority-on-the-page-title
locale: es
kiStatus: Backlog
internalReference: 1089440
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Se espera que el título de la página se base en los últimos o iniciales filtros. Los filtros de las especificaciones SKU siempre se establecen como el último de la miga de pan, que tiene lugar como el título de la página.


##

## Simulación


Si se navega por una página como "/verano-2024?map=nombresclaseproducto" y se aplica cualquier filtro que no sea una especificación SKU, el título de la página se mantendrá como "Verano 2024", pero un filtro como "tamaño=M" tendrá prioridad y el título se mostrará como "M".



## Workaround


N/A




