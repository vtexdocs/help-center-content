---
title: 'Cómo cambiar la versión (upgrade o rollback) de una dependencia dentro de un workspace'
id: 3GxKR5gWesEOmUkOW864sg
status: ARCHIVED
createdAt: 2019-01-14T11:58:42.128Z
updatedAt: 2020-03-13T21:24:57.600Z
publishedAt: 
firstPublishedAt: 2019-01-14T12:19:43.139Z
contentType: tutorial
productTeam: VTEX IO
author: TnXcuQydAAOuwWACo864E
slug: como-cambiar-la-version-upgrade-o-rollback-de-una-dependencia-dentro-de-un-workspace
locale: es
legacySlug: 
subcategoryId: Z46a6rHVAaAucoiW0skQQ
---

Durante el desarrollo de su aplicación, posiblemente surgirá la necesidad de forzar la actualización de una dependencia específica, o realizar un rollback a una versión anterior.

Para obtener una lista de todas las dependencias y sus respectivas versiones en un workspace, ejecute el siguiente comando:

`vtex deps ls -k`

Para cambiar la versión, ejecute este comando:
`vtex deps update vtex.{NombreDeLaDependencia}@<version>`

El comando quedaría así, por ejemplo:
`vtex deps update vtex.styleguide@7.6.7`
