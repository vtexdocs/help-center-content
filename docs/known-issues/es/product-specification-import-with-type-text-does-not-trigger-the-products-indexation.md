---
title: 'La importación de especificaciones de producto con el tipo "texto" no activa la indexación del producto.'
id: 5eQB7LCCyDbVNQBQvWti33
status: PUBLISHED
createdAt: 2024-03-12T19:36:58.647Z
updatedAt: 2024-03-12T19:36:59.477Z
publishedAt: 2024-03-12T19:36:59.477Z
firstPublishedAt: 2024-03-12T19:36:59.477Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: la-importacion-de-especificaciones-de-producto-con-el-tipo-texto-no-activa-la-indexacion-del-producto
locale: es
kiStatus: Backlog
internalReference: 998658
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Al importar especificaciones de producto, los tipos con valores pre-registrados (como Checkbox o Radio) activan la indexación del producto, pero cuando el tipo es "Texto" no ocurre lo mismo.


##

## Simulación



- Registrar un campo con el tipo texto dentro de la categoría
- Importar un archivo con un nuevo valor
- Tenga en cuenta que el valor se actualizará en el Admin, pero el producto no se reindexará



## Workaround


Configure este tipo de campo a través de Admin o API





