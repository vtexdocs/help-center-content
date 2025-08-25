---
title: 'Cómo funciona la Autorización de pedidos'
id: 3MBK6CmKHAuUjMBieDU0pn
status: PUBLISHED
createdAt: 2019-03-25T17:18:05.295Z
updatedAt: 2024-07-08T17:06:56.254Z
publishedAt: 2024-07-08T17:06:56.254Z
firstPublishedAt: 2019-03-25T17:24:44.319Z
contentType: tutorial
productTeam: Post-purchase
author: authors_41
slugEN: how-order-authorization-works
legacySlug: Aprenda-como-crear-flujos-para-la-liberación-o-aprobación-de-pedidos
locale: es
subcategoryId: 1qvm3kIrt6KA6IeGc4EQ6k
---

En el Admin VTEX, en **Configuración de la tienda > Pedidos > Autorización de pedidos**, es posible controlar la aprobación de pedidos con divergencia de precios en su tienda.

![print_autorizacao_pedidos_ES](//images.ctfassets.net/alneenqid6w5/3OSC6hxQchdd8SoWYwRI6l/f0ce68dc289044000a20ec391475c4c9/print_autorizacao_pedidos_ES.png)
La divergencia de precios en pedidos se pueden encontrar en dos escenarios principales:

- [Descuentos manuales](https://help.vtex.com/es/tutorial/como-funciona-a-autorizacao-de-pedidos--3MBK6CmKHAuUjMBieDU0pn#descuentos-manuales)
- [Divergencia de precios](https://help.vtex.com/es/tutorial/como-funciona-a-autorizacao-de-pedidos--3MBK6CmKHAuUjMBieDU0pn#divergencia-de-precios)

## Descuentos manuales

Cuando el pedido se originó en la propia tienda utilizando descuentos manuales, aplicados por operadores de televentas de la tienda, por ejemplo.

En los casos de descuentos manuales, la **Autorización de pedidos** verifica todos los ítems del pedido para comprobar el descuento de cada uno, apenas el descuento de cada ítem de forma individual. Los posibles efectos de este análisis son negar, aceptar o crear una tarea de autorización.

Si uno o más productos reciben más del descuento máximo permitido, todo el pedido se cancela, independientemente de si el valor total alcanzó el descuento o no.

## Divergencia de precios

Cuando el precio definido por el _seller_ es diferente del precio ofrecido por el _marketplace_, es posible que los pedidos no se procesen correctamente. En VTEX, el flujo de Autorización de pedidos permite controlar y aprobar automáticamente estos pedidos, a partir de la configuración de una [regla de Divergencia de precios](https://help.vtex.com/es/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW). 

### Más información

- [Regla de Divergencia de precios](https://help.vtex.com/es/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW)
- [Configuración de regla de Divergencia de precios](https://help.vtex.com/es/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe)
- [Estrategias de marketplace en VTEX](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402)
