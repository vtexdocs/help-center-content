---
title: 'Errores de integración de pedidos de Mercado Libre'
id: 4w4jAIWUy3OELgu3HFmGgh
status: PUBLISHED
createdAt: 2021-08-30T18:04:27.780Z
updatedAt: 2026-10-07T22:36:00.000Z
publishedAt: 2023-08-04T18:43:32.189Z
firstPublishedAt: 2021-08-30T18:37:05.901Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: order-errors-in-the-mercado-livre-integration
legacySlug: errores-de-integracion-de-pedidos-de-mercado-libre
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

Cuando se produce un error de integración de pedidos entre **Mercado Libre** y una tienda, se informa un mensaje de error en cada pedido. Para comprobar los errores, en el Admin VTEX accede a **Marketplace > Conexiones > Pedidos** o ingresa **Pedidos** en la barra de búsqueda.

Los errores más comunes de integración de pedidos de Mercado Libre son:

- **Error de SLA**
- **Documento del cliente inválido**
- **Dato de registro pendiente**
- **SKU sin stock**
- **SKU inactivo o fuera de la política comercial**
- **Divergencia de precios**
- **Token inválido**

## Solución

Para corregir los errores de integración de pedidos de Mercado Libre, considera las opciones presentadas en la siguiente tabla:

|Mensaje de error|Significado|Acción requerida|
|---|---|---|
|**Pedido no importado pues el SLA de entrega seleccionado no está disponible**|Algún factor está impidiendo la entrega del pedido al cliente final.|Consulta [Errores de SLA en la integración de pedidos de marketplace](/es/troubleshooting/errores-de-sla-en-la-integracion-de-pedidos-de-marketplace).|
|**El campo documento del cliente es inválido**|El número de identificación fiscal no se envió o se completó de forma incorrecta.|Contacta a Mercado Libre y ajusta el documento del cliente.|
|**Seller.unable_to_list (information)**|Falta un dato de registro o se completó fuera del estándar aceptado por Mercado Libre. El tipo de información aparece en el mensaje, como _phone_pending_.|Contacta a Mercado Libre y ajusta el dato indicado.|
|**Order with SKU out of stock**|Hay falta o insuficiencia de stock.|Consulta [Errores de falta de stock en la integración de pedidos de marketplace](/es/troubleshooting/errores-de-falta-de-stock-en-la-integracion-de-pedidos-de-marketplace).|
|**Order with SKU inactive or out of sales channel**|El SKU no está activo o no está vinculado a la política comercial utilizada en Mercado Libre.|Verifica el status en **Catálogo > Productos y SKUs**. Activa el SKU [rellenando los campos del SKU](/es/docs/tutorials/agregar-o-editar-skus) o [activando SKUs en masa](/es/docs/tutorials/activar-skus-en-massa). Si el SKU ya está activo, [asócialo a la política comercial](/es/docs/tutorials/asociacion-de-sku-a-una-politica-comercial).|
|**Taxes are different from store desired values**|El precio del producto en Mercado Libre es diferente del precio configurado en VTEX.|Consulta [Resolución de errores de divergencia de precios en pedidos de marketplace](/es/troubleshooting/resolucion-de-errores-de-divergencia-de-precio-en-pedidos-de-marketplace).|
|**Error validating grant. Your authorization code or refresh token may be expired or it was already used**|El token de la integración expiró o fue desactivado.|Contacta a Mercado Libre y vuelve a autorizar la integración.|
