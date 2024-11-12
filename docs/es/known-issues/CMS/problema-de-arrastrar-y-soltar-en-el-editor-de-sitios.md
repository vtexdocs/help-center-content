---
title: 'Problema de arrastrar y soltar en el Editor de Sitios'
id: 4DubZ5C0dmqKGQqAZ6nZjo
status: PUBLISHED
createdAt: 2022-10-25T15:31:15.485Z
updatedAt: 2023-03-09T14:04:38.040Z
publishedAt: 2023-03-09T14:04:38.040Z
firstPublishedAt: 2022-10-25T15:31:16.032Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: drag-and-drop-issue-on-site-editor
locale: es
kiStatus: Fixed
internalReference: 685103
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Los clientes no pueden utilizar la función de arrastrar y soltar en el editor del sitio para subir imágenes, esto probablemente ocurre duo nuestra nueva implementación de nuestro nuevo CMS Media Management.


##

## Simulación



Ir a cualquier cuenta y tratar de subir una imagen de banner a través de arrastrar y soltar

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)
https://share.vidyard.com/watch/RXWHL4QYir7i5h1U4zuEuJ


##

## Workaround


Subir imágenes sin usar arrastrar y soltar, o,

Trate de volver a una versión anterior de admin-pages sin algunas correcciones y CMS Media Management, que es la versión de admin-pages 4.43.1

Ejecute `vtex install vtex.admin-pages@4.43.1`
Esto resolverá el problema de arrastrar y soltar, pero otros problemas pueden aparecer de nuevo.

