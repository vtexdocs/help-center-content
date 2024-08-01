---
title: 'El filtro "Especificación del producto" del módulo de recogida asume valores incorrectos.'
id: 2vg3t5kp7j4Ttla53pVjck
status: PUBLISHED
createdAt: 2023-10-26T22:22:44.895Z
updatedAt: 2023-10-26T22:22:45.413Z
publishedAt: 2023-10-26T22:22:45.413Z
firstPublishedAt: 2023-10-26T22:22:45.413Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: el-filtro-especificacion-del-producto-del-modulo-de-recogida-asume-valores-incorrectos
locale: es
kiStatus: Backlog
internalReference: 926593
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En el módulo Recogida, el filtro Especificaciones del producto no funciona correctamente cuando la especificación tiene el tipo "Texto" y "Texto grande". Cuando se selecciona este tipo de especificación, se abre un cuadro de texto para insertar los posibles valores separados por una coma, tabulador o enter. Sin embargo, cuando se teclea un solo carácter, el sistema lo asume como valor incluso sin separar los términos.


##

## Simulación



1. Cree una Especificación de Producto con el tipo "Texto"
2. Vaya al Módulo de Recogida, haga clic en el filtro "Más", seleccione "Especificación de Producto"
3. Localice la especificación que ha creado y escriba cualquier cosa, verá que incluso un solo carácter se convertirá en un término de búsqueda



## Workaround


Continúe escribiendo hasta completar el término y, a continuación, elimine los términos incorrectos





