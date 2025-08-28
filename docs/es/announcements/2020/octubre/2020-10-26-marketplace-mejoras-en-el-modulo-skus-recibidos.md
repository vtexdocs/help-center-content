---
title: 'Marketplace: mejoras en el módulo SKUs Recibidos'
id: 5AY73ocF0evsh3yzY6AMX6
status: PUBLISHED
createdAt: 2020-10-26T23:30:54.501Z
updatedAt: 2020-11-11T15:16:04.418Z
publishedAt: 2020-11-11T15:16:04.418Z
contentType: updates
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: 2020-10-26-marketplace-improvements-on-received-skus
locale: es
legacySlug: marketplace-mejoras-en-el-modulo-skus-recibidos
announcementImageID: 'undefined'
announcementSynopsisES: 'Marketplace: Bloquee SKUs para que no sean reenviados por el seller y configure la aprobación automática'
---

El panel de SKUs Recibidos es donde los marketplaces evalúan las sugerencias enviadas por los sellers, para ser aprobadas e incorporadas a su catálogo, o rechazadas. 

Ahora, al rechazar una sugerencia, el marketplace bloquea ese SKU para que no sea reenviado por el seller. También ponemos a disposición APIs para que los marketplaces creen reglas de aprobación automática y manual para los SKUs recibidos.  

## SKUs Recibidos: impedir que se reciba productos de los sellers

En el pasado, rechazar una sugerencia de SKU de un seller no significaba bloquear que este sea recibido de forma permanente. El marketplace tenía que indicar al seller que había recibido erróneamente esos SKU, pues si el seller los actualizaba, volverían a la lista de SKUs recibidos. En consecuencia, era necesario rechazarlos nuevamente.

A partir del 28/10/2020, rechazar un SKU recibido significa bloquear su envío por parte del seller. Esto significa que los sellers no podrán enviar su catálogo completo a la vez.

No se requiere ninguna configuración para activar esta funcionalidad, se instalará automáticamente en la plataforma VTEX. Para saber más sobre el bloqueo de SKUs, en el panel del módulo de SKUs recibidos, vea nuestro artículo sobre [Catalogación manual de SKUs](https://help.vtex.com/es/tutorial/sugerindo-e-aprovando-skus--tutorials_396).

Cabe señalar que esta acción puede ser deshecha. Es posible aprobar un SKU por API REST, si el marketplace quiere recibirlo de nuevo como una sugerencia del seller. Para obtener más información sobre la aprobación de SKUs, acceda a nuestra documentación de API en el Portal del Desarrollador.

![ES SKUs Recebidos Announcement](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2020/octubre/2020-10-26-marketplace-mejoras-en-el-modulo-skus-recibidos_1.jpg)

## Configuración de aprobación automática de SKUs

También hemos desarrollado una nueva API para configurar las reglas de aprobación de los SKUs recibidos.
Antes no era posible establecer la aprobación automática de SKUs, por ejemplo, para acelerar el proceso de su marketplace. Ahora, desarrollamos 7 endpoints diferentes para que usted pueda administrar las configuraciones de aprobación de los SKUs en el módulo de SKUs recibidos.

Las rutas de API REST permiten habilitar la aprobación automática de SKUs para un seller específico o para todo el marketplace.

Por ahora esta funcionalidad apenas está disponible a través de API. Consulta nuestra documentación de [API de configuración de aprobación](https://developers.vtex.com/vtex-developer-docs/reference/sku-approval-settings) para saber más.

