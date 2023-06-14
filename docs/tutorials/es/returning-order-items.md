---
title: Devolución de ítems de un pedido
id: tutorials_191
status: DRAFT
createdAt: 2017-04-27T22:15:14.398Z
updatedAt: 2023-03-23T00:37:04.248Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:00:47.176Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: como-hacer-una-devolucion-de-articulos
legacySlug: como-hacer-una-devolucion-de-articulos
subcategory: 2t00bBkcAwIkgSCGKsMOwY
---

Los clientes de tu tienda pueden solicitar el cambio o la devolución de ítems de un pedido. De este modo, la funcionalidad **Devolución de ítems** permite retirar ítems de un pedido para que los productos sean devueltos.

<div class = "alert alert-info">
Consulta el artículo <a href="https://help.vtex.com/es/tutorial/como-devolver-itens-do-pedido-beta--2bSNWwD0g8fcUmuupLao9i">Cómo devolver ítems del pedido (Beta)</a> para saber cómo utilizar la funcionalidad en el Admin V4.
</div>

Para realizar la devolución en el VTEX Admin:

1. Ve a **PEDIDOS > Gestión de pedidos**.
2. Selecciona el pedido deseado. Puedes utilizar los [filtros](https://help.vtex.com/es/tutorial/como-filtrar-pedidos--tutorials_192).
3. En la sección **Paquete**, haz clic en <i class="fas fa-ellipsis-v"></i> menu tres puntos.
4. Selecciona la opción `Devolver ítems`.
5. Rellena los campos:
    * ¿Qué fue devuelto?
    * Número del documento de devolución
    * ¿Hay algún valor adicional que se deba reembolsar?
6. Haz clic en `Solicitar reembolso`.

![Devolucion de items](https://drive.google.com/uc?export=download&id=1kZVs7Kq2zTOGz8KxkT_Y8LqnObagdi4f)

<div class="alert alert-warning">
Ten en cuenta que:
<ul>
<li>La devolución de un SKU en el módulo Gestión de pedidos no actualiza la cantidad de SKU que están disponibles en el stock. La tienda debe actualizar la cantidad de ítems en el <a href="https://help.vtex.com/es/tutorial/gerenciar-itens-em-estoque--tutorials_139">stock</a>.</li>
<li>El número de la factura de devolución debe ser diferente al de la factura de venta.</li>
<li>Tras la devolución, se notifica al sistema de pago para que realice el <a href="https://help.vtex.com/es/tutorial/como-funciona-estorno-quando-ha-devolucao-do-item">reembolso</a>.</li>
<li>Solo es posible devolver pedidos que tengan al menos una factura insertada en la plataforma.</li>
</ul>
</div>
