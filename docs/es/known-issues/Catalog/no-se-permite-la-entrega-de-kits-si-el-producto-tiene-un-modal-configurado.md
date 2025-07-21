---
title: "No se permite la entrega de kits si el producto tiene un modal configurado"
id: 30tszbOaxDdBnw9zkKCK44
status: PUBLISHED
createdAt: 2025-04-07T20:53:57.169Z
updatedAt: 2025-04-07T20:53:58.151Z
publishedAt: 2025-04-07T20:53:58.151Z
firstPublishedAt: 2025-04-07T20:53:58.151Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: no-se-permite-la-entrega-de-kits-si-el-producto-tiene-un-modal-configurado
locale: es
kiStatus: Backlog
internalReference: 296045
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Actualmente no se permite la entrega de un kit si el producto tiene un modal configurado.


##

## Simulación



1-Configurar un transportista para que sólo acepte entregas de un modal específico.

2-Configure este modal en un SKU de kit y también en los SKUs de sus componentes.

3-Intente realizar una compra de este kit para que sea entregado por el transportista que tiene el modal.



## Workaround


Configure la política de envíos para que también entregue los modales indefinidos.

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Catalog/no-se-permite-la-entrega-de-kits-si-el-producto-tiene-un-modal-configurado_1.png)
Obs: Esta solución sólo está disponible si TODOS los componentes dentro del KIT tiene el modal configurado,





