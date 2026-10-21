---
title: 'Errores de integración de pedidos de Amazon'
id: QCOquR8cai882HhDOqNm7
status: PUBLISHED
createdAt: 2021-08-31T15:43:51.365Z
updatedAt: 2026-10-07T22:36:00.000Z
publishedAt: 2023-03-29T23:46:13.266Z
firstPublishedAt: 2021-08-31T16:03:20.021Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: order-errors-in-the-amazon-integration
legacySlug: errores-de-integracion-de-pedidos-de-amazon
locale: es
subcategoryId: 2LcLWCYaEm5qPmOuYUiKIS
domainFilters:
  - Marketplace
  - Pedidos
  - Integraciones
symptomFilters:
  - Error de sincronización
  - Configuración incorrecta
---

Cuando se produce un error de integración de pedidos entre **Amazon** y una tienda, se informa un mensaje de error en cada pedido. Para comprobar los errores, en el Admin VTEX accede a **Marketplace > Conexiones > Pedidos** o ingresa **Pedidos** en la barra de búsqueda.

Los errores más comunes de integración de pedidos de Amazon son:

- **Error de SLA**
- **SKU sin stock**
- **SKU inactivo o sin política comercial**
- **SKU no identificado**

## Solución

Para corregir los errores de integración de pedidos de Amazon, considera las opciones presentadas en la siguiente tabla:

|Mensaje de error|Significado|Acción requerida|
|---|---|---|
|**No available sla to deliver this order**|Algún factor está impidiendo la entrega del pedido al cliente final.|Consulta [Errores de SLA en la integración de pedidos de marketplace](/es/troubleshooting/errores-de-sla-en-la-integracion-de-pedidos-de-marketplace) para identificar la causa y aplicar la corrección.|
|**Order with SKU out of stock**|Hay falta o insuficiencia de stock en uno o más SKUs del pedido.|Consulta [Errores de falta de stock en la integración de pedidos de marketplace](/es/troubleshooting/errores-de-falta-de-stock-en-la-integracion-de-pedidos-de-marketplace) y sigue la corrección correspondiente.|
|**Order with SKU inactive or out of sales channel**|El SKU no está activo o no está vinculado a la política comercial utilizada en Amazon.|Verifica el status en **Catálogo > Productos y SKUs**. Activa el SKU [rellenando los campos del SKU](/es/docs/tutorials/agregar-o-editar-skus) o [activando SKUs en masa](/es/docs/tutorials/activar-skus-en-massa). Si el SKU ya está activo, [asócialo a la política comercial](/es/docs/tutorials/asociacion-de-sku-a-una-politica-comercial).|
|**Sku in order don't belong to a VTEX Store, sku id it's not a integer**|El SKU no se identificó en VTEX porque fue retirado del catálogo o porque Amazon envió información incorrecta.|Si el SKU consta en el catálogo, contacta a Amazon. Si el ítem ya no existe, el pedido no se puede integrar.|
