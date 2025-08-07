---
title: "KIt Price Deletion no funciona"
id: 1AccAPGM5xE1u1E2px91nP
status: PUBLISHED
createdAt: 2025-05-27T17:58:23.566Z
updatedAt: 2025-05-27T17:59:10.973Z
publishedAt: 2025-05-27T17:59:10.973Z
firstPublishedAt: 2025-05-27T17:58:24.100Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: kit-price-deletion-no-funciona
locale: es
kiStatus: Backlog
internalReference: 1234002
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente, cuando se intenta eliminar un precio fijo que pertenece a un kit (paquete) en la administración de precios, el proceso no funciona.


##

## Simulación


1 - Para un artículo que es un skukit (el padre, que se compone de 1+ componentes) intente acceder a su UI de administración de precios --> https://.myvtex.com/admin/pricing#/prices/?tradePolicy=1&page=1&qtd=10

2 - Intenta borrar un precio fijo que pertenezca a dicho artículo --> no pasará nada



## Workaround


Eliminar dichos precios a través de la API





