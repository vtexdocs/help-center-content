---
title: 'Campo de categoría global XML que muestra la información definida en el nivel global de categoría.'
id: 508Gdn8StafQKOa2Wyfr8u
status: PUBLISHED
createdAt: 2022-01-21T17:38:16.365Z
updatedAt: 2024-02-16T20:30:04.149Z
publishedAt: 2024-02-16T20:30:04.149Z
firstPublishedAt: 2024-01-23T15:32:13.423Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: xml-global-category-field-showing-the-information-defined-on-category-global-level
locale: es
kiStatus: No Fix
internalReference: 282231
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


En los archivos XML, el campo para la categoría global está entregando la información de la categoría global definida en el nivel de categoría y no en el nivel de producto (el nivel de producto debe ser priorizado).


##

## Simulación


- Utilice un producto con una categoría global definida en el producto, y una categoría global diferente definida en el nivel de categoría;
- Cree un archivo XML y utilice la Categoría Global archivada;
- Compruebe el producto en el XML que muestra la categoría global definida en la categoría.



## Workaround


No hay solución.

