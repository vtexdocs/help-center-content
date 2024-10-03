---
title: "El pedido fue facturado en el ERP pero continúa en el status 'Preparando Entrega'. ¿Que hacer?"
id: 4szpXviNMAkwOe2cCiMiMe
status: PUBLISHED
createdAt: 2017-12-19T13:00:23.800Z
updatedAt: 2023-03-31T21:05:01.214Z
publishedAt: 2023-03-31T21:05:01.214Z
firstPublishedAt: 2017-12-19T13:25:22.289Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_24
slugEN: the-order-was-billed-in-the-erp-but-remains-in-the-preparing-delivery-status
locale: es
legacySlug: el-pedido-fue-facturado-en-el-erp-pero-continua-en-el-statu-preparando-entrega
---

Si un pedido se ha facturado con éxito en su ERP, pero sigue detenido en el status `Preparando Entrega` en VTEX, puede que el producto no esté disponible en la API del marketplace, lo que impide el cambio de status.

Para comprobar si este es su caso, sigue los pasos a continuación: 

1. En el Admin VTEX, accede a **Pedidos > Todos los pedidos**, o escribe **Todos los pedidos** en la barra de búsqueda en la parte superior de la página.
2. Seleccione el pedido deseado para acceder a la página de [detalles del pedido](https://help.vtex.com/es/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl).
3. En la sección `Status del pedido`, haga clic en `Tentar nuevamente`.

Compruebe si aparece algún mensaje, y si se describe el error.

El comportamiento normal del sistema, en los casos en que el marketplace devuelve una información de error tal como `500` (error interno del servidor), es hacer nuevos intentos automáticos de procesar el status.

Pero si el mensaje indica que `la llamada al recurso del servicio devolvió el estado HTTP '404 (not found)'`, esto significa que no se encontró la ruta - o sea - el producto no se encontró en el marketplace.

En este caso, es necesario ponerse en contacto con el marketplace para que verifique el servicio de integración.
