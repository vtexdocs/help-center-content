---
title: 'El cambio de accesorios no provoca la indexación'
id: 5asLRh4ChyuSEg1mRwWbgT
status: PUBLISHED
createdAt: 2024-05-22T18:30:14.578Z
updatedAt: 2024-05-22T18:30:15.412Z
publishedAt: 2024-05-22T18:30:15.412Z
firstPublishedAt: 2024-05-22T18:30:15.412Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: el-cambio-de-accesorios-no-provoca-la-indexacion
locale: es
kiStatus: Backlog
internalReference: 1037800
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando el comerciante realiza cambios o añade nuevos accesorios a la sku, el indexador no se activa automáticamente.

Esto hace que los cambios no se reflejen en la interfaz de usuario hasta que otra acción active el indexador.



## Simulación


Realiza un cambio o añade un accesorio a un sku.
Compruebe (después del tiempo de caché) que el PDP no se actualiza automáticamente.
Haga otro cambio en el sku.
Compruebe (después del tiempo de caché) que el PDP reflejará ambos cambios.



## Workaround


Forzar al indexador realizando otra acción sobre el sku.





