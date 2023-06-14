---
title: 'Configurar la Alerta de Stock Crítico'
id: 6FD0GHeQPCsKIMgkQ88SGu
status: PUBLISHED
createdAt: 2017-07-20T22:00:33.917Z
updatedAt: 2023-03-29T17:51:04.547Z
publishedAt: 2023-03-29T17:51:04.547Z
firstPublishedAt: 2017-07-20T22:18:34.892Z
contentType: tutorial
productTeam: Post-purchase
author: authors_39
slug: configurar-la-alerta-de-stock-critico
locale: es
legacySlug: configurar-la-alerta de Stock Crítico
subcategory: 1UL6Q7nUN6SkA2g2SUsECi
---

La alerta de inventario crítico es una funcionalidad de logística que tiene el objetivo de alertar al comerciante si los ítems de su tienda están cerca de agotarse en el inventario.

### Configuración de la Alerta de Inventario Crítico

1. En el Admin VTEX, accede a **Configuración de la tienda > Envío > Configuración**, o escribe *Envío* en la barra de búsqueda en la parte superior de la página, y haga clic en *Configuración de la tienda / Envío*.   
2. En **Configuración**, rellena lo campo de **Alerta de inventario crítico**.  
3. Haga clic en **Salvar**.

![alerta-estoque-critico es](https://images.ctfassets.net/alneenqid6w5/3sIAJKB8AogSyQeEqYokCe/f696e3e2cc5ab214eeda18b7ce5f7098/alerta-estoque-critico_es.png)

Como usted puede ver por la imagen, ella puede ser marcada con flecha por cantidad de ítems o por porcentual.

### Cómo funciona la alerta

Cuando el inventario del ítem alcance la cantidad mínima configurada, se creará una tarea en el [VTEX DO](https://help.vtex.com/es/tutorial/vtex-do-interface--7KMbRL4OslN8DTX9oiuCiu). Ella se disparará siempre en el momento en el que la reserva del pedido sea hecha, o sea, en el cierre del pedido, y puede tardar de 1 a 5 minutos para aparecer en el VTEX DO.

En el caso de que la reserva sea cancelada, por ejemplo, debido a una cancelación de pedido por parte del cliente, la tarea se cerrará automáticamente.

Si el inventario del ítem es actualizado, la tarea también será cerrada. Sin embargo, si es hecha otra reserva, una nueva tarea será creada.

### Preguntas frecuentes

#### Si el producto forma parte de 2 inventario y sólo 1 de ellos alcanza la cantidad mínima, ¿es accionada la alerta?

Sí, la alerta es considerada por el inventario, por separado.

#### ¿Sirve esa alerta para ítems que están en el inventario de Sellers?

No, el Logistics verifica sólo los inventarios disponibles en la tienda.

#### ¿Dónde veo esas alertas? ¿Cómo puedo acceder al VTEX DO?
Las alertas quedan registradas en el [VTEX DO](https://help.vtex.com/es/tutorial/vtex-do-interface--7KMbRL4OslN8DTX9oiuCiu), y mientras tanto sólo se puede acceder a ellas por medio de Gestión de pedidos. Sin embargo, también ponemos a disposición una [API](https://developers.vtex.com/docs/api-reference/vtex-do-api) para el caso de que usted quiera buscar o atribuir una tarea a alguna persona, por ejemplo. Consulte la documentación de la API aquí.
