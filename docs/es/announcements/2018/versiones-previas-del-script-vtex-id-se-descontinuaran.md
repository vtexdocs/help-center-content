---
title: 'Versiones previas del script VTEX ID se descontinuarán'
id: 1IHQ2NS5McYgKySOmyEmgU
status: PUBLISHED
createdAt: 2018-03-19T21:14:22.078Z
updatedAt: 2019-12-31T15:13:29.533Z
publishedAt: 2019-12-31T15:13:29.533Z
contentType: updates
productTeam: Identity
author: authors_24
slugEN: old-versions-of-the-vtex-id-script-will-be-deprecated
locale: es
legacySlug: versiones-previas-del-script-vtex-id-se-descontinuaran
announcementImageID: ''
announcementSynopsisES: 'A partir del 21 de mayo, sólo la versión más actual del script del VTEX ID tendrá soporte de la plataforma.'
---

Utilizar versiones anteriores del script de VTEX ID hace que su tienda esté expuesta a brechas de seguridad ya resueltas por las versiones más recientes. Pensando en eso, decidimos mantener el soporte sólo para la última versión y discontinuar todas las anteriores. Este proceso se realizará en etapas, según el calendario siguiente:

| Versiones | Fecha final |
| ---------- | ---------- |
| 3.13.10 e anteriores | 07/05/2018 |
| 3.13.40 e anteriores | 21/05/2018 |

Para que este cambio ocurra, el script de VTEX ID debe llamarse desde el siguiente link:
`https://vtexid.vtex.com.br/api/vtexid/pub/authentication/vtexid.min.js`

Este nuevo método trae una serie de ventajas: aún más agilidad en las mejoras del script, garantía de que su tienda está usando la última versión y el fin de la necesidad de cambiar el endpoint después de una actualización.

> ⚠️ **Atención:**<br> No recomendamos el uso del link con la versión hard-coded, porque pronto vamos a suspender el soporte a ese modo de importación del script.

Como estos cambios afectan directamente el acceso del cliente a su tienda, le recomendamos que no espere el plazo final: cuanto antes empezar a utilizar el nuevo método de llamada del script de VTEX ID, mejor.
