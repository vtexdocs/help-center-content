---
title: "Inconsistencias en la visualización de datos en la interfaz de usuario de Masterdata"
id: 5Sq6WAfBWynrOIZx8rFKdu
status: PUBLISHED
createdAt: 2024-09-27T18:00:31.097Z
updatedAt: 2024-09-27T18:00:32.575Z
publishedAt: 2024-09-27T18:00:32.575Z
firstPublishedAt: 2024-09-27T18:00:32.575Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: inconsistencias-en-la-visualizacion-de-datos-en-la-interfaz-de-usuario-de-masterdata
locale: es
kiStatus: Backlog
internalReference: 1107262
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando un campo de una entidad está configurado para tener un valor por defecto y se accede a un documento con un valor nulo para este campo a través de la IU de Masterdata, la IU mostrará incorrectamente el valor por defecto. Este problema suele producirse con documentos creados antes de que se configurara este campo, ya que la creación del campo no actualiza retroactivamente los documentos existentes.



## Simulación



1. Comprobar el documento a través de la API y verificar que el campo en cuestión es nulo.
2. Acceda al mismo documento a través de la IU de Masterdata, donde el campo mostrará incorrectamente el valor por defecto configurado.



## Workaround


Actualice los documentos en los que el campo es nulo para que tengan el valor por defecto. Para ello, filtre los documentos con valores nulos mediante la API de búsqueda: API de búsqueda de datos maestros y actualizando el documento mediante la API de actualización parcial: API de actualización parcial.





