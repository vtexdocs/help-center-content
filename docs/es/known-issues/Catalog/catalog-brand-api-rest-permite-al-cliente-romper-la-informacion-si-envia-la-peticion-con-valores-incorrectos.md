---
title: 'Catalog Brand API REST permite al cliente romper la información si envía la petición con valores incorrectos'
id: 6yIs7KNTiS1oghcobXNnVD
status: PUBLISHED
createdAt: 2024-10-30T18:59:26.880Z
updatedAt: 2024-10-31T12:51:32.710Z
publishedAt: 2024-10-31T12:51:32.710Z
firstPublishedAt: 2024-10-30T19:20:04.320Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-brand-api-rest-allows-the-client-to-break-the-information-if-sending-request-with-incorrect-values
locale: es
kiStatus: Backlog
internalReference: 1126473
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Hay un montón de rutas que soportan algún tipo de valor, pero si el cliente utiliza otro tipo de valor (por ejemplo, insertar null en lugar de boolean) puede romper la interfaz de producto / SKU / categoría / marca. Negando al cliente actualizar la información a través de admin.



##

## Simulación


Para las rutas `api/catalog/pvt/brand?an=`o` /api/catalog/pvt/brand/?an=`, la documentación dice que el campo `MenuHome` sólo acepta valores booleanos. Pero si enviamos una petición con "null" por ejemplo, la ruta devolverá un 200 y podremos insertar este valor. Después de esto, si intentamos editar la marca en la interfaz de administración, no podremos. Nos devolverá un error de tipo "Algo ha ido mal" con el mensaje `exception_message="Object cannot be cast from DBNull to other types."`.



##

## Workaround


Actualice la información de nuevo, a través de la API.






