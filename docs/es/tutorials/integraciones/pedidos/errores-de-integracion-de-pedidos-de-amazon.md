---
title: 'Errores de integración de pedidos de Amazon'
id: QCOquR8cai882HhDOqNm7
status: PUBLISHED
createdAt: 2021-08-31T15:43:51.365Z
updatedAt: 2023-03-29T23:46:13.266Z
publishedAt: 2023-03-29T23:46:13.266Z
firstPublishedAt: 2021-08-31T16:03:20.021Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: order-errors-in-the-amazon-integration
legacySlug: errores-de-integracion-de-pedidos-de-amazon
locale: es
subcategoryId: 5m1qqfnmfYKsO0KiOQC8Ky
---

Hay varias razones por las que un pedido entre un _marketplace_ y una tienda VTEX no se integra, y para cada una de ellas hay una notificación que indica la naturaleza del error. Puede encontrar el mensaje de error en el Admin VTEX, en el módulo **Marketplace > Conexiones > Pedidos**. Para visualizar el mensaje, simplemente haga clic en el pedido.

En Amazon, hay errores de integración de pedidos que se producen con más frecuencia que otros. Este artículo reúne los más comunes e indica cómo resolverlos.

#### Mensaje de error

`No available sla to deliver this order`

Los errores de SLA significan que algún factor está impidiendo la entrega del pedido al consumidor final. Para identificar el origen del error y corregirlo, consulte el artículo [Errores de SLA en la integración de pedidos de marketplace](/es/docs/tutorials/errores-de-sla-en-la-integracion-de-pedidos-de-marketplace).

____

#### Mensaje de error

`Order with SKU out of stock`

Los errores relacionados con la falta o insuficiencia de stock pueden tener varias causas. Para identificar el origen del error y corregirlo, consulte el artículo [Errores de falta de stock en la integración de pedidos de marketplace](/es/docs/tutorials/errores-de-falta-de-stock-en-la-integracion-de-pedidos-de-marketplace).

____

#### Mensaje de error

`Order with SKU inactive or out of sales channel`

Solo se integran los pedidos de SKU activos, por lo que debe comprobar el status del ítem en el Admin VTEX, en el módulo **Catálogo > Productos y SKUs**. Puede activar el SKU [rellenando los campos del SKU](/es/docs/tutorials/agregar-o-editar-skus) o [activar los SKU en masa](/es/docs/tutorials/activar-skus-en-massa).

Si los SKU del pedido están activos, significa que el problema es que los SKU no están vinculados a la política comercial utilizada en Amazon. En este caso, es necesario [asociar el SKU a la política comercial](/es/docs/tutorials/asociacion-de-sku-a-una-politica-comercial).

____

#### Mensaje de error

`Sku in order don't belong to a VTEX Store, sku id it's not a integer`

Este error se produce cuando el SKU del pedido no se identifica en la plataforma VTEX. Esto puede deberse a que el ítem ha sido retirado y ya no existe en el catálogo, o a que Amazon ha proporcionado alguna información incorrecta. Por lo tanto, si el SKU aparece normalmente en el sistema, póngase en contacto con el marketplace.

### Sepa más

- [Errores de falta de stock en la integración de pedidos de marketplace](/es/docs/tutorials/errores-de-falta-de-stock-en-la-integracion-de-pedidos-de-marketplace)
- [Errores de SLA en la integración de pedidos de marketplace](/es/docs/tutorials/errores-de-sla-en-la-integracion-de-pedidos-de-marketplace)
- [Resolución de errores de divergencia de precio en pedidos de marketplace](/es/docs/tutorials/resolucion-de-errores-de-divergencia-de-precio-en-pedidos-de-marketplace)
