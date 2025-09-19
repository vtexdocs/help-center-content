---
title: 'SKUs Recibidos: aprobación en masa'
id: PC9nNmPKePbiuH8pDoG9g
status: PUBLISHED
createdAt: 2020-09-04T19:13:19.581Z
updatedAt: 2021-03-26T15:49:22.429Z
publishedAt: 2021-03-26T15:49:22.429Z
contentType: updates
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: 2020-09-04-received-skus-bulk-approval
locale: es
legacySlug: skus-recibidos-aprobacion-en-masa
announcementImageID: 'undefined'
announcementSynopsisES: 'Ahora es posible seleccionar hasta 25 SKUs en el panel de SKUs Recibidos. Además, creamos una nueva API para eso.'
---

Los marketplaces gestionan los productos de sus sellers en el panel [SKUs Recibidos](/pt/tutorial/sugerindo-e-aprovando-skus--tutorials_396). Desde ahí, pueden revisar y aprobar los productos enviados por los sellers. En el panel se pueden seleccionar SKUs de forma masiva, aprobando o rechazando varios ítems de una sola vez. 

## ¿Qué cambió?

Ahora se puede hacer una selección en masa de hasta **25** ítems por página. Antes, se podía seleccionar solamente hasta 15 SKUs por página. Esta mejora permite una mayor agilidad en las operaciones que cuentan con aprobación manual de las ofertas. 

Además de cambios en el panel de SKUs Recibidos, creamos una nueva API que acompaña esa mejora. La API [Match Suggestions](https://developers.vtex.com/reference/match-received-skus#match) era, hasta entonces, la responsable por la aprobación individual de SKUs. Sin embargo, desarrollamos una [nueva API](https://developers.vtex.com/vtex-developer-docs/reference/match-received-skus-1#match-multiple-received-skus), que aprueba hasta 25 SKUs por llamada. Ambas APIs estarán disponibles para su uso.  

## ¿Qué debo hacer?

Si su tienda posee alguna integración que utiliza nuestra API de  Suggestions, podrá utilizar nuestro nuevo endpoint para permitir una mayor eficiencia en su operación. Para saber más, vea nuestra [documentación en el Developer Portal](https://developers.vtex.com/vtex-developer-docs/reference/match-received-skus-1#match-multiple-received-skus).

Esta funcionalidad del panel SKUs Recibidos ya está disponible en su Admin VTEX, y no altera ninguna configuración o dato de su tienda. Es una mejora en la interfaz que facilita el uso del panel en el día a día de su equipo.  

Para utilizarla, realice los siguientes pasos:

1. En el módulo *Marketplace*, acceda a la pestaña **Sellers**.  
2. Haga clic en **SKUs Recibidos**.  
3. Al final de la página, en **Mostrar filas**, cambie el número de ítems a `25`.   
4. Haga clic en el cuadro de selección de **SKU**.  
5. Haga clic en **Aprobar como producto nuevo**, o seleccione la acción deseada entre las opciones del botón **Más**.  

