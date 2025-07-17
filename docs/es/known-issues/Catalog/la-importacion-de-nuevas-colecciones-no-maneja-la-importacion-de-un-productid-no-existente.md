---
title: "La importación de nuevas colecciones no maneja la importación de un ProductID no existente"
id: 2bqGzlvbYqn7hVVfVbJZDO
status: PUBLISHED
createdAt: 2022-06-28T16:56:12.572Z
updatedAt: 2022-11-25T21:44:41.047Z
publishedAt: 2022-11-25T21:44:41.047Z
firstPublishedAt: 2022-06-28T16:56:12.844Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: la-importacion-de-nuevas-colecciones-no-maneja-la-importacion-de-un-productid-no-existente
locale: es
kiStatus: Backlog
internalReference: 398602
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Actualmente, en el administrador de la nueva colección, cuando el usuario intenta importar una ficha de producto con un único ID de producto que no existe en el catálogo de la cuenta, el proceso falla en su totalidad sin indicar qué línea/ID de producto ha fallado ni responder con un mensaje asertivo de la causa de origen del problema en el intento de importación.



## Simulación


1) Vaya a /admin/collections/{id}/ de una cuenta y haga clic en el botón de importación.

2) Elija el formato .XLS e intente importar una sola línea de un productID que actualmente no esté presente en el catálogo del usuario.

3) Se mostrará al usuario un mensaje de error inespecífico, algo así como "Error. Su archivo no fue importado. Intente importar este archivo de nuevo".

Este proceso debería señalar dónde se ha producido el fallo y/o procesar las otras líneas y no interrumpir todo el intento.

(Ej: Si intento importar 1000 líneas y sólo 1 línea está defectuosa (no existe) no podré importar nada y sin saber siquiera el motivo).



## Workaround


Opción A) Comprobar a grandes rasgos si todos los productIDs de la hoja existen realmente.
Opción B) Utilizar el módulo de colecciones heredado
Opción C) Utilizar la inserción de la API

