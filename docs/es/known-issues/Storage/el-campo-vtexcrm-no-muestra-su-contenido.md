---
title: 'El campo vtexcrm no muestra su contenido'
id: 2jI4W9GOzuxyWbHApDVtI5
status: PUBLISHED
createdAt: 2022-04-25T14:19:28.685Z
updatedAt: 2022-11-25T22:12:58.716Z
publishedAt: 2022-11-25T22:12:58.716Z
firstPublishedAt: 2022-04-25T14:19:29.153Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: comment-vtexcrm-field-is-not-showing-its-content
locale: es
kiStatus: Backlog
internalReference: 565919
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



Actualmente, al guardar los datos en el campo "Comentar" de un formulario de Datos Maestros, los comentarios introducidos no se muestran al guardar y actualizar la página.









## Simulación





1. Ir a mystore.vtexcrm.com.br
2. Abra un documento CL (cualquiera sirve)
3. Abra el campo de comentarios


 ![](https://vtexhelp.zendesk.com/attachments/token/tUX7c40L6Mucgl7J60Ba4Ysn5/?name=image.png)


4. Prueba a insertar cualquier dato en él y guarda
5. Refresca la página, no habrá nada, aunque la API está mostrando contenido.








## Workaround



Cree un nuevo campo para esta entidad de datos como tipo de texto y llámelo Comentario.

A continuación, insértelo en el formulario y tendrá un campo de comentario "clónico" que es funcional.

