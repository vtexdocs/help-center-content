---
title: 'Error al modificar un índice si los campos son idénticos.'
id: Ckic7QH3kKyW3IA92A3Cm
status: PUBLISHED
createdAt: 2023-07-03T18:48:49.070Z
updatedAt: 2023-07-03T18:48:49.971Z
publishedAt: 2023-07-03T18:48:49.971Z
firstPublishedAt: 2023-07-03T18:48:49.971Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: error-when-changing-an-index-if-the-fields-are-identical
locale: es
kiStatus: Backlog
internalReference: 854634
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


La actualización de un índice de esquema puede dar lugar a un error 500 Internal Server cuando no hay cambios que realizar, esto significa que los valores de los campos son idénticos a los actuales.
Realizar una petición GET en la API para comprobar los índices revela que no es necesaria ninguna actualización, ya que el índice es idéntico al cuerpo proporcionado en la petición PUT.


##

## Simulación



1. Enviar una solicitud PUT para actualizar un índice de esquema a través de la API, proporcionando la carga útil necesaria en el cuerpo de la solicitud.
2. Verificar la respuesta de la API y observar si devuelve un **500 Internal Server Error**.
3. Realice una solicitud GET posterior en la API para recuperar los índices de esquema y compárelos con el cuerpo proporcionado en la solicitud PUT.



## Workaround


N/A

