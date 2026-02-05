---
title: 'Nuevas rutas de API para la aprobación automática de SKUs Recibidos'
id: 5hpcWmKE2CnTYtuDXriUzR
status: PUBLISHED
createdAt: 2020-12-18T15:52:36.273Z
updatedAt: 2020-12-18T22:15:29.469Z
publishedAt: 2020-12-18T22:15:29.469Z
contentType: updates
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: 2020-12-18-new-api-routes-for-automatic-approval-of-received-skus
locale: es
legacySlug: nuevas-rutas-de-api-para-la-aprobacion-automatica-de-skus-recibidos
announcementImageID: 'undefined'
announcementSynopsisES: 'Marketplace: nuevas rutas de API para la aprobación automática de SKUs recibidos'
---

El módulo SKUs Recibidos es donde los *marketplaces* evalúan las sugerencias de productos enviadas al sistema por los sellers, para ser aprobadas e incorporadas a su catálogo, o rechazadas. Incluimos nuevas rutas en nuestra API de SKUs Recibidos, para que los operadores de *marketplaces* tengan una mayor agilidad al incorporar productos de forma automática.

## Más opciones de aprobación automática de SKUs vía API

Existen múltiples opciones de [aprobación de SKUs Recibidos](/es/docs/tutorials/catalogacion-manual-de-skus). Además de los endpoints que [activan y desactivan](/es/announcements/2020-10-26-marketplace-mejoras-en-el-modulo-skus-recibidos) la aprobación automática de SKUs en su *marketplace*, añadimos nuevos endpoints a nuestra API para configurar reglas de aprobación. La configuración puede ser aplicada a sellers específicos o a toda la cuenta del *marketplace*. La API permite configurar los siguientes campos:  

- **Aprobación automática:** configure reglas para la aprobación automática de SKUs.
- **Matcher:** registre un matcher para su *marketplace*, ya sea el Matcher VTEX o uno externo.
- **Puntuación del Matcher:** configure una puntuación específica para la aprobación o el rechazo de SKUs.
- **Mapeo:** configure el mapeo de especificaciones de productos para que la aprobación sea más criteriosa. 
.
## ¿Qué necesito hacer?

Por ahora, estas funcionalidades solo están disponibles a través de las llamadas de API REST para *marketplaces* VTEX. Si desea implementar la nueva configuración de aprobación automática en su tienda, verifique nuestra documentación en el [Portal del Desarrollador](https://developers.vtex.com/vtex-developer-docs/changelog/new-marketplace-endpoints-available).

