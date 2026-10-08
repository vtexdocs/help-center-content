---
title: 'Errores de SLA en la integración de pedidos de marketplace'
id: X8lSfxT44OyxkxwvnRk1X
status: PUBLISHED
createdAt: 2021-08-02T22:55:49.181Z
updatedAt: 2026-10-07T22:36:00.000Z
publishedAt: 2023-03-29T23:48:42.116Z
firstPublishedAt: 2021-08-02T23:29:49.747Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: sla-errors-in-marketplace-integration-orders
legacySlug: errores-de-sla-en-la-integracion-de-pedidos-de-marketplace
locale: es
subcategoryId: 2LcLWCYaEm5qPmOuYUiKIS
domainFilters:
  - Marketplace
  - Logística
  - Integraciones
symptomFilters:
  - Error de sincronización
  - Configuración incorrecta
---

Cuando un pedido de marketplace no se integra en VTEX por un error de SLA, se informa un mensaje de error en cada pedido. Para comprobar los errores, en el Admin VTEX accede a **Marketplace > Conexiones > Pedidos** o ingresa **Pedidos** en la barra de búsqueda.

El SLA es el acuerdo de servicio entre la tienda y el marketplace. El error indica que algún factor está impidiendo la entrega al cliente final. Para identificar la causa, haz una [simulación de envío](/es/tutorial/simulacao-de-frete).

Los errores de SLA más comunes en la integración de pedidos de marketplace son:

- **Falta de stock**
- **Ítem fuera de la colección o de la política comercial**
- **Código postal no atendido**
- **Muelle sin política comercial**
- **SKU inactivo**

## Solución

Para corregir los errores de SLA en la integración de pedidos de marketplace, considera las opciones presentadas en la siguiente tabla. Después de corregir la causa, reprocesa el pedido en **Marketplace > Conexiones > Pedidos**, haciendo clic en **Acciones > Reprocesar**. Si el error persiste, abre un [ticket para el soporte VTEX](/es/docs/tutorials/abrir-tickets-para-el-soporte-vtex).

|Mensaje de error|Significado|Acción requerida|
|---|---|---|
|**Falta de stock**|Uno o más SKUs del pedido no están disponibles.|Consulta [Errores de falta de stock en la integración de pedidos de marketplace](/es/troubleshooting/errores-de-falta-de-stock-en-la-integracion-de-pedidos-de-marketplace).|
|**Ítem que no consta en la colección o política comercial**|El SKU no está marcado en la colección o en la política comercial definida para el marketplace.|Asocia el SKU como se indica en [Asociación de SKU a una política comercial](/es/docs/tutorials/asociacion-de-sku-a-una-politica-comercial).|
|**Código postal de entrega no atendido por la estrategia de envío**|La entrega a la dirección del pedido no está configurada en la política de envío.|Ajusta la [política de envío](/es/docs/tutorials/politica-de-envio) para atender el código postal.|
|**Muelle no asociado a la política comercial**|El muelle usado en la entrega no está vinculado a la política comercial del marketplace.|Al [registrar el muelle](/es/docs/tutorials/gestionar-el-muelle), vincúlalo a la política comercial del marketplace.|
|**SKU inactivo**|El SKU no está activo, y solo se integran los SKUs activos.|Verifica el status en **Catálogo > Productos y SKUs** y activa el SKU.|
