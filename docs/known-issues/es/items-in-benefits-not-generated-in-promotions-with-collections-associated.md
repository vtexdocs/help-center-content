---
title: 'Partidas en beneficios no generados en promociones con cobros asociados'
id: 9HrnxMcq7VWFQOPhg9ywd
status: PUBLISHED
createdAt: 2024-02-21T15:09:01.111Z
updatedAt: 2024-02-21T15:09:01.913Z
publishedAt: 2024-02-21T15:09:01.913Z
firstPublishedAt: 2024-02-21T15:09:01.913Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: partidas-en-beneficios-no-generados-en-promociones-con-cobros-asociados
locale: es
kiStatus: Backlog
internalReference: 985850
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Al tener una promoción con productos/skus asociados a través de una colección, el productContext no está preparado para crear el array de items dentro de los beneficios asociados a los productos de la colección


##

## Simulación




- Crear una promoción
- Asociar los productos para esta promoción a través de una colección
- Abra uno de los productos que debe tener una promoción
- Abre la consola de tu navegador
- Comprueba en tu extensión React Dev Tools el productContextProvider
- Abre benefits.items, estará vacío o con el sku con el mismo id de la colección



## Workaround



La única forma posible de tener benefits.items lleno es llenando todos los skus asociados a la promoción en lugar de un cluster/colección





