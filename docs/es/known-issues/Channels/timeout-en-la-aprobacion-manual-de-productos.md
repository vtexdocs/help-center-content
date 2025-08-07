---
title: "Timeout en la aprobación manual de productos"
id: 7JfgNTNNPiKnpuSZZcRvx9
status: PUBLISHED
createdAt: 2021-08-31T18:29:22.514Z
updatedAt: 2022-12-22T20:41:19.464Z
publishedAt: 2022-12-22T20:41:19.464Z
firstPublishedAt: 2021-08-31T18:36:01.637Z
contentType: knownIssue
productTeam: Channels
author: 2mXZkbi0oi061KicTExNjo
tag: Suggestions
slugEN: timeout-en-la-aprobacion-manual-de-productos
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Cuando los _marketplaces_ intentan [aprobar manualmente los productos](https://help.vtex.com/es/tutorial/manual-sku-cataloging--tutorials_396) en la página de SKU Recibidos, obtienen el siguiente mensaje de error: "Error no especificado. Inténtalo de nuevo." Una de las razones por las que se produce este error es el _timeout_, una forma que tiene el sistema de indicar al usuario que el comando ha tardado más de lo esperado en completar la acción requerida. 

## Simulación

1. Acesse *MARKETPLACE* > __Sellers__.  
2. Haga clic en la página __SKU Recibidos__.   
3. En la pestaña *Pendientes*, seleccione un __SKU__ de la lista.  
4. Haga clic en `APROBAR COMO NUEVO PRODUCTO`.  
5. Rellene los campos __Categoría__ y __Marca__.   
6. Haga clic en `APROBAR`.  

Si el mensaje "Error no especificado. Inténtelo de nuevo." aparece en la pantalla, se trata de un error de timeout. 


## Workaround

Para evitar este problema, actualice la página e intente aprobar los SKUs manualmente de nuevo.


