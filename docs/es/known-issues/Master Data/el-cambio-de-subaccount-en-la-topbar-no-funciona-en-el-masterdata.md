---
title: "El cambio de subaccount en la topbar no funciona en el Masterdata"
id: nvnf7smhUW2uy0saI6I2w
status: PUBLISHED
createdAt: 2018-12-05T22:53:38.886Z
updatedAt: 2022-12-22T20:45:47.761Z
publishedAt: 2022-12-22T20:45:47.761Z
firstPublishedAt: 2018-12-05T23:03:43.875Z
contentType: knownIssue
productTeam: Master Data
author: 2mXZkbi0oi061KicTExNjo
tag: Master Data
slugEN: el-cambio-de-subaccount-en-la-topbar-no-funciona-en-el-masterdata
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Este error es extremadamente infrecuente y de bajo impacto. Afecta a una pequeña porción de clientes que al cambiar de una subaccount a otra es llevada al sitio de la tienda en lugar del CRM correcto.

## Simulación

1. Acceda a https: // {{account}} .vtexcrm.com.br
2. Seleccione un subaccount diferente en la topbar

## Workaround

Cambie manualmente la url a la cuenta deseada.
No olvide colocar `https: //` al principio de la URL

