---
title: 'Configurar grupos de envío'
id: tutorials_118
status: PUBLISHED
createdAt: 2017-04-27T22:18:51.290Z
updatedAt: 2023-03-28T13:20:14.467Z
publishedAt: 2023-03-28T13:20:14.467Z
firstPublishedAt: 2017-04-27T23:00:43.407Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: setting-up-shipment
legacySlug: configurar-grupos-de-envio
locale: es
subcategoryId: 1UL6Q7nUN6SkA2g2SUsECi
---

Esta es una configuración ampliamente utilizada cuando un flujo muy grande de pedidos acaba generando una demanda logística considerable, pues posibilita que un paquete espere el tiempo de preparación de otro para ser enviado en grupo, por una misma transportadora, a un destinatario final.

> ⚠️ Los grupos de envío son creados por la suma del tiempo de costo del inventario hasta el muelle y el tiempo de costo del muelle.

En la siguiente imagen vemos una configuración de envío de __6 días__. Cada caja representa el costo en días de un paquete, considerando sólo el __costo de inventario y el costo del muelle__.

La primera caja con tiempo total de __2 días__ esperará el item representado por la segunda caja con tiempo total de __5 días__. Pues definimos que el tiempo del envío es de hasta __6 días__, es decir, ítems con tiempo de entrega dentro de un período de 6 días se agruparán. La tercera caja seguirá en una entrega diferente pues excede el tiempo de envío.

El período considera T = 0 como la fecha del pedido.

![Configuração em estoque e entrega ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/env%C3%ADo/configuraci%C3%B3n-de-inventario-y-env%C3%ADo/configurar-grupos-de-envio_1.png)

## Cómo configurar el envío en grupo

1. En el Admin VTEX, accede a **Configuración de la tienda > Envío > Configuración**, o escribe *Envío* en la barra de búsqueda en la parte superior de la página, y haga clic en *Configuración de la tienda / Envío*.  
2. En **Agrupar las entregas**, rellene el campo **Crear grupos de envío con intervalos de X día(s)**.  
3. Haga clic en el botón **Guardar**.  
