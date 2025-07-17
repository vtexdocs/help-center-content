---
title: "La propiedad DefaultValue no se actualiza en la API de especificación"
id: 6qNrQvBzrXMfVRdC2RGGOm
status: PUBLISHED
createdAt: 2025-05-14T16:25:21.841Z
updatedAt: 2025-05-14T16:25:22.706Z
publishedAt: 2025-05-14T16:25:22.706Z
firstPublishedAt: 2025-05-14T16:25:22.706Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: la-propiedad-defaultvalue-no-se-actualiza-en-la-api-de-especificacion
locale: es
kiStatus: Backlog
internalReference: 1226096
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Describa el bug de forma concisa.Actualmente, la API para actualizar especificaciones https://developers.vtex.com/docs/api-reference/catalog-api#put-/api/catalog/pvt/specification/-specificationId-, en sus datos documentados, presenta el campo DefaultValue como una posible propiedad que puede ser actualizada.

Sin embargo, cambiar este campo una vez creada la especificación no da ningún resultado.


##

## Simulación


1 - Obtener datos, utilizando el verbo GET en la misma ruta, para una especificación que tenga un DefaultValue registrado en ella https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog/pvt/specification/-specificationId- O crear una especificación con uno.

2 - Utilizando el cuerpo de la respuesta como carga útil, intenta cambiar el campo DefaultValue

3 - El cuerpo de la respuesta no mostrará cambios, a pesar de que el cuerpo de la petición informado es diferente.



## Workaround


Cambie manualmente estos valores a través de la interfaz de administración.





