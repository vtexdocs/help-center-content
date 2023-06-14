---
title: Actualmente, la interfaz de usuario de transacciones tiene una limitación por la que no puede mostrar registros de /interactions si la carga útil supera las 5000 líneas.
id: 1hfRLo1OBLqlsR70Os9J7L
status: PUBLISHED
createdAt: 2023-03-27T13:40:46.551Z
updatedAt: 2023-03-27T13:40:47.042Z
publishedAt: 2023-03-27T13:40:47.042Z
firstPublishedAt: 2023-03-27T13:40:47.042Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: actualmente-la-interfaz-de-usuario-de-transacciones-tiene-una-limitacion-por-la-que-no-puede-mostrar-registros-de-interactions-si-la-carga-util-supera-las-5000-lineas
kiStatus: Backlog
internalReference: 778408
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente, la API /interactions sólo puede recuperar un máximo de 5000 líneas del archivo S3 donde se almacenan todos los datos. Esto puede crear un problema cuando una transacción genera registros que superan este límite.


##

## Simulación


Si una transacción genera registros que superan el límite de 5000 líneas, la API /interactions no puede recuperar todos los datos.



## Workaround


Si necesita los registros que faltan para investigar un problema, póngase en contacto con nuestro equipo de soporte para solicitar una auditoría directamente desde el archivo S3. Tenga en cuenta que esta operación conlleva un coste significativo, por lo que nuestro equipo analizará y recuperará estos datos cuando sea necesario.





