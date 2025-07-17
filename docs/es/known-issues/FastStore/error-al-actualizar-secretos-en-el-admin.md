---
title: "Error al actualizar secretos en el Admin"
id: V5MAN3bb0peDm5qhHpg6r
status: PUBLISHED
createdAt: 2025-05-27T12:26:53.265Z
updatedAt: 2025-06-02T13:06:53.466Z
publishedAt: 2025-06-02T13:06:53.466Z
firstPublishedAt: 2025-05-27T12:26:54.455Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: error-al-actualizar-secretos-en-el-admin
locale: es
kiStatus: Fixed
internalReference: 1233661
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al utilizar Webops y tratar de editar un secreto que ya ha añadido a la función de interfaz de usuario, puede obtener el error:

    "Mensaje": "Error al actualizar el secreto en Vercel. Actualización de AWS bloqueada. Error: Se ha producido un error al actualizar el secreto en Vercel. Más información: Variable de entorno con clave \"\" no encontrada"



##

## Simulación



- Si estás usando Webops, intenta añadir un nuevo secreto en la Ui;
- Haga clic para actualizar el secreto;
- Recibirá un 500 Internal Server Error con el mensaje anterior.



## Workaround


N/A





