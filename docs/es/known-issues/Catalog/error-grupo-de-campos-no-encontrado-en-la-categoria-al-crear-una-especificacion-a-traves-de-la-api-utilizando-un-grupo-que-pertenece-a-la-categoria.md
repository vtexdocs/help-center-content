---
title: "Error 'Grupo de campos no encontrado en la categoría' al crear una especificación a través de la API utilizando un grupo que pertenece a la categoría principal."
id: 2xkVJw4JcfdhgV1Ag2HdGu
status: PUBLISHED
createdAt: 2024-10-01T19:01:14.594Z
updatedAt: 2024-10-01T19:01:15.471Z
publishedAt: 2024-10-01T19:01:15.471Z
firstPublishedAt: 2024-10-01T19:01:15.471Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: error-field-group-not-found-in-the-category-when-creating-specification-via-api-using-group-that-belongs-to-parent-category
locale: es
kiStatus: Backlog
internalReference: 1109219
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Es posible crear una especificación utilizando la siguiente API:
https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/specification

El campo "FieldGroupId" es el ID del grupo de especificaciones que contiene la nueva especificación. Sin embargo, cuando el grupo pertenece a una categoría padre, no a la categoría utilizada para crear la especificación, se devuelve el error Grupo de campos no encontrado en la categoría.


##

## Simulación



1. Crear una categoría de grupo sobre una categoría Padre
2. Utiliza la API anterior para crear una nueva especificación sobre una categoría hija
3. Rellena el campo FieldGroupId con el groupId de la categoría padre
4. Compruebe que aparece el error.



## Workaround


Cree la especificación a través de UI, cree la especificación en la categoría padre o cree un grupo en la categoría hija a utilizar.





