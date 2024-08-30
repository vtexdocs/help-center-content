---
title: 'La información del cliente se elimina del sistema de perfiles sin una razón clara'
id: 3xnhH9VXa5Gj0oag44cG1I
status: PUBLISHED
createdAt: 2022-06-25T10:53:51.548Z
updatedAt: 2022-11-25T21:51:36.884Z
publishedAt: 2022-11-25T21:51:36.884Z
firstPublishedAt: 2022-06-25T10:53:51.851Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: la-informacion-del-cliente-se-elimina-del-sistema-de-perfiles-sin-una-razon-clara
locale: es
kiStatus: Backlog
internalReference: 469823
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


A veces recibimos informes en los que la información del cliente se ha eliminado de las entidades CL y AD de Master Data, lo que puede gestionarse de muchas maneras: uso directo de Master Data por parte de la propia tienda (UI, API, importación/exportación de datos) y otras integraciones internas de la plataforma, como el servicio CHK a través de Profile System.

Si bien los cambios se realizan con la misma clave interna de la aplicación, no hay claridad sobre el servicio de origen que llama al MD/PS. Pero, teniendo en cuenta el contexto, las modificaciones anteriores, su marca de tiempo a lo largo de la orden creada, podemos asociar fácilmente muchos de estos casos al Checkout.

Podemos relacionar fácilmente ocurrencias como esta con los KI's #340036 y #327630.



## Simulación


No hay forma directa de reproducir las órdenes en este escenario. Estamos restringidos a las órdenes reportadas previamente.



## Workaround


N/A

