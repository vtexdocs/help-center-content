---
title: 'Producto creado con ID = 0.'
id: 5eMPxXAxxdJUKWMi1i8tWl
status: PUBLISHED
createdAt: 2022-05-04T15:30:22.045Z
updatedAt: 2022-11-25T21:45:57.621Z
publishedAt: 2022-11-25T21:45:57.621Z
firstPublishedAt: 2022-05-04T15:30:22.868Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: product-created-with-id-0
locale: es
kiStatus: Backlog
internalReference: 335840
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Es posible crear productos con ID = 0 si utilizan nuestra API o WebService.

El producto con ID = 0 nunca se indexará y romperá el flujo para crear nuevos productos usando la interfaz o usando sugerencias.



## Simulación


- Crear un producto con ID = 0 utilizando la API o el servicio web.



## Workaround


Para corregir el flujo de creación de nuevos productos, el usuario debe crear otro producto utilizando la API o el WebService pero esta vez, utilizando un ID válido. El siguiente producto creado por la interfaz o la sugerencia se creará correctamente.

