---
title: 'La validación de caracteres especiales de las colecciones anteriores (CMS) difiere de la de las colecciones nuevas'
id: 2Pc1VACj7VF9n1IDtO6Mr4
status: PUBLISHED
createdAt: 2022-10-31T20:38:49.460Z
updatedAt: 2022-12-20T16:28:44.401Z
publishedAt: 2022-12-20T16:28:44.401Z
firstPublishedAt: 2022-10-31T20:38:50.012Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: legacy-collections-cms-special-character-validation-diverges-from-new-collections
locale: es
kiStatus: Backlog
internalReference: 450569
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



Actualmente, si un usuario crea una colección utilizando el nuevo administrador de colecciones utilizando caracteres especiales, estos mismos datos aparecen en la aplicación CMS heredada.

Sin embargo, al intentar editar una subcolección con este nombre en la interfaz de usuario, hay una validación que impide al usuario guardar cualquier nombre con caracteres especiales que no existe en la nueva aplicación.

Este comportamiento podría llevar al usuario a pensar erróneamente que los elementos se han añadido a la colección mediante una acción de la interfaz de usuario.


* * *



## Simulación



## Workaround



