---
title: 'Actualizar las políticas comerciales disponibles del vendedor no activa la indexación automática'
id: 45FOjSN4a5ZhCqilQfUX99
status: PUBLISHED
createdAt: 2024-05-31T13:49:57.732Z
updatedAt: 2024-05-31T13:49:58.764Z
publishedAt: 2024-05-31T13:49:58.764Z
firstPublishedAt: 2024-05-31T13:49:58.764Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: actualizar-las-politicas-comerciales-disponibles-del-vendedor-no-activa-la-indexacion-automatica
locale: es
kiStatus: Backlog
internalReference: 1041874
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


En la interfaz de usuario de gestión de vendedores, elimine o añada una nueva política comercial a un vendedor.

Este proceso se guarda correctamente, sin embargo la información no se actualiza automáticamente en el indexador de productos relacionados con ese vendedor específico.

Como consecuencia, la oferta del vendedor en estos productos estará desactualizada como:
- aún disponible en la política comercial (si la acción fue eliminarla);
- no disponible en la política comercial (si la acción fue añadirla).



##

## Simulación



- Compruebe un producto que tiene una oferta de un vendedor con una política comercial específica;
- Elimine la política comercial de este vendedor utilizando la interfaz de usuario de gestión de vendedores;
- Compruebe que la acción no se ha reflejado en el producto.



## Workaround


Indexe el producto manualmente.





