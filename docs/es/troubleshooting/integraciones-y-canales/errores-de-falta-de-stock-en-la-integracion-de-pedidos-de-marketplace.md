---
title: 'Errores de falta de stock en la integración de pedidos de marketplace'
id: s1i5OCcPFslrMkZJLDnfP
status: PUBLISHED
createdAt: 2021-07-28T19:50:13.475Z
updatedAt: 2026-10-07T22:21:00.000Z
publishedAt: 2023-03-28T14:41:11.666Z
firstPublishedAt: 2021-07-28T19:55:21.464Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: out-of-stock-errors-in-marketplace-integration-orders
legacySlug: errores-de-falta-de-stock-en-pedidos-de-la-integracion-con-el-marketplace
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

Cuando un pedido realizado en un marketplace no se integra en VTEX por falta de _stock_, se informa un mensaje de error en cada pedido. Para comprobar los errores, en el Admin VTEX accede a **Marketplace > Conexiones > Pedidos** o ingresa **Pedidos** en la barra de búsqueda.

Para comprobar si el SKU está disponible, haz una [simulación de envío](/es/tutorial/simulacao-de-frete). El simulador muestra las condiciones de entrega del producto sin crear un pedido.

Los errores más comunes de falta de _stock_ en la integración de pedidos de marketplace son:

- **Indisponibilidad de stock**
- **SKU inactivo**
- **Stock negativo**
- **Ítem fuera de la colección o de la política comercial**

## Solución

Para corregir los errores de falta de _stock_ en la integración de pedidos de marketplace, considera las opciones presentadas en la siguiente tabla. Después de corregir la causa, reprocesa el pedido en **Marketplace > Conexiones > Pedidos**, haciendo clic en **Acciones > Reprocesar**. Si el error persiste, abre un [ticket para el soporte VTEX](/es/docs/tutorials/abrir-tickets-para-el-soporte-vtex).

|Mensaje de error|Significado|Acción requerida|
|---|---|---|
|**Indisponibilidad de stock**|Uno o más SKUs del pedido no tienen cantidad disponible.|[Actualiza la cantidad de SKUs en stock](/es/docs/tutorials/actualization-de-la-cantidad-de-items-en-stock).|
|**SKU inactivo**|El SKU no está activo, y solo se integran los SKUs activos.|Verifica el status del ítem en el Admin VTEX, en **Catálogo > Productos y SKUs**, y activa el SKU.|
|**Stock negativo**|Hay más ítems reservados que la cantidad total disponible en stock.|Consulta [por qué el stock está negativo](/es/docs/tutorials/actualization-de-la-cantidad-de-items-en-stock#por-que-mi-stock-esta-negativo) y ajusta la cantidad disponible.|
|**Ítem que no consta en la colección o política comercial**|El SKU no está marcado en la colección o en la política comercial definida para el marketplace.|Asocia el SKU a la política comercial de la integración, como se describe en [Asociación de SKU a una política comercial](/es/docs/tutorials/asociacion-de-sku-a-una-politica-comercial).|
